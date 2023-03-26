export interface NodeStr {
  Hostname:       string;
  Id:             string;
  IP:             string;
  Status:         string;
  ManagerStatus:  string;
  MasterIP:       string;
  NumberOfCPUs:   string;
  Memory:         string;
  Container:      ContainerStr[];
}

export interface ContainerStr {
  Name:           string;
  Id:             string;
  IP:             string;
  State:          string;
}
