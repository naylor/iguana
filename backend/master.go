package main

import (
	"encoding/json"
	"net"
	"time"
)


func MasterCluster(msgCluster ClusterStr) {
	Log("MASTER_BACKEND: YES", nil, "1")

	if msgCluster.Name != "" {
		GLOBAL_HOST.Cluster.Name = msgCluster.Name
	}

	if msgCluster.Owner != "" {
		GLOBAL_HOST.Cluster.Owner = msgCluster.Owner
	}

	if msgCluster.Password != "" {
		GLOBAL_HOST.Cluster.Password = msgCluster.Password
	}

	//START THE NFS SERVER TO COMMUNICATE TO OTHERS NODES
	s, d := nfsStart()
	nfsVolume(s, d)

	go MasterCheckIsNodeAlive()

	//NOTIFY THE OTHERS NODES ABOUT THE NEW MASTER
	//LETS SEND MESSAGE TO ALL DEFAULTS GWs
	var gws[] string
	if GLOBAL_HOST.PublicAddr == "" {
		for _, i := range ConfigDefaultAddr() {
			has := 0
			for _, g := range gws {
				if g == i.GW {
					has = 1
				}
			}
			if has == 0 {
				gws = append(gws, i.GW)
				go ClusterNotify(i.GW, i.Name)
			}
		}
	} else {
		ipConn, ipMask := HostIP(GLOBAL_HOST.PublicAddr)
		ipConn = ipConn.Mask(ipMask)
		go ClusterNotify(ipConn.String(), GLOBAL_HOST.PublicAddr)
	}

}

func MasterAddNode(request RequestStr) ResponseStr {
	Log("Getting node request to join cluster", nil, "0")
	Log(request, nil, "0")

	ret := ResponseStr{"error", "NOK"}

	//BEFORE SEND TOKEN TO NODE, LET'S CHECK NETWORK PARAMETERS
	//WITH MY RECEIVED IP FROM NODE MESSAGE, IF I NOT FIND MY
	//PUBLIC ADDR YET...
	node := NodeStr{}
	for _, p := range request.Param {
		if p.Name == "IP" {
			node.IP = p.Value
		}
		if p.Name == "Hostname" {
			node.Hostname = p.Value
		}
		if p.Name == "MasterIP" {
			node.MasterIP = p.Value
		}
		if p.Name == "NumberOfCPUs" {
			node.NumberOfCPUs = p.Value
		}
		if p.Name == "Memory" {
			node.Memory = p.Value
		}
	}
	GLOBAL_NODES = append(GLOBAL_NODES, node)

	if node.MasterIP != "" {
		ConfigNetParameters(net.ParseIP(node.MasterIP), "")
	}

	time.Sleep(10*time.Second)

	Log(GLOBAL_HOST, nil, "1")

	//SENDING TOKEN
	if GLOBAL_HOST.Cluster.IdSwarm != "" {
		token, err := SwarmToken()
		Log(token, err, "1")

		if err == nil && node.IP != "" {
			ret = ResponseStr{"token-worker", token}
		} else {
			ret = ResponseStr{"error", err.Error()}
		}
	}

	return ret
}

func MasterCheckIsNodeAlive() {
	Log("MasterCheckIsNodeAlive", nil, "0")

	for {
		//SLEEP 20 SECs for Service Consolidation
		time.Sleep(time.Second * 5)

		for _, g := range SwarmNodeList("") {
			if g.IP != "" && g.ManagerStatus != "Master" {

				request := RequestStr{"hostInfo", []ParamStr{}}

				// Send message to Node to check if it is alive...
				IPService := g.IP + ":" + config.FrontendPort
				body, err := ServiceSendPost("simpleRequest", IPService, request)
				Log("", err, "0")

				// The node will return HostInfo
				var host HostInfoStr
				err = json.Unmarshal(body, &host)
				Log("", err, "0")

				// If Operation Mode in the Node was different of NODE
				// remove it, because the node get out of the NODE
				if err != nil || host.OpMode != "NODE" {
					Log("MasterCheckIsNodeAlive | SwarmRemoveNode: " + g.Hostname + " | Id: " + g.Id, nil, "1")

					NodeRemove(g.Hostname)
					err = SwarmRemoveNode(g.Id)
					Log("", err, "0")
				}
			}
		}

		//ENDS THE THREAD IF OPERATION MODE CHANGES
		if GLOBAL_KILL == "1" {
			Log("KILL MasterPingNode | OpMode changes: " + GLOBAL_HOST.OpMode, nil, "1")
			return
		}
	}

}
