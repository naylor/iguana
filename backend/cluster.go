package main

import (
	"bytes"
	"crypto/md5"
	"encoding/gob"
	"encoding/hex"
	"net"
	"time"
)

func ClusterListener() {
	Log("ClusterListener", nil, "1")

	for {

		/* Lets prepare a address at any address at a default port */
		ServerAddr, err := net.ResolveUDPAddr("udp", ":"+config.BackendPort)

		/* Now listen at selected port */
		ServerConn, err := net.ListenUDP("udp", ServerAddr)
		Log("", err, "1")

		if err != nil {
			//ServerConn.Close()
			//ClusterListener()
		}

		defer ServerConn.Close()

		//var msgFromBackend string
		msgCluster := ClusterStr{}

		// create a temp buffer
		buff := make([]byte, 1024)

		//Log("Waiting 20s for an another master backend...", nil, "0")

		for {
			if err := ServerConn.SetReadDeadline(time.Now().Add(5 * time.Second)); err != nil {
				time.Sleep(5 * time.Second)
				break
			}

			_, _, err := ServerConn.ReadFromUDP(buff)
			//Log("", err, "0")

			// convert bytes into Buffer (which implements io.Reader/io.Writer)
			tmpbuff := bytes.NewBuffer(buff)
			// creates a decoder object
			gobobj := gob.NewDecoder(tmpbuff)

			// decodes buffer and unmarshals it into a Message struct
			gobobj.Decode(&msgCluster)

			if err != nil {
				if e, ok := err.(net.Error); !ok || !e.Timeout() {
					Log("", err, "0")
				}

				// IF NOT ANSWER
			}

			break
		}

		//IF HAS ANSWER

		// RECEIVED A MESSAGE FROM SOME NODE MASTER
		// JOIN IN THE CLUSTER IF MY OPERATION MODE IS CLUSTER TOO
		// AND YOU ARE NOT A MASTER
		if msgCluster.Id != "" &&
			GLOBAL_HOST.OpMode == "NODE" &&
			GLOBAL_HOST.Cluster.Id == "" {

			// IF ANOTHER MASTER JOIN IN THE CLUSTER
			if GLOBAL_HOST.Cluster.Id != msgCluster.Id {

				var key ResponseStr
				if msgCluster.Password != "" {
					key = ClusterPassword(msgCluster.Password, GLOBAL_HOST.Cluster.Password)
				}

				if (msgCluster.Password != "" && key.Name == "ok") ||
					(msgCluster.Password == "") {
					GLOBAL_OP_MODE = ServiceOpModeStr{
						NewOpMode:    "NODE",
						Cluster:      msgCluster,
					}
				}
			}
		}

		//Node received another message from cluster, let's register to show on the frontend.
		if msgCluster.Id != GLOBAL_HOST.Cluster.Id {
			ClusterUpdate(msgCluster)
		}

		//ENDS THE THREAD IF OPERATION MODE CHANGES
		if GLOBAL_KILL == "1" {
			Log("KILL ClusterListener | OpMode changes: " + GLOBAL_OP_MODE.NewOpMode, nil, "1")
			ServerConn.Close()
			return
		}

		ServerConn.Close()
	}
}

func ClusterNotify(ipConn string, netAddr string) {
	Log("ClusterNotify", nil, "0")

	// I AM A MASTER

	ServerAddr,err := net.ResolveUDPAddr("udp", ipConn+":"+config.BackendPort)
	Log("", err, "1")

	LocalAddr, err := net.ResolveUDPAddr("udp", ":0")
	Log("", err, "1")

	Conn, err := net.DialUDP("udp", LocalAddr, ServerAddr)
	Log("", err, "1")

	defer Conn.Close()

	ipBackend, ipBackendMask := HostIP(netAddr)

	key := ClusterPassword(GLOBAL_HOST.Cluster.Password, "")

	msgCluster := ClusterStr{}
	msgCluster.MasterIP = ipBackend
	msgCluster.MasterMask = ipBackendMask
	msgCluster.Name = GLOBAL_HOST.Cluster.Name
	msgCluster.Id = GLOBAL_HOST.Cluster.Id
	msgCluster.PortFrontend = GLOBAL_HOST.Cluster.PortFrontend
	msgCluster.Password = key.Status

	msgToBC := new(bytes.Buffer)
	gobobj := gob.NewEncoder(msgToBC)
	gobobj.Encode(msgCluster)

	Log("MASTER BROADCAST MESSAGE TO " + ipConn +
		"|" + msgCluster.Name +
		"|" + msgCluster.Id, err, "1")

	for {
		Conn.Write(msgToBC.Bytes())
		//Log("", err, "0")
		time.Sleep(1 * time.Second)

		//CHECK WHICH DEVICE IS RECEIVING BROADCAST
		//AND SET UP CORRECT IP
		if GLOBAL_HOST.PublicAddr == "" {
			//Log("HostPublicInterface", err, "0")

			ipBackend, _ := HostIP(netAddr)

			temp := ipBackend.String()
			haveStatus := 0
			for _, g := range GLOBAL_NODES {
				if g.MasterIP != "" {
					temp = g.MasterIP
					haveStatus = 1
				}
			}
			if haveStatus == 1 {
				if temp != ipBackend.String() {
					Log("KILL LISTENING ON IP "+ipBackend.String(), nil, "1")
					break
				}
				ConfigNetParameters(nil, netAddr)
			}
		}

		//ENDS THE THREAD IF OPERATION MODE CHANGES
		if GLOBAL_KILL == "1" {
			Log("KILL ClusterNotify | OpMode changes: " + GLOBAL_HOST.OpMode, nil, "1")
			Conn.Close()
			return
		}

	}

}

func ClusterPassword(data string, check string) ResponseStr {
	ret := ResponseStr{Name:"ok", Status: ""}

	if data == "" {
		return ret
	}

	if check == "" {
		hash := md5.New()
		hash.Write([]byte(data))
		pass := hex.EncodeToString(hash.Sum(nil))

		ret.Name = "password"
		ret.Status = pass
	}

	if check != "" {
		hash := md5.New()
		hash.Write([]byte(check))
		check := hex.EncodeToString(hash.Sum(nil))

		ret.Name = "error"
		ret.Status = "The key to connect to the cluster is incorrect."

		if check == data {
			ret.Name = "ok"
			ret.Status = "The password is correct."
		}
	}

	return ret
}

func ClusterUpdate(msgCluster ClusterStr) {

	has := false

	var cTemp []ClusterStr

	layout := "2006-01-02 15:04:05 -0700"
	t := time.Now().Local()

	// Node receive a cluster message listening, let's update this information
	// to show in frontend (Clusters Available)
	for index, f := range GLOBAL_CLUSTERS_AVAILABLE {
		// If cluster has been register, let's update its last activity
		if f.Id == msgCluster.Id {
			has = true
			// Let's make an update
			GLOBAL_CLUSTERS_AVAILABLE[index].LastActivity = t.Format(layout)
			GLOBAL_CLUSTERS_AVAILABLE[index].Password = msgCluster.Password
			GLOBAL_CLUSTERS_AVAILABLE[index].Name = msgCluster.Name
			cTemp = append(cTemp, GLOBAL_CLUSTERS_AVAILABLE[index])
		} else {
			// Le't look the last activity about the others cluster already registered
			hrLA, _ := time.Parse(layout, GLOBAL_CLUSTERS_AVAILABLE[index].LastActivity)
			duration := t.Sub(hrLA).Minutes()

			// If the last activity less then one minute, add...
			if duration < 1 {
				cTemp = append(cTemp, GLOBAL_CLUSTERS_AVAILABLE[index])
			}
		}
	}

	// Its a new cluster in the network, let's add it
	if has == false && msgCluster.Id != "" {
		msgCluster.LastActivity = time.Now().Format("15:04")
		cTemp = append(cTemp, msgCluster)
	}

	GLOBAL_CLUSTERS_AVAILABLE = cTemp
}