package main

import (
	"mime/multipart"
	"net"
	"time"
)

type Configuration struct {
	PublicInterface			string `json:"PublicInterface"`
	BackendPort 			string `json:"BackendPort"`
	FrontendPort 			string `json:"FrontendPort"`
	WebSocketPort 			string `json:"WebSocketPort"`
	ClusterName	 			string `json:"ClusterName"`
	ClusterPassword			string `json:"ClusterPassword"`
	NodeMode				string `json:"NodeMode"`
	OperationMode 			string `json:"OperationMode"`
	StartContainers 		string `json:"StartContainers"`
	MaxContainers			string `json:"MaxContainers"`
	HostUser	 			string `json:"HostUser"`
	HostPassword		 	string `json:"HostPassword"`
	SelfRegistration		string `json:"SelfRegistration"`
	CodeExecTimeout			string `json:"CodeExecTimeout"`
	CodeMaxFileSize			string `json:"CodeMaxFileSize"`
	Queue					string `json:"Queue"`
	MaxConcurrency			string `json:"MaxConcurrency"`
	Debug 					string `json:"Debug"`
	Error 					string `json:"Error"`
	SmtpServer 				string `json:"SmtpServer"`
	SmtpPort 				string `json:"SmtpPort"`
	SmtpUser 				string `json:"SmtpUser"`
	SmtpPassword 			string `json:"SmtpPassword"`
	DbHost 					string `json:"DbHost"`
	DbPort 					string `json:"DbPort"`
	DbUser 					string `json:"DbUser"`
	DbPassword 				string `json:"DbPassword"`
}

type ClusterStr struct {
	Name				string `json:"Name"`
	Id					string `json:"Id"`
	IdSwarm				string `json:"IdSwarm"`
	MasterIP			net.IP `json:"MasterIP"`
	MasterMask			net.IPMask `json:"MasterMask"`
	PortFrontend		string `json:"PortFrontend"`
	Queue	 			string `json:"Queue"`
	Owner	  			string `json:"Owner"`
	Password  			string `json:"Password"`
	Check	  			string `json:"Check"`
	LastActivity 		string `json:"LastActivity"`
	NodeMode			string `json:"NodeMode"`
}

type CodeStr struct {
	Token		    	string `json:"Token"`
	Code 		    	string `json:"Code"`
	NumberProc 			string `json:"NumberProc"`
	CompArgs 	    	string `json:"CompArgs"`
	ExecArgs 	    	string `json:"ExecArgs"`
	CompCmd 	    	string `json:"CompCmd"`
	ExecCmd 	    	string `json:"ExecCmd"`
	Sequence 	    	string `json:"Sequence"`
	MaxTimeout 	    	string `json:"MaxTimeout"`
	Next	 	    	string `json:"Next"`
	Queue				string `json:"Queue"`
	Container[] 	    string `json:"Container"`
	IdExercise			string `json:"IdExercise"`
	FileName 	    	string `json:"FileName"`
	Files[] 	    	string `json:"Files"`

}

type CodeTempStr struct {
	Id		  			int64 `json:"Id"`
	IdUser    			int64 `json:"IdUser"`
	IdGroup				int64 `json:"IdGroup"`
	Code 		    	string `json:"Code"`
	Command  			string `json:"Command"`
}

type CodePairStr struct {
	Option	  			string `json:"Option"`
	IdGroup	  			int64 `json:"IdGroup"`
	IdUser	  			int64 `json:"IdUser"`
	UserName   			string `json:"UserName"`
	Offset  			int64 `json:"Offset"`
	StartOffset			int64 `json:"StartOffset"`
	EndOffset 	    	int64 `json:"EndOffset"`
	Index		  		int64 `json:"Index"`
	Length		  		int64 `json:"Length"`
	Text		  		string `json:"Text"`
	Hash		  		string `json:"Hash"`
	EventNumber	  		int64 `json:"EventNumber"`
}

type CodePairActives struct {
	IdGroup	  			int64 `json:"IdGroup"`
	Users   			[]CodePairUsers `json:"Users"`
}

type CodePairUsers struct {
	IdUser				int64 `json:"IdUser"`
	UserName   			string `json:"UserName"`
}

type QueueStr struct {
	Token		    	string `json:"Token"`
	User				string `json:"User"`
	Concurrency			string `json:"Concurrency"`
	MaxTimeout			int `json:"MaxTimeout"`
	Position	 	    int `json:"Position"`
	StartTime			int `json:"StartTime"`
	Sequence			string `json:"Sequence"`
	Count				uint64 `json:"Count"`
	Time				time.Time `json:"Time"`
}

type ContainerStr struct {
	Name 				string `json:"Name"`
	Id  				string `json:"Id"`
	IP  				string `json:"IP"`
	State  				string `json:"State"`
}

type HostIPsStr struct {
	Name 				string `json:"Name"`
	IP  				string `json:"IP"`
	Mask  				string `json:"Mask"`
	GW  				string `json:"GW"`
}

type HostInfoStr struct {
	Owner					string `json:"Owner"`
	Password				string `json:"Password"`
	SelfRegistration		string `json:"SelfRegistration"`
	IP						string `json:"IP"`
	Hostname 				string `json:"Hostname"`
	OpMode 					string `json:"OpMode"`
	LastActivity 			string `json:"LastActivity"`
	IdContainer				string `json:"IdMasterContainer"`
	Token		 			string `json:"Token"`
	PublicAddr				string `json:"PublicAddr"`
	FrontendPort			string `json:"FrontendPort"`
	WebSocketPort			string `json:"WebSocketPort"`
	Updates					map[string]int `json:"Updates"`
	CodeExecTimeout			int `json:"CodeExecTimeout"`
	CodeMaxFileSize			int `json:"CodeMaxFileSize"`
	Queue					string `json:"Queue"`
	MaxConcurrency			int `json:"MaxConcurrency"`
	Cluster					ClusterStr `json:"Cluster"`
}

type NodeStr struct {
	Hostname      		string `json:"Hostname"`
	Id            		string `json:"Id"`
	IP					string `json:"IP"`
	Status      	    string `json:"Status"`
	ManagerStatus	    string `json:"ManagerStatus"`
	MasterIP		    string `json:"MasterIP"`
	NumberOfCPUs		string `json:"NumberOfCPUs"`
	Memory	 			string `json:"Memory"`
	Container[] 	    ContainerStr `json:"Container"`
}

type AuthStr struct {
	Id					int64 `json:"Id"`
	Owner				string `json:"Owner"`
	Name				string `json:"Name"`
	Password			string `json:"Password"`
	Token				string `json:"Token"`
	Module				string `json:"Module"`
}

type RequestStr struct {
	Request				string `json:"Request"`
	Param[]				ParamStr `json:"Param"`
}

type ParamStr struct {
	Name				string `json:"Name"`
	Value				string `json:"Value"`
}

type ResponseStr struct {
	Name 				string `json:"Name"`
	Status  			string `json:"Status"`
}

type CodeResponseStr struct {
	Name 				string `json:"Name"`
	Status  			string `json:"Status"`
	Command  			string `json:"Command"`
	CompTime  			string `json:"CompTime"`
	ExecTime			string `json:"ExecTime"`
	CheckCount			int `json:"CheckCount"`
	CheckList			string `json:"CheckList"`
	Output				string `json:"Output"`
}

type ServiceOpModeStr struct {
	NewOpMode 	  		string `json:"NewOpMode"`
	Cluster		  		ClusterStr `json:"Cluster"`
}

type UniversalDTOStr struct {
	TableData 			interface{} `json:"TableData"`
	Operation 			string `json:"Operation"`
	Custom				string `json:"Custom"`
	Filter[]			ParamStr `json:"Filter"`
}

type UsersStr struct {
	Id		  			int64 `json:"Id"`
	Name     			string `json:"Name"`
	Password 			string `json:"Password"`
	Email    			string `json:"Email"`
	Module				string `json:"Module"`
	ForceChangePass		string `json:"ForceChangePass"`
	TempChangePass		string `json:"TempChangePass"`
}

type ClassMembersStr struct {
	Id		  			int64 `json:"Id"`
	IdUsers				int64 `json:"IdUsers"`
	IdClassroom			int64 `json:"IdClassroom"`
}

type GroupsStr struct {
	Id		  			int64 `json:"Id"`
	IdClassroom			int64 `json:"IdClassroom"`
	Name     			string `json:"Name"`
	Description    		string `json:"Description"`
	KeyAccess     		string `json:"KeyAccess"`
}

type GroupMembersStr struct {
	Id		  			int64 `json:"Id"`
	IdGroup    			int64 `json:"IdGroup"`
	IdUser				int64 `json:"IdUser"`
}

type GroupHistoryStr struct {
	Id		  			int64 `json:"Id"`
	IdUser				int64 `json:"IdUser"`
	IdGroup    			int64 `json:"IdGroup"`
	ESelection			int `json:"ESelection"`
	EInsert				int `json:"EInsert"`
	EReplace			int `json:"EReplace"`
	EDelete				int `json:"EDelete"`

}

type ExercisesStr struct {
	Id		  			int64 `json:"Id"`
	IdUser		  		int64 `json:"IdUser"`
	Title   			string `json:"Title"`
	Date     			string `json:"Date"`
	MaxSubmissions      int `json:"MaxSubmissions"`
	MaxTimeout		    int `json:"MaxTimeout"`
	MaxFileSize		    int `json:"MaxFileSize"`
	CheckCount          int `json:"CheckCount"`
	CheckList           string `json:"CheckList"`
	Command             string `json:"Command"`
	ExecTime            string `json:"ExecTime"`
	Content    		    string `json:"Content"`
	Code    			string `json:"Code"`
	Result   		    string `json:"Result"`
}

type ExercisesAnswersStr struct {
	Id		  			int64 `json:"Id"`
	IdUser    			int64 `json:"IdUser"`
	IdExercise     		int64 `json:"IdExercise"`
	IdGroup     		int64 `json:"IdGroup"`
	Date    			string `json:"Date"`
	Code    			string `json:"Code"`
	Result    			string `json:"Result"`
	Status    			string `json:"Status"`
	Feedback		  	string `json:"Feedback"`
	Score			  	float64 `json:"Score"`
	Event            	string `json:"Event"`

}

type AnswersHistoryStr struct {
	Id		  		    int64 `json:"Id"`
	IdExerciseAnswers   int64 `json:"IdExerciseAnswers"`
	Date                string `json:"Date"`
	Event               string `json:"Event"`
	Status              string `json:"Status"`
}

type ExerciseFilesStr struct {
	Id		  		    int64 `json:"Id"`
	IdExercise			int64 `json:"IdExercise"`
	FileName            string `json:"FileName"`
	FileContent         multipart.File `json:"FileContent"`
	Size	            int64 `json:"Size"`
}

type Classroom struct {
	Id		  		    int64 `json:"Id"`
	IdUser    			int64 `json:"IdUser"`
	Name	   			string `json:"Name"`
	MaxStudents		    int64 `json:"MaxStudents"`
	Enabled		    	int64 `json:"Enabled"`
	KeyAccess	        string `json:"KeyAccess"`
}

type ClassMembers struct {
	Id		  		    int64 `json:"Id"`
	IdUser    			int64 `json:"IdUser"`
	IdClassroom			string `json:"Name"`
	Module			    int64 `json:"MaxStudents"`
}