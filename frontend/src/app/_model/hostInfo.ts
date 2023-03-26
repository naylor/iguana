import {ClusterStr} from "./cluster";

export interface HostInfoStr {
  Owner:              string;
  Password:           string;
  SelfRegistration:   string;
  IP:                 string;
  Hostname:           string;
  OpMode:             string;
  LastActivity:       string;
  IdContainer:        string;
  Token:              string;
  PublicAddr:         string;
  PortFrontend:       string;
  WebSocketPort:      string;
  Updates:            string[];
  CodeExecTimeout:    number;
  CodeMaxFileSize:    number;
  Queue:              string;
  MaxConcurrency:     Number;
  Cluster:            ClusterStr;
}
