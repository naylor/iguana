import {ClusterStr} from "./cluster";

export interface AuthStr {
  Id:             number;
  Owner:		  string;
  Name:		      string;
  Password:		  string;
  Token:          string;
  Module:         string;
}

export interface RequestStr {
  Request:		  string;
  Param:   		  ParamStr[];
}

export interface ResponseStr {
  Name:    		  string;
  Status:   	  string;
}

export interface ServiceOpModeStr {
  NewOpMode:  	  string;
  Cluster:	  	  ClusterStr;
}

export interface UniversalDTOStr {
  TableData:      any;
  Operation:      string;
  Custom:         string;
  Filter:   	  ParamStr[];
}

export interface ParamStr {
  Name:     	  string;
  Value:    	  string;
}
