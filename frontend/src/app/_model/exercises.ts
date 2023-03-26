export class ExercisesStr {
  Id:		  		    number;
  IdUser:               number;
  Title:   			    string;
  Date:                 string;
  MaxSubmissions:       number;
  MaxTimeout:           number;
  MaxFileSize:          number;
  CheckCount:           number;
  CheckList:            string;
  Command:              string;
  ExecTime:             string;
  Content:    		    string;
  Code:    			    string;
  Result:    		    string;
}

export class ExerciseAnswersStr {
  Id:		  		    number;
  IdUser:   		    number;
  IdExercise:     	    string;
  IdGroup:       	    number;
  Date:    			    string;
  Code:    			    string;
  Result:    		    string;
  Status:    		    string;
  CheckCount:           number;
  CheckList:            string;
  Command:              string;
  ExecTime:             string;
  Feedback:             string;
  Score:                number;
  IdScore:              number;
  Event:                string;
}

export class AnswersHistoryStr {
  Id:		  		    number;
  IdExerciseAnswers:    number;
  Date:                 string;
  Event:                string;
  Status:               string;
}

export class ExerciseFilesStr {
  Id:		  		    number;
  IdExercise:			number;
  FileName:             string;
  FileContent:          string;
  Size:                 number;
}