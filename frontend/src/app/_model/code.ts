export interface CodeStr {
  Token:          string;
  Code:           string;
  NumberProc:     string;
  CompArgs: 	  string;
  ExecArgs: 	  string;
  CompCmd:        string;
  ExecCmd:        string;
  Sequence:       string;
  MaxTimeout:     string;
  Next:           string;
  Queue:          string;
  Container:      string[];
  IdExercise:     string;
  FileName:       string;
  Files:          string[];
}

export interface CodeEmitterStr {
  Code:             string;
  Result:           string;
  CheckCount:	    number;
  CheckList:        string;
  Command:          string;
  ExecTime:         string;
  Event:            string;
}

export interface CodeResponseStr {
  Name: 		  string;
  Status:  		  string;
  Command:  	  string;
  ExecTime:       string;
  CompTime:       string;
  CheckCount:     number;
  CheckList:      string;
  Output:         string;
}

export interface QueueStr {
  Token:          string;
  User:           string;
  Concurrency:    string;
  MaxTimeout:     number;
  Position:       number;
  StartTime:      number;
  Sequence:       string;
  Count:          number;
  Time:           string;
}

export interface CodeTempStr {
  Id:                 number;
  IdUser:             number;
  IdGroup:            number;
  Code:               string;
  Command: 	          string;
}

export interface MsgChat {
  IdUser:             number;
  Text:               string;
  Name: 	          string;
}

export interface CodePairStr {
  Option:	  		  string;
  IdGroup:	  		  number;
  IdUser:	  		  number;
  UserName:   		  string;
  Offset:  			  number;
  StartOffset:		  number;
  EndOffset: 	      number;
  Index:		  	  number;
  Length:		  	  number;
  Text:		  		  string;
  Hash:		  		  string;
}

export interface CodePairUsers {
  IdUser:			  number;
  UserName:   		  string;
}

export interface CodePairActives {
  IdGroup:	  	      number;
  Users:   			  CodePairUsers[];
}