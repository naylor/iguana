package main

import (
	"bytes"
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"io"
	"mime/multipart"
	"reflect"
	"strconv"
	"strings"
)

func dbConnect() *sql.DB {

	var db *sql.DB

	ds := config.DbUser + ":" +
		config.DbPassword +
		"@tcp(" + config.DbHost +
		":" + config.DbPort + ")/ICS"
	//Log(ds, nil, "0")

	db, err := sql.Open("mysql", ds)
	Log("", err, "0")
	//defer db.Close()

	_, err = db.Exec("SET SESSION join_buffer_size=33554432")
	Log("", err, "0")
	_, err = db.Exec("SET SESSION sort_buffer_size=33554432")
	Log("", err, "0")

	return db
}

func dbCreate() {

	//Let's check is Admin changes his Password or Name...
	sqlTables := "INSERT INTO Users (Id, Name, Password, Email, Module, ForceChangePass, TempChangePass) " +
		"VALUES (1, '" + GLOBAL_HOST.Owner + "', " +
		"'" + UtilCreateHash(GLOBAL_HOST.Password) + "', " +
		"'" + GLOBAL_HOST.Owner + "', 'Admin', 0, '') ON DUPLICATE KEY UPDATE " +
		"Name='" + GLOBAL_HOST.Owner + "', " +
		"Password='" + UtilCreateHash(GLOBAL_HOST.Password) + "', " +
		"Email='" + GLOBAL_HOST.Owner + "', " +
		"Module='Admin', ForceChangePass=0, TempChangePass=''"

	db := dbConnect()
	defer db.Close()

	Log(db, nil, "0")
	_, err := db.Exec(sqlTables)
	Log(sqlTables, err, "0")

}

func dbView(custom string, filter []ParamStr) interface{} {

	sqlCustom := ""

	Block{
		Try: func() {
			/////////// HOST-CREDENTIALS ////////////////////
			if custom == "host-credentials" {
				sqlCustom = "SELECT * FROM Users WHERE Email='" + filter[0].Value + "'"
			}

			/////////// USERS ////////////////////
			if custom == "users" {
				sqlCustom = "SELECT * FROM Users ORDER BY Name"
			}
			if custom == "users-edit" {
				sqlCustom = "SELECT * FROM Users WHERE Id='" + filter[0].Value + "'"
			}

			/////////// GROUPS ////////////////////
			if custom == "groups" {
				sqlCustom = "SELECT *, (SELECT COUNT(*) FROM GroupMembers m WHERE m.IdGroup = g.Id) as mCount" +
					" FROM `Groups` g " +
					" WHERE IdClassroom='" + filter[0].Value + "'" +
					" ORDER BY Name"
			}
			if custom == "groups-edit" {
				sqlCustom = "SELECT * FROM `Groups` WHERE Id='" + filter[0].Value + "'"
			}

			/////////// MEMBERS ////////////////////
			if custom == "members" {
				sqlCustom = "SELECT * FROM Users WHERE Id IN " +
					"(SELECT IdUser FROM GroupMembers WHERE IdGroup = " + filter[0].Value + ") ORDER BY Name"
			}

			/////////// USERS-CLASSROOM ////////////////////
			if custom == "users-classroom" {
				sqlCustom = "SELECT u.Id, u.Name, u.Email, c.Module FROM Users u, ClassMembers c WHERE u.Id = c.IdUser " +
					"AND c.IdClassroom='" + filter[0].Value + "'" +
					" ORDER BY Name"
			}
			if custom == "users-classroom-edit" {
				sqlCustom = "SELECT u.Id, u.Name, u.Email, c.Module, u.ForceChangePass, c.Id as IdCM " +
					" FROM Users u, ClassMembers c " +
					" WHERE u.Id = c.IdUser " +
					" AND u.Id = '" + filter[0].Value + "'" +
					" AND c.IdClassroom = '" + filter[1].Value + "'"
			}

			if custom == "users-classroom-module" {
				sqlCustom = "(SELECT c.IdUser FROM Classroom c  WHERE " +
					" c.Id = '" + filter[0].Value + "'" +
					" AND c.IdUser = '" + filter[1].Value + "'" +
					" ) UNION " +
					" (SELECT cm.Module FROM ClassMembers cm  WHERE " +
					" cm.IdClassroom = '" + filter[0].Value + "'" +
					" AND cm.IdUser = '" + filter[1].Value + "'" +
					" AND (cm.Module = 'Lecturer' OR cm.Module = 'Assistant')) "
			}

			/////////// Classroom ////////////////////
			if custom == "classroom-list" {
				sqlCustom = "SELECT DISTINCT c.Id, c.IdUser, c.Name, c.Description, " +
					" c.MaxStudents, c.Enabled, c.KeyAccess, cm.Module " +
					" FROM Classroom c LEFT JOIN ClassMembers cm " +
					" ON c.Id = cm.IdClassroom AND cm.IdUser = " + filter[0].Value +
					" WHERE c.Enabled = '" + filter[1].Value + "'" +
					" ORDER BY c.Name "
			}
			if custom == "classroom-list-admin" {
				sqlCustom = "SELECT c.Id, c.IdUser, c.Name, c.Description, " +
					" c.MaxStudents, c.Enabled, c.KeyAccess, u.Name as Owner " +
					" FROM Classroom c, Users u " +
					" WHERE c.IdUser = u.Id " +
					" ORDER BY c.Name "
			}
			if custom == "classroom-edit" {
				sqlCustom = "SELECT * FROM `Classroom` WHERE Id='" + filter[0].Value + "'"
			}

			/////////// EXERCISES ////////////////////
			sqlEx := ""
			if custom == "exercises-admin" || custom == "exercises-user" {
				sqlEx = "SELECT e.Title, e.Id, e.MaxSubmissions, e.Code,  " +
					"DATE_FORMAT(e.Date, '%Y-%m-%d %H:%i') as Date, e.Content, e.MaxTimeout, " +
					"TIMESTAMPDIFF(SECOND,NOW(),e.Date) as IsExpired, e.ExecTime, e.Command, " +
					"e.CheckCount, e.CheckList, "
			}

			if custom == "exercises-admin" {
				sqlCustom = sqlEx + "(SELECT COUNT(DISTINCT ea1.IdGroup) FROM ExerciseAnswers ea1 " +
					"WHERE ea1.IdExercise = e.Id) + " +
					"(SELECT COUNT(DISTINCT ea1.IdUser) FROM ExerciseAnswers ea1 WHERE ea1.IdExercise = e.Id " +
					"AND ea1.IdGroup IS NULL) as cAnswers " +
					"FROM Exercises e, Classroom c WHERE e.IdClassroom = c.Id AND c.Id = '" + filter[1].Value + "' " +
					"AND ( (SELECT u.Id FROM `Users` u WHERE u.Module = 'Admin' AND u.Id = '" + filter[0].Value + "' " +
					" ) IS NOT NULL OR '" + filter[0].Value + "' IN (SELECT cm.IdUser FROM ClassMembers cm WHERE cm.IdClassroom = c.Id AND " +
					"(cm.Module = 'Assistant' OR cm.Module = 'Lecturer')) )"
			}

			if custom == "exercises-user" {
				sqlCustom = sqlEx + "(SELECT g1.Name FROM ExerciseGroups eg1, `Groups` g1, GroupMembers gm1 " +
					"WHERE eg1.IdGroup = g1.Id AND eg1.IdExercise = e.Id AND gm1.IdGroup = g1.Id " +
					"AND gm1.IdUser = '" + filter[0].Value + "') as hasGroup, " +
					"(SELECT COUNT(DISTINCT ea1.IdGroup) FROM ExerciseAnswers ea1 WHERE " +
					"ea1.IdExercise = e.Id AND ea1.IdGroup IN (SELECT gm.IdGroup FROM " +
					"GroupMembers gm WHERE gm.IdUser= '" + filter[0].Value + "'  ) ) + (SELECT COUNT(DISTINCT ea1.IdUser) " +
					"FROM ExerciseAnswers ea1 WHERE ea1.IdExercise = e.Id AND ea1.IdUser = '" + filter[0].Value + "' " +
					"AND ea1.IdGroup IS NULL) as cAnswers " +
					"FROM Exercises e, Classroom c WHERE e.IdClassroom = c.Id AND c.Id = '" + filter[1].Value + "' " +
					"AND ( (c.Id IN (SELECT cm.IdClassroom FROM ClassMembers cm  " +
					" WHERE cm.IdUser = '" + filter[0].Value + "') " +
					" AND e.Id NOT IN (SELECT eg.IdExercise FROM ExerciseGroups eg, `Groups` g " +
					" WHERE eg.IdGroup = g.Id ) ) OR ( e.Id IN (SELECT eg.IdExercise " +
					"FROM ExerciseGroups eg, GroupMembers gm WHERE " +
					"eg.IdGroup = gm.IdGroup AND gm.IdUser = '" + filter[0].Value + "') ) ) "
			}

			if custom == "exercises-edit" {
				sqlCustom = "SELECT *," +
					"DATE_FORMAT(Date, '%Y') as EDYear," +
					"DATE_FORMAT(Date, '%m') as EDMonth," +
					"DATE_FORMAT(Date, '%d') as EDDay," +
					"DATE_FORMAT(Date, '%H') as EDHour," +
					"DATE_FORMAT(Date, '%i') as EDMinute " +
					"FROM Exercises WHERE Id = '" + filter[0].Value + "' " +
					"ORDER BY Date DESC"
			}

			/////////// EXERCISE-GROUPS ////////////////////
			if custom == "exercises-groups" {
				sqlCustom = "SELECT * FROM `Groups` WHERE Id IN (SELECT IdGroup FROM ExerciseGroups " +
					"WHERE IdExercise = " + filter[0].Value + ") ORDER BY Name"
			}

			/////////// EXERCISE-ANSWERS ////////////////////
			if custom == "exercises-answer-history" {
				sqlCustom = "SELECT * FROM AnswersHistory WHERE IdExerciseAnswers " +
					"= " + filter[0].Value + " ORDER BY Date DESC"
			}

			if custom == "exercises-list-user" {
				sqlCustom = "SELECT *, (TIMESTAMPDIFF(SECOND,NOW(),e.Date)) as CountDown, " +
					"(TIMESTAMPDIFF(SECOND,NOW(),e.Date) * 86400.0) as ExIsExpired, " +
					"(SELECT g.Id FROM `Groups` g WHERE g.Id IN (SELECT gm.IdGroup FROM GroupMembers gm, " +
					"ExerciseGroups eg WHERE gm.IdGroup = eg.IdGroup AND eg.IdExercise = e.Id " +
					"AND gm.IdUser = '" + filter[1].Value + "')) as gId, " +
					"(SELECT g.Name FROM `Groups` g WHERE g.Id IN (SELECT gm.IdGroup FROM GroupMembers gm, " +
					"ExerciseGroups eg WHERE gm.IdGroup = eg.IdGroup AND eg.IdExercise = e.Id " +
					"AND gm.IdUser = '" + filter[1].Value + "')) as gName " +
					"FROM Exercises e WHERE e.Id = '" + filter[0].Value + "' "
			}

			if custom == "exercises-list-admin" {
				sqlCustom = "SELECT *, (TIMESTAMPDIFF(SECOND,NOW(),e.Date)) as CountDown, " +
					"(TIMESTAMPDIFF(SECOND,NOW(),e.Date) * 86400.0) as ExIsExpired " +
					"FROM Exercises e WHERE e.Id = '" + filter[0].Value + "' "
			}

			if custom == "exercises-answer-admin" || custom == "exercises-answer-user" {
				sqlUser := ""
				if custom == "exercises-answer-user" {
					sqlUser = " AND ( (ea.IdUser = " + filter[1].Value + " AND ea.IdGroup IS NULL) OR " +
						"ea.IdGroup IN (SELECT gm.IdGroup " +
						"FROM GroupMembers gm WHERE gm.IdUser = " + filter[1].Value + " )) "
				}

				sqlCustom = "SELECT ea.*, DATE_FORMAT(ea.Date, '%Y-%m-%d %H:%i') as Date, " +
					"(TIMESTAMPDIFF(SECOND,NOW(),ea.Date) * 86400.0) as IsExpired, " +
					"(SELECT u.Name FROM Users u WHERE u.Id = ea.IdUser) as Name, " +
					"(SELECT g.Name FROM ExerciseGroups eg, GroupMembers gm, `Groups` g " +
					"WHERE eg.IdGroup = gm.IdGroup AND g.Id = gm.IdGroup AND eg.IdExercise = ea.IdExercise " +
					"AND gm.IdUser = ea.IdUser) as gName, " +
					"(SELECT g.Id FROM ExerciseGroups eg, GroupMembers gm, `Groups` g " +
					"WHERE eg.IdGroup = gm.IdGroup AND g.Id = gm.IdGroup AND eg.IdExercise = ea.IdExercise " +
					"AND gm.IdUser = ea.IdUser) as gId, " +
					"es.Id as IdScore, es.Score, es.Feedback, " +
					"(SELECT COUNT(*) FROM AnswersHistory a WHERE a.IdExerciseAnswers = ea.Id) as History, " +
					"(CASE WHEN ea.IdGroup IS NOT NULL THEN (SELECT COUNT(*) FROM ExerciseAnswers ea1 " +
					"WHERE ea1.IdGroup IN (SELECT DISTINCT ea2.IdGroup FROM ExerciseAnswers ea2 " +
					"WHERE ea2.IdExercise = ea.IdExercise AND ea2.IdUser = ea.IdUser)) ELSE " +
					"(SELECT COUNT(*) FROM ExerciseAnswers ea1 WHERE ea1.IdGroup IS NULL " +
					"AND ea1.IdExercise = ea.IdExercise AND ea1.IdUser = ea.IdUser) END) as TotalEx " +
					"FROM ExerciseAnswers ea LEFT JOIN ExerciseScores es ON es.IdExercise = ea.IdExercise " +
					"AND (es.IdUser = ea.IdUser OR es.IdGroup = ea.IdGroup)  " +
					"WHERE ea.IdExercise = " + filter[0].Value +
					sqlUser +
					" ORDER BY gId"
			}
			if custom == "exercises-answer-edit" {
				sqlCustom = "SELECT * FROM ExerciseAnswers WHERE Id = " + filter[0].Value
			}
			if custom == "exercises-answer-files" {
				sqlCustom = "SELECT Id, IdExercise, FileName, Size FROM ExerciseFiles WHERE IdExercise = " + filter[0].Value
			}

			/////////// GROUP-HISTORY ////////////////////
			if custom == "group-history-user" {
				sqlCustom = "SELECT * FROM GroupHistory " +
					"WHERE IdUser = '" + filter[0].Value + "' AND IdGroup = '" + filter[1].Value + "'"
			}
			if custom == "group-history-admin" {
				sqlCustom = "SELECT g.*,u.Name FROM GroupHistory g, Users u " +
					"WHERE u.Id = g.IdUser AND IdGroup = '" + filter[0].Value + "'"
			}

			/////////// CODE-TEMP ////////////////////
			if custom == "code-temp-user" {
				sqlCustom = "SELECT * FROM CodeTemp " +
					"WHERE IdUser = '" + filter[0].Value + "'"
			}
			if custom == "code-temp-group" {
				sqlCustom = "SELECT * FROM CodeTemp " +
					"WHERE IdGroup = '" + filter[0].Value + "'"
			}
		},
		Catch: func(e Exception) {
			Log("Exception", nil, "1")
			Log(e, nil, "0")
		},
	}.Do()

	return queryToJson(sqlCustom)
}

func dbDrop(custom string, filter []ParamStr) ResponseStr {

	var ret ResponseStr

	sqlCustom := ""
	Block{
		Try: func() {
			if custom == "users" {
				sqlCustom = "DELETE FROM Users WHERE Id = '" + filter[0].Value + "'"
			}
			if custom == "groups" {
				sqlCustom = "DELETE FROM `Groups` WHERE Id = '" + filter[0].Value + "'"
			}
			if custom == "classroom" {
				sqlCustom = "DELETE FROM `Classroom` WHERE Id = '" + filter[0].Value + "'"
			}
			if custom == "classMembers" {
				sqlCustom = "DELETE FROM ClassMembers WHERE " +
					"IdUser = " + filter[0].Value + " AND IdClassroom = " + filter[1].Value
			}
			if custom == "GroupMembers" {
				sqlCustom = "DELETE FROM GroupMembers WHERE " +
					"IdUser = " + filter[0].Value + " AND IdGroup = " + filter[1].Value
			}
			if custom == "exercises" {
				sqlCustom = "DELETE FROM Exercises WHERE Id = '" + filter[0].Value + "'"

			}
			if custom == "exercises-groups" {
				sqlCustom = "DELETE FROM ExerciseGroups WHERE " +
					"IdExercise = " + filter[0].Value + " AND IdGroup = " + filter[1].Value
			}
			if custom == "exercises-answer" {
				sqlCustom = "DELETE FROM ExerciseAnswers WHERE Id = '" + filter[0].Value + "'"
			}
			if custom == "exercises-files" {
				sqlCustom = "DELETE FROM ExerciseFiles WHERE Id = '" + filter[0].Value + "'"
			}
		},
		Catch: func(e Exception) {
			Log("Exception", nil, "1")
			Log(e, nil, "0")
		},
	}.Do()

	db := dbConnect()
	defer db.Close()

	res, err := db.Exec(sqlCustom)
	Log(sqlCustom, err, "0")

	if err != nil {
		ret.Name = "error"
		ret.Status = "Error while updating device with ID: " + err.Error()
	} else {
		rowsAff, _ := res.RowsAffected()
		if rowsAff > 0 {
			ret.Name = "ok"
			ret.Status = "Record deleted successfully."
		} else {
			ret.Name = "info"
			ret.Status = "Didn't affect on any row."
		}
	}

	return ret
}

func dbGroupKey(filter []ParamStr) ResponseStr {

	var ret ResponseStr
	var sql string
	Block{
		Try: func() {
			sql = "INSERT INTO GroupMembers (IdUser, IdGroup) " +
				"SELECT cm.IdUser, eg.IdGroup FROM ClassMembers cm, " +
				"ExerciseGroups eg, Classroom c, Exercises e, " +
				"`Groups` g WHERE c.Id = cm.IdClassroom " +
				"AND c.Id = e.IdClassroom AND e.Id = eg.IdExercise " +
				"AND eg.IdGroup = eg.IdGroup AND g.Id = eg.IdGroup " +
				"AND cm.IdUser = '" + filter[0].Value + "'" +
				"AND g.KeyAccess = '" + filter[1].Value + "'" +
				"AND c.Id = '" + filter[2].Value + "'"
		},
		Catch: func(e Exception) {
			Log("Exception", nil, "1")
			Log(e, nil, "0")
		},
	}.Do()

	db := dbConnect()
	defer db.Close()

	res, err := db.Exec(sql)
	Log(sql, err, "0")

	if err != nil {
		ret.Name = "error"
		ret.Status = "Error while updating device with ID: " + err.Error()
	} else {
		rowsAff, _ := res.RowsAffected()
		if rowsAff > 0 {
			ret.Name = "ok"
			ret.Status = "Record inserted successfully."
		} else {
			ret.Name = "info"
			ret.Status = "This key was not found."
		}
	}

	return ret
}

// BACKEND INTERNAL COMMUNICATION
func dbListUsers(email string) UsersStr {

	db := dbConnect()
	defer db.Close()

	user := UsersStr{}

	rows, err := db.Query("SELECT Name, Id, Password, Module, TempChangePass " +
		"FROM Users WHERE Email = '" + email + "'")
	Log("", err, "0")

	for rows.Next() {
		rows.Scan(&user.Name, &user.Id, &user.Password,
			&user.Module, &user.TempChangePass)
	}

	return user
}

func dbGetFileById(Id string) (string, []byte) {
	db := dbConnect()
	defer db.Close()

	rows, err := db.Query("SELECT FileName, FileContent FROM ExerciseFiles WHERE Id = '" + Id + "'")
	Log("", err, "0")

	var fileName string
	var fileContent []byte

	for rows.Next() {
		rows.Scan(&fileName, &fileContent)
	}

	return fileName, fileContent
}

func dbGetFileByName(IdExercise string, FileName string) ([]byte) {
	db := dbConnect()
	defer db.Close()

	rows, err := db.Query("SELECT FileContent FROM ExerciseFiles " +
		"WHERE IdExercise = '" + IdExercise + "' AND FileName = '" + FileName + "'")
	Log("", err, "0")

	var fileContent []byte

	for rows.Next() {
		rows.Scan(&fileContent)
	}

	return fileContent
}

func dbUpdate(t interface{}, table string) ResponseStr {
	db := dbConnect()
	defer db.Close()

	querySql := jsonToQuery(t, table)

	res, err := db.Exec(querySql)
	Log("", err, "0")

	var ret ResponseStr
	ret.Name = "info"
	ret.Status = "Didn't affect on any row."

	if err != nil {
		ret.Name = "error"
		ret.Status = "Error while updating device with ID: " + err.Error()
	} else {
		rowsAff, err := res.RowsAffected()
		Log("", err, "0")

		if rowsAff > 0 {
			ret.Name = "ok"
			ret.Status = "Successfully update table."
		}
		lastId, err := res.LastInsertId()
		if lastId > 0 {
			ret.Name = "ok"
			ret.Status = strconv.FormatInt(lastId, 10)
		}
	}

	return ret
}

func dbUpdateFile(exFiles ExerciseFilesStr, file multipart.File) ResponseStr {
	db := dbConnect()
	defer db.Close()

	statement, _ := db.Prepare("INSERT INTO ExerciseFiles (IdExercise, FileName, FileContent, Size) VALUES (?, ?, ?, ?)")

	defer file.Close()

	fileContent := &bytes.Buffer{}
	_, err := io.Copy(fileContent, file)
	Log("", err, "0")

	res, err := statement.Exec(exFiles.IdExercise, exFiles.FileName, fileContent.Bytes(), exFiles.Size)
	Log("", err, "0")

	var ret ResponseStr
	ret.Name = "info"
	ret.Status = "Didn't affect on any row."

	if err != nil {
		ret.Name = "error"
		ret.Status = "Error while updating device with ID: " + err.Error()
	} else {
		rowsAff, err := res.RowsAffected()
		Log("", err, "0")

		if rowsAff > 0 {
			ret.Name = "ok"
			ret.Status = "Successfully update table."
		}
		lastId, err := res.LastInsertId()
		if lastId > 0 {
			ret.Name = "ok"
			ret.Status = strconv.FormatInt(lastId, 10)
		}
	}

	return ret
}

// THIS FUNCTION IS ONLY TO BACKEND
func dbUpdateBack(querySql string) ResponseStr {
	db := dbConnect()
	defer db.Close()

	res, err := db.Exec(querySql)
	Log("", err, "0")

	var ret ResponseStr

	if err != nil {
		ret.Name = "error"
		ret.Status = "Error while updating device with ID: " + err.Error()
	} else {
		rowsAff, err := res.RowsAffected()
		Log("", err, "0")
		if rowsAff > 0 {
			ret.Name = "ok"
			ret.Status = "Successfully update table."
		} else {
			ret.Name = "info"
			ret.Status = "Didn't affect on any row."
		}
	}

	return ret
}

func jsonToQuery(t interface{}, table string) string {

	val := reflect.ValueOf(t)

	var keyIns string
	var valueIns string
	var valueUpd string
	var update string
	var insert string
	var id string

	Log(table, nil, "0")

	first := 0
	if val.Kind() == reflect.Map {
		for _, e := range val.MapKeys() {
			v := val.MapIndex(e)
			switch t := v.Interface().(type) {
			case string:
				if e.String() == "Id" {
					id = t
					continue
				}

				if e.String() == "Password" {
					t = UtilCreateHash(t)
				}

				if first == 1 {
					keyIns += ","
					valueIns += ","
					valueUpd += ","
					first = 0
				}

				quote := "'"
				if e.String() == "Date" && t == "now" {
					t = "NOW()"
					quote = ""
				}

				if t != "" {
					valueUpd += e.String() + "=" + quote + MysqlRealEscapeString(t) + quote
				} else {
					valueUpd += e.String() + "=null"
				}

				keyIns += e.String()
				if t != "" {
					valueIns += quote + MysqlRealEscapeString(t) + quote
				} else {
					valueIns += "null"
				}

				first = 1

			case float64:
				if e.String() == "Id" {
					id = fmt.Sprintf("%v", t)
					continue
				}

				if first == 1 {
					keyIns += ","
					valueIns += ","
					valueUpd += ","
					first = 0
				}

				if t != 0 {
					valueUpd += e.String() + "=" + fmt.Sprintf("%v", t)
				} else {
					valueUpd += e.String() + "=null"
				}

				keyIns += e.String()
				if t != 0 {
					valueIns += fmt.Sprintf("%v", t)
				} else {
					valueIns += "null"
				}

				first = 1
			}
		}
	}

	if id != "" {
		update += "UPDATE `" + table + "` SET " + valueUpd + " WHERE Id=" + id
		Log(update, nil, "0")
		return update
	}

	if id == "" {
		insert += "INSERT INTO `" + table + "` (Id," + keyIns + ") VALUES (null," + valueIns + ")"
		Log(insert, nil, "0")
		return insert
	}
	return ""
}

func queryToJson(sqlString string) interface{} {
	db := dbConnect()
	defer db.Close()

	stmt, err := db.Prepare(sqlString)
	Log(sqlString, err, "0")

	defer stmt.Close()

	rows, err := stmt.Query()
	Log("", err, "0")
	defer rows.Close()

	columns, err := rows.Columns()
	Log("", err, "0")

	tableData := make([]map[string]interface{}, 0)

	count := len(columns)
	values := make([]interface{}, count)
	scanArgs := make([]interface{}, count)
	for i := range values {
		scanArgs[i] = &values[i]
	}

	for rows.Next() {
		err := rows.Scan(scanArgs...)
		Log("", err, "0")

		entry := make(map[string]interface{})
		for i, col := range columns {
			v := values[i]

			b, ok := v.([]byte)
			if ok {
				entry[col] = string(b)
			} else {
				entry[col] = v
			}
		}
		tableData = append(tableData, entry)
	}
	// indent because I want to read the output
	return tableData
}

func MysqlRealEscapeString(value string) string {
	var sb strings.Builder
	for i := 0; i < len(value); i++ {
		c := value[i]
		switch c {
		case '\\', 0, '\n', '\r', '\'', '"':
			sb.WriteByte('\\')
			sb.WriteByte(c)
		case '\032':
			sb.WriteByte('\\')
			sb.WriteByte('Z')
		default:
			sb.WriteByte(c)
		}
	}
	return sb.String()
}
