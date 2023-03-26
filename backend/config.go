package main

import (
	"bytes"
	"encoding/json"
	"github.com/tkanos/gonfig"
	"net"
	"os"
	"strconv"
)

// MAIN TYPES AND GLOBALS
var GLOBAL_HOST 				HostInfoStr
var GLOBAL_NODES[] 				NodeStr				//AUX VAR TO GET NODES
var GLOBAL_FRONTNAMES[] 		HostInfoStr 		//MASTER CONTROL FRONTEND USERS
var GLOBAL_QUEUE_FRONTEND[] 	QueueStr			//CONTROL CODE RUN ORDER
var GLOBAL_CLUSTERS_AVAILABLE[] ClusterStr			//CONTROL CLUSTERS AVAILABLE IN THE SAME NET
var GLOBAL_KILL 				string				//DESTROY THREADS
var GLOBAL_OP_MODE				ServiceOpModeStr	//USED IN SERVICE MANAGER
var GLOBAL_CODEPAIR[] 			CodePairActives 	//CONTROL DE ACTIVE USERS IN SOCKET

var config Configuration

var DEFAULT_NFS_PATH string
var DEFAULT_CONFIG_PATH string
var DEFAULT_STATIC_PATH string

func ConfigFileRead() {
	// CLEAN THE GLOBALS
	GLOBAL_HOST = HostInfoStr{}
	GLOBAL_HOST.Cluster = ClusterStr{}
	GLOBAL_NODES = []NodeStr{}
	GLOBAL_FRONTNAMES = []HostInfoStr{}
	GLOBAL_QUEUE_FRONTEND = []QueueStr{}
	GLOBAL_CLUSTERS_AVAILABLE = []ClusterStr{}

	nfsDir := UtilDefaultDir("NFS")
	DEFAULT_NFS_PATH = nfsDir

	staticDir := UtilDefaultDir("STATIC")
	DEFAULT_STATIC_PATH = staticDir

	configDir := UtilDefaultDir("CONFIG")
	DEFAULT_CONFIG_PATH = configDir + "/config.yaml"

	// READ THE CONFIGURATION FILE
	err := gonfig.GetConf(DEFAULT_CONFIG_PATH, &config)
	Log("", err, "1")
	if err != nil {
		Log("Config file not found in dir: "+DEFAULT_CONFIG_PATH + ". " +
			"Let's set the system to use the default configuration!", nil, "1")
	}

	if config.FrontendPort == "" {
		config.FrontendPort = "8000"
	}
	GLOBAL_HOST.FrontendPort = config.FrontendPort

	if config.WebSocketPort == "" {
		config.WebSocketPort = "8001"
	}
	GLOBAL_HOST.WebSocketPort = config.WebSocketPort

	if config.BackendPort == "" {
		config.BackendPort = "10001"
	}

	if config.OperationMode == "" {
		config.OperationMode = "LOCAL"
	}

	if config.StartContainers == "" {
		config.StartContainers = "0"
	}

	if config.MaxContainers == "" {
		config.MaxContainers = "30"
	}

	if config.ClusterName == "" {
		config.ClusterName = "CLUSTER01"
	}

	if config.NodeMode == "" {
		config.NodeMode = "SHARED"
	}
	GLOBAL_HOST.Cluster.NodeMode = config.NodeMode

	if config.HostUser == "" {
		config.HostUser = "user@user"
	}
	GLOBAL_HOST.Owner = config.HostUser

	if config.HostPassword == "" {
		config.HostPassword = "user"
	}
	GLOBAL_HOST.Password = config.HostPassword

	if config.SelfRegistration == "" {
		config.SelfRegistration = "On"
	}
	GLOBAL_HOST.SelfRegistration = config.SelfRegistration

	if config.CodeExecTimeout == "" {
		config.CodeExecTimeout = "60"
	}
	GLOBAL_HOST.CodeExecTimeout, _ = strconv.Atoi(config.CodeExecTimeout)

	if config.CodeMaxFileSize == "" {
		config.CodeMaxFileSize = "5242880"
	}
	GLOBAL_HOST.CodeMaxFileSize, _ = strconv.Atoi(config.CodeMaxFileSize)

	if config.Queue == "" {
		config.Queue = "Off"
	}
	GLOBAL_HOST.Queue = config.Queue

	if config.MaxConcurrency == "" {
		config.MaxConcurrency = "30"
	}
	GLOBAL_HOST.MaxConcurrency,_ = strconv.Atoi(config.MaxConcurrency)

	if config.Debug == "" {
		config.Debug = "Off"
	}

	if config.Error == "" {
		config.Error = "Off"
	}

	if config.PublicInterface != "" {
		GLOBAL_HOST.PublicAddr = config.PublicInterface
		ip, _ := HostIP(config.PublicInterface)
		GLOBAL_HOST.IP = ip.String()
	}

	GLOBAL_HOST.Hostname, _ = os.Hostname()

	if config.DbUser == "" {
		config.DbUser = "root"
	}
	if config.DbPassword == "" {
		config.DbPassword = "1gu@nACS"
	}
	if config.DbHost == "" {
		config.DbHost = "localhost"
	}
	if config.DbPort == "" {
		config.DbPort = "3306"
	}
	Log(config, nil, "0")
}

func ConfigUpdateFile(config Configuration) ResponseStr {
	// READ THE CONFIGURATION FILE

	ret := ResponseStr{"ok", "Configuration updated! " +
		"The system will be restarted to apply the changes. Wait a few seconds!"}

	//write data as buffer to json encoder
	buffer := new(bytes.Buffer)
	encoder := json.NewEncoder(buffer)

	header := "" +
		"### If empty, the system will attempt to detect your network parameters. ###\n" +
		"# >>>>>>>>>>>>> Please insert changes at the end of the file. >>>>>>>>>>>> #\n" +
		"#--------------------------------------------------------------------------#\n" +
		"\n#--------------------------------------------------------------------------#\n" +
		"### Network. ###\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# HostPublicInterface\n" +
		"# Default: empty\n" +
		"# (Optional) Public interface to connect in the network\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# BackendPort\n" +
		"# Default: 10001\n" +
		"# (Optional) Back door to inter-nodes communication\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# FrontendPort\n" +
		"# Default: 8000\n" +
		"# (Optional) Port to get access to browser web page\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# WebSocketPort\n" +
		"# Default: 8001\n" +
		"# (Optional) Port to provide access to websocket (chat and code pair)\n" +
		"#--------------------------------------------------------------------------#\n" +
		"\n#--------------------------------------------------------------------------#\n" +
		"### Cluster. ###\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# ClusterName\n" +
		"# Default: CLUSTER01\n" +
		"# (Optional) Only NUMBERS and CHARACTERS\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# ClusterPassword\n" +
		"# Default: user\n" +
		"# (Optional) password to connect in the cluster\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# NodeMode\n" +
		"# Default: SHARED\n" +
		"# (Optional) " +
		"#   SINGLE: creates a node for each vCPU present on the host, \n" +
		"#     simulating a cluster. \n" +
		"#   MULTI.: allocates all vCPUs to Master virtual node. \n" +
		"#   SHARED: makes all vCPUs available to nodes, regardless of quantity.\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# OperationMode\n" +
		"# Default: LOCAL\n" +
		"# (Optional)\n" +
		"#   LOCAL: prepares the system to work on one host or virtual machine. \n" +
		"#   MASTER: defines the host or virtual machine as the master node of the \n" +
		"#     cluster, listing the service available to other hosts on the network. \n" +
		"#   NODE: sets the host or virtual machine as node mode, enabling the search \n" +
		"#     for a master host to connect. \n" +
		"#--------------------------------------------------------------------------#\n" +
		"# StartContainers\n" +
		"# Default: Auto\n" +
		"# (Optional) The number of containers to be started on init\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# MaxContainers\n" +
		"# Default: 30\n" +
		"# (Optional) The maximum number of containers running as nodes\n" +
		"#--------------------------------------------------------------------------#\n" +
		"\n#--------------------------------------------------------------------------#\n" +
		"### Admin. ###\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# HostUser \n" +
		"# Default: user@user\n" +
		"# (Optional) Default User Host (Default login to Frontend)\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# HostPassword\n" +
		"# Default: user\n" +
		"# (Optional) Default User Password\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# SelfRegistration\n" +
		"# Default: On\n" +
		"# (Optional) Allow user self-registration\n" +
		"#--------------------------------------------------------------------------#\n" +
		"\n#--------------------------------------------------------------------------#\n" +
		"### Coding. ###\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# CodeExecTimeout\n" +
		"# Default: 60\n" +
		"# (Optional) Defines a timeout to code execution (in seconds)\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# CodeMaxFileSize\n" +
		"# Default: 5242880\n" +
		"# (Optional) Sets the maximum file size to upload (in bytes)\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# Queue\n" +
		"# Default: Off\n" +
		"# (Optional) If enabled, a queue system will prevent two codes from \n" +
		"#   running at the same time\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# MaxConcurrency\n" +
		"# Default: 30\n" +
		"# (Optional) Defines the maximum number of users in the queue, \n" +
		"#   competing for resources\n" +
		"#--------------------------------------------------------------------------#\n" +
		"\n#--------------------------------------------------------------------------#\n" +
		"### Debug. ###\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# Debug\n" +
		"# Default: Off\n" +
		"# (Optional) On or Off\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# Error\n" +
		"# Default: Off\n" +
		"# (Optional) On or Off\n" +
		"\n#--------------------------------------------------------------------------#\n" +
		"# SMTP account parameters for account registration and reset passwords.  ###\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# SmtpServer\n" +
		"# Default: empty\n" +
		"# (Optional) \n" +
		"#--------------------------------------------------------------------------#\n" +
		"# SmtpPort\n" +
		"# Default: empty\n" +
		"# (Optional)\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# SmtpUser\n" +
		"# Default: empty\n" +
		"# (Optional)\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# SmtpPassword\n" +
		"# Default: empty\n" +
		"# (Optional)\n" +
		"\n#--------------------------------------------------------------------------#\n" +
		"### Database connection. Database does not allow remote access. ###\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# DbUser\n" +
		"# Default: root\n" +
		"# (Optional) \n" +
		"#--------------------------------------------------------------------------#\n" +
		"# DbPassword\n" +
		"# Default: 1gu@nACS\n" +
		"# (Optional)\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# DbPort\n" +
		"# Default: 3306\n" +
		"# (Optional)\n" +
		"#--------------------------------------------------------------------------#\n" +
		"# DbHost\n" +
		"# Default: localhost\n" +
		"# (Optional)\n" +
		"#--------------------------------------------------------------------------#\n" +
		"\n"

	encoder.SetIndent("", "\t")

	err := encoder.Encode(config)
	Log(config, nil, "0")

	if err != nil {
		return ResponseStr{"error", err.Error()}
	}
	file, err := os.OpenFile(DEFAULT_CONFIG_PATH, os.O_RDWR|os.O_CREATE, 0755)
	file.Truncate(0)
	file.Seek(0,0)
	file.WriteString(header)
	if err != nil {
		return ResponseStr{"error", err.Error()}
	}
	_, err = file.Write(buffer.Bytes())
	if err != nil {
		return ResponseStr{"error", err.Error()}
	}

	return ret
}

func ConfigNetParameters(ip net.IP, netAddr string) {

	//If we have any IP, we don't need to continue anymore
	if GLOBAL_HOST.IP != "" {
		return
	}

	Log("UtilSetNetParameter ip|netAddr " +
		ip.String() + "|" + netAddr, nil, "0" )

	// If the netAddr was set in config file
	if config.PublicInterface != "" {
		netAddr = config.PublicInterface
		Log("config netAddr " + netAddr, nil, "0" )
	}

	// If receive an IP from Node Or Frontend Browser
	if GLOBAL_HOST.IP == "" && ip.String() != "" && netAddr == "" {
		GLOBAL_HOST.IP = ip.String()
		Log("Node Or Frontend Browser ip " + ip.String(), nil, "0" )
	}

	// If receive an IP from ClusterNotify
	if GLOBAL_HOST.IP == "" && netAddr != "" {
		ip, _ := HostIP(netAddr)
		GLOBAL_HOST.IP = ip.String()
		GLOBAL_HOST.PublicAddr = netAddr
		Log("ClusterNotify " + ip.String() + "|" + netAddr, nil, "0" )
	}

	// START SWARM AND CONTAINER IF HAS A Public Addr
	if GLOBAL_HOST.IP != "" &&
		(GLOBAL_HOST.OpMode == "LOCAL" || GLOBAL_HOST.OpMode == "MASTER") {

		GLOBAL_HOST.Cluster.MasterIP = net.ParseIP(GLOBAL_HOST.IP)
		HostPublicAddr()
	}

}

func ConfigCheckGWisCorrect(gwMaster net.IP, gwMask net.IPMask) string {
	Log("CheckGWisCorrect", nil, "")

	ip := gwMaster.Mask(gwMask)

	itf, _ := net.Interfaces()

	for _, adders := range itf {
		address, _ := adders.Addrs()
		for _, addr := range address {
			switch v := addr.(type) {
			case *net.IPNet:
				if !v.IP.IsLoopback() {
					if v.Contains(ip) {
						Log("New default gateway has been set to " + adders.Name, nil, "0")
						return adders.Name
					}
				}
			}
		}
	}
	return ""
}

func ConfigDefaultAddr() []HostIPsStr {

	IPs := []HostIPsStr{}

	itf, _ := net.Interfaces()

	for _, adders := range itf {
		if (len(adders.Name) >= 6 && adders.Name[:6] == "docker") ||
			(len(adders.Name) >= 2 && adders.Name[:2] == "lo") ||
			(len(adders.Name) >= 4 && adders.Name[:4] == "veth") {
			continue
		}

		addr, _ := adders.Addrs()
		for _, a := range addr {
			switch v := a.(type) {
			case *net.IPNet:
				if v.IP.To4() != nil {
					IPs = append(IPs,
						HostIPsStr{Name:adders.Name,
						IP:v.IP.To4().String(),
						Mask:v.Mask.String(),
						GW:v.IP.Mask(v.Mask).String()})
				}
			}
		}

	}

	return IPs

}