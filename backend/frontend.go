package main

import (
	"bytes"
	"encoding/json"
	"github.com/tkanos/gonfig"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
)

func FEnableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, "+
		"Content-Length, X-Requested-With, Accept-Encoding, X-CSRF-Token, Authorization")
}

func FCredentials(r *http.Request) (bool, bool, string, ResponseStr) {

	authorization := ""
	if _, ok := r.Header["Authorization"]; ok {
		for index, n := range r.Header["Authorization"] {
			if index == 0 {
				authorization = n
			}
		}

		if len(authorization) >= 1 {
			authorization := strings.Split(authorization, ",")
			key := authorization[0]
			token := "NPZ8fvABP5pKSwU3"

			if len(authorization) >= 2 {
				owner := authorization[1]

				Block{
					Try: func() {
						for index, f := range GLOBAL_FRONTNAMES {
							if f.Owner == owner {
								token = GLOBAL_FRONTNAMES[index].Token
								break
							}
						}
					},
					Catch: func(e Exception) {
						Log("Exception", nil,"1")
						Log(e, nil,"0")
					},
				}.Do()
			}

			authorized, isMaster, _, retAuth := HostCredentials(
				AuthStr{Token: token}, key, "CHECK")

			return authorized, isMaster, token, retAuth
		}
	}

	return false, false, "", ResponseStr{}
}

func FSimpleRequest(w http.ResponseWriter, r *http.Request) {
	FEnableCors(&w)
	if r.Method == "OPTIONS" {
		return
	}

	js, err := json.Marshal("")

	authorized, isMaster, token, retAuth := FCredentials(r)
	Log("", err, "1")

	//GETTING DE SERVICE
	body, err := ioutil.ReadAll(r.Body)
	Log("", err, "0")

	bodyDecrypt := UtilDecrypt(body, token)

	var request RequestStr
	err = json.Unmarshal(bodyDecrypt, &request)
	//Log(bodyDecrypt, err, "1")

	// SWARM ADD MORE NODES
	if request.Request == "swarmAdd" {
		if authorized && isMaster && len(request.Param) >= 1 {
			numOfReplicas, _ := strconv.Atoi(request.Param[0].Value)
			ret := SwarmServiceAdd(numOfReplicas)
			js, err = json.Marshal(ret)
		} else {
			js, err = json.Marshal(retAuth)
		}
	}

	if request.Request == "activeNodes" {
		ret := SwarmNodeContainers("")
		js, err = json.Marshal(ret)
	}

	if request.Request == "version" {
		ret := "Version " + GLOBAL_VERSION_NUMBER + " | Last Release " + GLOBAL_VERSION_RELEASE
		js, err = json.Marshal(ret)
	}

	if request.Request == "activeQueues" {
		ret := GLOBAL_QUEUE_FRONTEND
		js, err = json.Marshal(ret)
	}

	if request.Request == "activeSocket" && len(request.Param) >= 1 {
		ret := listUsersCoding(request.Param[0].Value)
		js, err = json.Marshal(ret)
	}

	///////////// USER //////////////
	if request.Request == "logout" && len(request.Param) >= 1 {
		ret := UserLogout(request.Param[0].Value)
		js, err = json.Marshal(ret)
	}

	if request.Request == "recoverPassword" && len(request.Param) >= 1 {
		ret := UserRecoverPassword(r.Host, request.Param[0].Value)
		js, err = json.Marshal(ret)
	}

	//////// SysInfo ///////////
	if request.Request == "sysInfo" {
		ret := UtilSysInfo()
		js, err = json.Marshal(ret)
	}

	//////// FilesCodeExecution ///////////
	if request.Request == "filesCodeExecution" {
		ret := UtilListDir(DEFAULT_NFS_PATH + "/" + token)
		js, err = json.Marshal(ret)
	}

	///////////// REBOOT //////////////
	if request.Request == "reboot" {
		ret := UtilReboot()
		js, err = json.Marshal(ret)
	}

	//////// QUEUE ///////////
	if request.Request == "queueCheck" && len(request.Param) >= 1 {
		ret := QueueList(request.Param[0].Value)
		js, err = json.Marshal(ret)
	}

	//////// HOSTINFO ///////////
	if request.Request == "hostInfo" {

		UserSetLastActivity(token)
		ret := HostInfo(r.Host)
		js, err = json.Marshal(ret)
	}

	//////// SETTINGS ///////////
	if request.Request == "settings" {
		if authorized && isMaster {
			ret := Configuration{}
			_ = gonfig.GetConf(DEFAULT_CONFIG_PATH, &ret)
			js, err = json.Marshal(ret)
		} else {
			js, err = json.Marshal(retAuth)
		}
	}

	//////// GLOBAL ///////////
	if request.Request == "clusterAvailable" {
		js, err = json.Marshal(GLOBAL_CLUSTERS_AVAILABLE)
	}

	if request.Request == "activeFrontends" {
		js, err = json.Marshal(GLOBAL_FRONTNAMES)
	}

	// BACKEND INTER-COMMUNICATION
	if request.Request == "MasterNodeADD" {
		if authorized {
			ret := MasterAddNode(request)
			js, err = json.Marshal(ret)
		} else {
			js, err = json.Marshal(retAuth)
		}
	}

	if request.Request == "ContainerNodeList" {
		ret := ContainerList("")
		js, err = json.Marshal(ret)
	}

	js = UtilEncrypt(js, token)

	w.Header().Set("Content-Type", "application/text")
	w.Write(js)
}

func FDBRequest(w http.ResponseWriter, r *http.Request) {
	FEnableCors(&w)
	if r.Method == "OPTIONS" {
		return
	}

	js, err := json.Marshal("")

	authorized, _, token, retAuth := FCredentials(r)

	if authorized {

		//GETTING DE SERVICE
		body, err := ioutil.ReadAll(r.Body)
		Log("", err, "0")

		bodyDecrypt := UtilDecrypt(body, token)

		receivedDTO := UniversalDTOStr{}
		err = json.Unmarshal(bodyDecrypt, &receivedDTO)
		Log("", err, "0")

		if receivedDTO.Operation == "update" {
			ret := dbUpdate(receivedDTO.TableData, receivedDTO.Custom)
			js, err = json.Marshal(ret)
		}

		if receivedDTO.Operation == "view" {
			ret := dbView(receivedDTO.Custom, receivedDTO.Filter)
			Log("", err, "0")

			js, err = json.Marshal(ret)
			Log("", err, "0")
		}

		if receivedDTO.Operation == "drop" {
			ret := dbDrop(receivedDTO.Custom, receivedDTO.Filter)
			Log("", err, "0")

			js, err = json.Marshal(ret)
			Log("", err, "0")
		}

		if receivedDTO.Operation == "groupKey" {
			ret := dbGroupKey(receivedDTO.Filter)
			Log("", err, "0")

			js, err = json.Marshal(ret)
			Log("", err, "0")
		}

	} else {
		js, err = json.Marshal(retAuth)
	}

	Log("", err, "0")
	js = UtilEncrypt(js, token)

	w.Header().Set("Content-Type", "application/text")
	w.Write(js)
}

func FFileRequest(w http.ResponseWriter, r *http.Request) {
	FEnableCors(&w)
	if r.Method == "OPTIONS" {
		return
	}

	js, _ := json.Marshal("")

	authorized, _, _, retAuth := FCredentials(r)

	if authorized {

		//GETTING DE SERVICE
		ret := ResponseStr{}

		parseErr := r.ParseMultipartForm(32 << 20)
		if parseErr != nil {
			Log("", parseErr, "0")
			ret.Name = "error"
			ret.Status = parseErr.Error()
		}

		if ret.Name != "error" && (r.MultipartForm == nil || r.MultipartForm.File == nil) {
			ret.Name = "error"
			ret.Status = "File not found!"
		}

		if ret.Name != "error" {
			if _, ok := r.MultipartForm.File["media"]; !ok {
				ret.Name = "error"
				ret.Status = "File not found!"
			}
		}

		if ret.Name != "error" {
			for _, h := range r.MultipartForm.File["media"] {
				file, err := h.Open()
				if err != nil {
					Log("", err, "0")
					ret.Name = "error"
					ret.Status = err.Error()
				}

				f, _, err := r.FormFile("metadata")
				if err != nil {
					Log(f, err, "0")
					ret.Name = "error"
					ret.Status = err.Error()
				}

				metadata, err := ioutil.ReadAll(f)
				Log("", err, "0")

				param := ParamStr{}
				err = json.Unmarshal(metadata, &param)

				Log("", err, "0")

				// FILE COME FROM EXERCISE
				if param.Name == "Exercise" {
					var files ExerciseFilesStr
					files.FileName = h.Filename
					files.Size = h.Size
					files.IdExercise, _ = strconv.ParseInt(param.Value, 10, 64)
					ret = dbUpdateFile(files, file)
				}

				// FILE COME FROM CODE
				if param.Name == "Code" {
					defer file.Close()

					path := DEFAULT_NFS_PATH + "/" + param.Value + "/"
					err := UtilEnsureDir(path)
					Log("", nil, "0")
					if err != nil {
						ret.Name = "error"
						ret.Status = "There was a problem trying to create the directory in " + path
					} else {
						tmpfile, err := os.Create(path + h.Filename)
						Log(path+h.Filename, err, "0")
						defer tmpfile.Close()
						io.Copy(tmpfile, file)
					}
				}

				js, _ = json.Marshal(ret)
				break
			}
		}
	} else {
		js, _ = json.Marshal(retAuth)
	}

	w.Header().Set("Content-Type", "application/text")
	w.Write(js)
}

func FFileResponse(w http.ResponseWriter, r *http.Request) {
	FEnableCors(&w)
	if r.Method == "OPTIONS" {
		return
	}

	user, err := r.URL.Query()["user"]
	if !err || len(user[0]) < 1 {
		Log("Url Param 'user' is missing", nil, "0")
		return
	}

	option, err := r.URL.Query()["option"]
	if !err || len(option[0]) < 1 {
		Log("Url Param 'option' is missing", nil, "0")
		return
	}

	data, err := r.URL.Query()["data"]
	if !err || len(data[0]) < 1 {
		Log("Url Param 'data' is missing", nil, "0")
		return
	}

	token := ""
	Block{
		Try: func() {
			for index, f := range GLOBAL_FRONTNAMES {
				if f.Owner == user[0] {
					token = GLOBAL_FRONTNAMES[index].Token
					break
				}
			}
		},
		Catch: func(e Exception) {
			Log("Exception", nil,"1")
			Log(e, nil,"0")
		},
	}.Do()

	opt := UtilDecrypt([]byte(option[0]), token)
	Log(opt, nil, "0")

	dt := UtilDecrypt([]byte(data[0]), token)
	Log(dt, nil, "0")

	var fileName string
	var fileContent []byte

	if string(opt) == "ExerciseFiles" {
		var files ExerciseFilesStr
		err := json.Unmarshal(dt, &files)
		Log(files, err, "0")

		fileName, fileContent = dbGetFileById(strconv.Itoa(int(files.Id)))
	}
	Log(fileName, nil, "0")

	if fileName != "" {
		w.Header().Set("Content-Type", "application/octet-stream")
		w.Header().Set("Content-Disposition", "attachment; filename="+fileName)
		w.Header().Set("Content-Transfer-Encoding", "binary")
		w.Header().Set("Expires", "0")
		http.ServeContent(w, r, fileName, time.Now(), bytes.NewReader(fileContent))
	}
}

func FExecCode(w http.ResponseWriter, r *http.Request) {
	FEnableCors(&w)
	if r.Method == "OPTIONS" {
		return
	}

	js, err := json.Marshal("")

	authorized, _, token, retAuth := FCredentials(r)

	if authorized {

		//GETTING DE SERVICE
		body, err := ioutil.ReadAll(r.Body)
		Log("", err, "0")

		bodyDecrypt := UtilDecrypt(body, token)

		var code CodeStr
		err = json.Unmarshal(bodyDecrypt, &code)
		Log(code.Sequence, err, "1")

		ret := CodeResponseStr{}

		if code.Sequence == "queue" {
			ret = QueueInsert(code)
		}

		if code.Sequence == "compile" {
			ret = CodeCompile(code)
		}

		if code.Sequence == "run" {
			ret = CodeRun(code)
		}

		//Registering last activity of frontName
		UserSetLastActivity(code.Token)

		js, err = json.Marshal(ret)

	} else {
		js, err = json.Marshal(retAuth)
	}

	Log("", err, "0")

	js = UtilEncrypt(js, token)

	w.Header().Set("Content-Type", "application/text")
	w.Write(js)
}

func FOperationMode(w http.ResponseWriter, r *http.Request) {
	FEnableCors(&w)
	if r.Method == "OPTIONS" {
		return
	}

	js, err := json.Marshal("")

	authorized, isMaster, token, retAuth := FCredentials(r)

	if authorized && isMaster {

		//GETTING DE SERVICE
		body, err := ioutil.ReadAll(r.Body)
		Log("", err, "0")

		bodyDecrypt := UtilDecrypt(body, token)

		var serviceOpMode ServiceOpModeStr
		err = json.Unmarshal(bodyDecrypt, &serviceOpMode)
		Log("", err, "1")

		ret := ResponseStr{}

		if serviceOpMode.NewOpMode == GLOBAL_HOST.OpMode {
			ret.Name = "error"
			ret.Status = "Could not switch to this operation mode " +
				"as it is already the current operation mode of the host."
		}

		if serviceOpMode.NewOpMode == "MASTER" && UtilValidateNames(serviceOpMode.Cluster.Name) == false {
			ret.Name = "error"
			ret.Status = "Please choose a cluster name with only alphanumeric characters and no spaces."
		}

		ret = ClusterPassword(serviceOpMode.Cluster.Password, serviceOpMode.Cluster.Check)

		if ret.Name != "error" {

			if ret.Name != "error" && authorized && isMaster {
				if serviceOpMode.NewOpMode == "LOCAL" || serviceOpMode.NewOpMode == "NODE" || serviceOpMode.NewOpMode == "MASTER" {
					GLOBAL_OP_MODE = serviceOpMode

					ret = ResponseStr{Name: "ok", Status: "Request sent successfully. Waiting for change of operating mode."}
				}
			}
		}
		js, err = json.Marshal(ret)

	} else {
		js, err = json.Marshal(retAuth)
	}

	Log("", err, "1")

	js = UtilEncrypt(js, token)

	w.Header().Set("Content-Type", "application/text")
	w.Write(js)

}

func FConfigUpdate(w http.ResponseWriter, r *http.Request) {
	FEnableCors(&w)
	if r.Method == "OPTIONS" {
		return
	}

	js, err := json.Marshal("")

	authorized, isMaster, token, retAuth := FCredentials(r)

	if authorized && isMaster {

		//GETTING DE SERVICE
		body, _ := ioutil.ReadAll(r.Body)
		bodyDecrypt := UtilDecrypt(body, token)

		var configs Configuration
		err = json.Unmarshal(bodyDecrypt, &configs)

		ret := ConfigUpdateFile(configs)

		js, err = json.Marshal(ret)

		GLOBAL_OP_MODE.NewOpMode = configs.OperationMode

	} else {
		js, err = json.Marshal(retAuth)
	}

	Log("", err, "1")
	js = UtilEncrypt(js, token)

	w.Header().Set("Content-Type", "application/text")
	w.Write(js)
}

func FLogin(w http.ResponseWriter, r *http.Request) {
	FEnableCors(&w)
	if r.Method == "OPTIONS" {
		return
	}

	//GETTING DE SERVICE
	body, err := ioutil.ReadAll(r.Body)

	secret := "NPZ8fvABP5pKSwU3"

	bodyDecrypt := UtilDecrypt(body, secret)

	var frontend HostInfoStr
	err = json.Unmarshal(bodyDecrypt, &frontend)

	frontend.Token = secret

	ret := UserLogin(frontend)

	js, err := json.Marshal(ret)

	Log("", err, "1")
	js = UtilEncrypt(js, secret)

	w.Header().Set("Content-Type", "application/text")
	w.Write(js)
}
