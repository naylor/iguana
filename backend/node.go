package main

import (
	"encoding/json"
	"errors"
	"os"
	"time"
)

func NodeStart(msgCluster ClusterStr) error {
	// I AM A NODE

	Log("Master backend found, sending this host information...", nil, "0")

	//Lets check if the interface on config is correct, based on the received message!
	hostIP := ConfigCheckGWisCorrect(msgCluster.MasterIP, msgCluster.MasterMask)

	hostname, _ := os.Hostname()
	ipConn, _:= HostIP(hostIP)
	cpu, mem := HostResources()

	if hostIP == "" {
		err := errors.New("Unable to detect the host's IP! " +
			"This may be because the host has two IPs addresses! " +
			"Please set in the configuration file the correct network device.")
		return err
	}

	// SEND TO MASTER: MY HOSTNAME, MY IP AND MASTER IP, IF MASTER STILL NOT FIND HIS PUBLIC ADDR
	var params []ParamStr
	params = append(params, ParamStr{Name: "IP", Value:  ipConn.String()})
	params = append(params, ParamStr{Name: "Hostname", Value:  hostname})
	params = append(params, ParamStr{Name: "MasterIP", Value:  msgCluster.MasterIP.String()})
	params = append(params, ParamStr{Name: "NumberOfCPUs", Value: cpu})
	params = append(params, ParamStr{Name: "Memory", Value:  mem})
	request := RequestStr{"MasterNodeADD", params}

	var res = ResponseStr{}
	var err error

	try := 0
	for {
		if try == 3 {
			break
		}

		// SEND MESSAGE TO MASTER, ABOUT THE NODE INFORMATION
		IPService := msgCluster.MasterIP.String() + ":" + msgCluster.PortFrontend
		body, err := ServiceSendPost("simpleRequest", IPService, request)
		Log("", err, "0")

		err = json.Unmarshal(body, &res)
		Log("", err, "0")

		if err == nil {
			break
		} else {
			Log("Waiting Global Token...", nil, "0")
		}

		time.Sleep(10 * time.Second)

		try++
	}

	Log("Global Token:" + res.Status, nil, "0")

	if res.Name != "error" && res.Status != "" {
		err = SwarmJoin(msgCluster.MasterIP.String(), res.Status)
		if err == nil {
			GLOBAL_HOST.Cluster.MasterIP = msgCluster.MasterIP
			GLOBAL_HOST.Cluster.MasterMask = msgCluster.MasterMask
			GLOBAL_HOST.Cluster.Name = msgCluster.Name
			GLOBAL_HOST.Cluster.Password = msgCluster.Password
			GLOBAL_HOST.Cluster.PortFrontend = msgCluster.PortFrontend

			// MOUNT THE SHARE DIR
			nfsMount()

			Log("NODE_BACKEND: YES", nil, "1")
			go NodeCheckIsMasterAlive()
		}

		if err != nil {
			Log("Problem to node join in the cluster!", err, "1")
		}
	} else {
		err = errors.New("Problem to get the token!")
	}

	return err
}

func NodeRemove(hostname string) {
	// LET'S UPDATE GLOBAL_NODES
	var temp []NodeStr
	for _, g := range GLOBAL_NODES {
		if g.Hostname != hostname {
			temp = append(temp, g)
		}
	}
	GLOBAL_NODES = temp
}

func NodeCheckIsMasterAlive() {
	Log("NodeCheckIsMasterAlive", nil, "0")

	GLOBAL_HOST.Updates = make(map[string]int)

	for {
		//SLEEP 20 SECs for Service Consolidation
		time.Sleep(time.Second * 5)

		request := RequestStr{"hostInfo", []ParamStr{}}

		// Send message to Master
		IPService := GLOBAL_HOST.Cluster.MasterIP.String() + ":" + GLOBAL_HOST.Cluster.PortFrontend
		body, err := ServiceSendPost("simpleRequest", IPService, request)
		Log("", err, "0")

		// Get the return from Master (HostInfo)
		var host HostInfoStr
		err = json.Unmarshal(body, &host)
		Log("", err, "0")

		// If not answer or Master Operation Mode is different of MASTER
		// Let's get out of the cluster and return to OpMode NODE
		if err != nil || host.OpMode != "MASTER" {
			Log("NodeCheckIsMasterAlive | Master fail", nil, "1")

			GLOBAL_OP_MODE = ServiceOpModeStr{
				NewOpMode: GLOBAL_HOST.OpMode,
			}

			return
		}

		// Let's update the ActiveFrontends and ActiveNodes, because, when node in the
		// cluster, this values belongs the Master
		GLOBAL_HOST.Updates["activeNodes"] = host.Updates["activeNodes"]
		GLOBAL_HOST.Updates["activeFrontends"] = host.Updates["activeFrontends"]

		//ENDS THE THREAD IF OPERATION MODE CHANGES
		if GLOBAL_KILL == "1" {
			Log("KILL MasterPingNode | OpMode changes: "+GLOBAL_HOST.OpMode, nil, "1")
			return
		}
	}
}
