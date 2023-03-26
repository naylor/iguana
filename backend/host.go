package main

import (
	"encoding/json"
	"github.com/pkg/errors"
	"github.com/shirou/gopsutil/mem"
	"github.com/shirou/gopsutil/process"
	"net"
	"os/exec"
	"regexp"
	"runtime"
	"strconv"
	"strings"
	"time"
)

func HostPublicAddr() {

	if GLOBAL_HOST.IP == "" {
		err := errors.New("No public interface detected!")
		Log("", err, "0")
		return
	}

	if GLOBAL_HOST.Cluster.IdSwarm == "" &&
		GLOBAL_HOST.OpMode != "NODE" {

		GLOBAL_HOST.Cluster.IdSwarm = SwarmInit()

		if GLOBAL_HOST.Cluster.IdSwarm != "" {
			numOfReplicas, _ := strconv.Atoi(config.StartContainers)
			ret := SwarmServiceAdd(numOfReplicas - 1)
			if ret.Name == "error" {
				err := errors.New(ret.Status)
				Log(ret.Status, err, "0")
			}
		}
		Log("LocalStarIfPublicAddr | ClusterID: "+GLOBAL_HOST.Cluster.IdSwarm, nil, "")
	}

	//START THE MASTER CONTAINER, IT WILL RECEIVE THE CODE AND WILL SEND IT TO SLAVES
	if GLOBAL_HOST.IdContainer == "" && GLOBAL_HOST.Cluster.IdSwarm != "" &&
		GLOBAL_HOST.OpMode != "NODE" {

		GLOBAL_HOST.IdContainer = ContainerStart("master").ID
		Log("LocalStarIfPublicAddr | IdMasterContainer: "+GLOBAL_HOST.IdContainer, nil, "")

	}
}

func HostMonitor() {

	for {

		//CHECK IF ANY PROCESS IS ZOMBIE
		for _, t := range UtilListDir(DEFAULT_NFS_PATH) {
			find := 0
			for _, f := range GLOBAL_FRONTNAMES {
				if t == f.Token {
					find = 1
				}
			}
			if find == 0 {
				dir := DEFAULT_NFS_PATH + "/" + t
				d, _ := UtilDirExists(dir)
				if d == true {
					UtilRemoveContents(dir)
				}
			}
		}

		pos, _ := json.Marshal(len(GLOBAL_QUEUE_FRONTEND))
		GLOBAL_HOST.Cluster.Queue = string(pos)

		//Let's populate the Host Updates
		//To inform the Frontend Components
		//If some change happens
		GLOBAL_HOST.Updates = make(map[string]int)

		t := 0
		var h string
		i := 0
		for _, n := range SwarmNodeContainers("") {
			if i == 0 {
				h = n.Hostname
				t++
			}
			if h != n.Hostname {
				t++
			}
			t += len(n.Container)
			i++
		}

		GLOBAL_HOST.Updates["activeNodes"] = t

		UserSetLastActivity("")
		GLOBAL_HOST.Updates["activeFrontends"] = len(GLOBAL_FRONTNAMES)

		ClusterUpdate(ClusterStr{})
		GLOBAL_HOST.Updates["clusterAvailable"] = len(GLOBAL_CLUSTERS_AVAILABLE)

		GLOBAL_HOST.Updates["activeQueues"] = len(GLOBAL_QUEUE_FRONTEND)

		time.Sleep(time.Second * 4)
	}
}

var countHostAddr = 0

func HostInfo(host string) HostInfoStr {
	//Log("HostInfo: " + host, nil, "0")

	addr := strings.Split(host, ":")
	if len(addr) >= 1 {
		ip := net.ParseIP(addr[0])
		if ip != nil {
			//Log(ip, nil, "0")
			ConfigNetParameters(ip, "")
		} else {
			countHostAddr++
		}
	}

	if countHostAddr > 5 && GLOBAL_HOST.IP == "" {
		netAddr := HostNetAddr()
		if netAddr != "" {
			Log(netAddr, nil, "0")
			ConfigNetParameters(nil, netAddr)
		}
	}

	return GLOBAL_HOST
}

func HostProcess() map[int32]string {

	var processes = make(map[int32]string)

	procs, err := process.Processes()
	Log("", err, "0")

	for _, process := range procs {
		cmd, _ := process.Cmdline()

		var re = regexp.MustCompile(`/iguana-hpc-usp/shared/master/+(.{16})`)
		match := re.FindAllString(cmd, -1)
		if len(match) >= 1 {
			processes[process.Pid] = re.ReplaceAllString(match[0], `$1`)
		}
	}

	return processes
}

func HostResources() (string, string) {
	//Get CPU and Memory info
	v, _ := mem.VirtualMemory()

	return strconv.Itoa(runtime.NumCPU()),
		strconv.FormatUint((v.Total / 1024 / 1024), 10)
}

func HostKillProcess(token string) {

	for p, t := range HostProcess() {
		if token == t {
			var execute []string

			Block{
				Try: func() {
					execute = append(execute, "-9")
					execute = append(execute, strconv.Itoa(int(p)))
					_, err := exec.Command("kill", execute...).Output()
					Log("", err, "0")
				},
				Catch: func(e Exception) {
					Log("Exception", nil, "1")
					Log(e, nil, "0")
				},
			}.Do()
		}
	}
}

func HostCredentials(auth AuthStr, key string, action string) (bool, bool, string, ResponseStr) {

	if key != "" {
		keyDec := UtilDecrypt([]byte(key), auth.Token)
		err := json.Unmarshal(keyDec, &auth)
		Log("", err, "1")
	}

	if action == "LOGIN" {
		token := UtilTokenGenerator()

		user := dbListUsers(auth.Owner)

		if user.Id == 0 {
			return false, false, "", ResponseStr{Name: "error", Status: "E-mail not found in database!"}
		}

		if UtilCreateHash(auth.Password) == user.Password ||
			UtilCreateHash(auth.Password) == user.TempChangePass {

			// Let's check if is a recovery password
			if UtilCreateHash(auth.Password) == user.TempChangePass {
				dbUpdateBack("UPDATE Users SET ForceChangePass='1', " +
					"Password='" + user.TempChangePass + "'," +
					"TempChangePass=''" +
					" WHERE Email='" + auth.Owner + "'")
			} else if user.TempChangePass != "" {
				dbUpdateBack("UPDATE Users SET TempChangePass=''" +
					" WHERE Email='" + auth.Owner + "'")
			}

			isMaster := false
			if user.Module == "Admin" {
				isMaster = true
			}
			return true, isMaster, token,
				ResponseStr{
					Name: user.Module,
					Status: strconv.FormatInt(user.Id, 10) +
						"|" + auth.Password +
						"|" + token +
						"|" + user.Name}
		} else {
			return false, false, "", ResponseStr{Name: "error", Status: "This email or password is incorrect."}
		}
	}

	if action == "CHECK" {
		//SelfRegistration
		if auth.Module == "SelfRegistration" &&
			auth.Token == "NPZ8fvABP5pKSwU3" &&
			config.SelfRegistration == "On" {
			return true, false, "", ResponseStr{}
		}

		userToken := ""
		// Get the token hosted
		for _, f := range GLOBAL_FRONTNAMES {
			if f.Owner == auth.Owner {
				userToken = auth.Token
			}
		}

		if userToken == "" || userToken == "NPZ8fvABP5pKSwU3" {
			return false, false, "", ResponseStr{Name: "error", Status: "token"}
		}

		user := dbListUsers(auth.Owner)
		if UtilCreateHash(auth.Password) == user.Password &&
			userToken == auth.Token {
			isMaster := false
			if user.Module == "Admin" {
				isMaster = true
			}
			return true, isMaster, "", ResponseStr{Name: user.Module, Status: "ok"}
		}
	}

	return false, false, "", ResponseStr{Name: "error", Status: "You are not authorized to make this request."}
}

func HostIP(interfaceName string) (net.IP, net.IPMask) {

	itf, _ := net.InterfaceByName(interfaceName) //here your interface

	item, _ := itf.Addrs()
	for _, addr := range item {
		switch v := addr.(type) {
		case *net.IPNet:
			if !v.IP.IsLoopback() {
				if v.IP.To4() != nil { //Verify if IP is IPV4
					return v.IP, v.Mask
				}
			}
		}
	}

	return nil, nil
}

func HostNetAddr() string {

	l, err := net.Interfaces()
	Log("", err, "0")

	for _, f := range l {
		if f.Flags&net.FlagUp > 0 {
			//check if wireless adapter has some IP
			re := regexp.MustCompile(`^enp[0-9]s\w+`)
			match := re.FindAllString(f.Name, -1)
			if len(match) >= 1 {
				ip, _ := HostIP(match[0])
				if ip != nil {
					return match[0]
				}
			}

			//check if cable adapter has some IP
			re = regexp.MustCompile(`^wlp[0-9]s\w+`)
			match = re.FindAllString(f.Name, -1)
			if len(match) >= 1 {
				ip, _ := HostIP(match[0])
				if ip != nil {
					return match[0]
				}
			}

			//If cable and wireless has none IP, get Docker IP
			re = regexp.MustCompile(`^docker[0-9]`)
			match = re.FindAllString(f.Name, -1)
			if len(match) >= 1 {
				ip, _ := HostIP(match[0])
				if ip != nil {
					return match[0]
				}
			}

		}
	}

	return ""
}
