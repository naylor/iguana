package main

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"github.com/pkg/errors"
	"io/ioutil"
	"net/http"
	"net/smtp"
	"time"
)

func ServiceManager() {
	GLOBAL_OP_MODE.NewOpMode = config.OperationMode

	var option ServiceOpModeStr

	for {
		time.Sleep(time.Second * 2)

		if GLOBAL_OP_MODE.NewOpMode != "" {
			Log("Operation Mode >>> " + GLOBAL_OP_MODE.NewOpMode, nil, "1")

			Log("Kill tasks", nil, "0")
			GLOBAL_KILL = "1"
			time.Sleep(time.Second * 10)
			GLOBAL_KILL = "0"

			option = GLOBAL_OP_MODE
			GLOBAL_OP_MODE = ServiceOpModeStr{}

			ServiceInit(option)
		}
	}
}


func ServiceInit(option ServiceOpModeStr) {
	Log("ServiceInit >>> start...", nil, "1")

	//STOP AND UNMOUNT THE NFS SERVER
	nfsStop()
	nfsUmount()
	Log("NFS completed", nil, "0")

	// LEAVE THE CLUSTER
	SwarmLeave()
	Log("SwarmLeave completed", nil, "0")

	ContainerStop("")
	Log("ContainerStop completed", nil, "0")

	// READ DE CONFIGFILE AND PREPARE THE DATABASE
	ConfigFileRead()
	dbCreate()

	GLOBAL_HOST.OpMode = option.NewOpMode

	//////////////////// LOCAL ////////////////////////
	if option.NewOpMode == "LOCAL" {
		GLOBAL_HOST.Cluster.PortFrontend = config.FrontendPort
		GLOBAL_HOST.Cluster.Name = config.ClusterName
		GLOBAL_HOST.Cluster.Id = UtilTokenGenerator()
		GLOBAL_HOST.Cluster.Password = config.ClusterPassword
		GLOBAL_HOST.Cluster.Owner = config.HostUser
	}

	//////////////////// NODE ////////////////////////
	if option.NewOpMode == "NODE" {

		if option.Cluster.Id != "" {
			err := NodeStart(option.Cluster)

			if err == nil {
				GLOBAL_HOST.Cluster = option.Cluster
			} else {
				Log("", err, "1")
				GLOBAL_OP_MODE = ServiceOpModeStr{
					NewOpMode: "NODE",
				}
				return
			}
		}
	}

	//////////////////// MASTER ////////////////////////
	if option.NewOpMode == "MASTER" {
		GLOBAL_HOST.Cluster.PortFrontend = config.FrontendPort
		GLOBAL_HOST.Cluster.Name = config.ClusterName
		GLOBAL_HOST.Cluster.Id = UtilTokenGenerator()
		GLOBAL_HOST.Cluster.Password = config.ClusterPassword
		GLOBAL_HOST.Cluster.Owner = config.HostUser

		MasterCluster(option.Cluster)

		ipConn, ipMask := HostIP(GLOBAL_HOST.PublicAddr)
		GLOBAL_HOST.Cluster.MasterIP = ipConn
		GLOBAL_HOST.Cluster.MasterMask = ipMask
	}

	//If has only one IP address in OS
	//Let's set it in the system.
	hostIPs := ConfigDefaultAddr()
	if len(hostIPs) == 1 {
		Log(hostIPs[0].Name, nil, "0")
		ConfigNetParameters(nil, hostIPs[0].Name)
	}
	HostPublicAddr()

	Log("ServiceInit >>> end...", nil, "1")

	go ClusterListener()

	return
}

func ServiceSendPost(API string, serviceIP string, request RequestStr) ([]byte, error) {

	secret := "NPZ8fvABP5pKSwU3"

	data, err := json.Marshal(request)
	dataEnc := UtilEncrypt(data, secret)
	dataByte := bytes.NewBuffer(dataEnc)

	ctx, cncl := context.WithTimeout(context.Background(), time.Second*30)
	defer cncl()

	req, err := http.NewRequest("POST", "http://" + serviceIP + "/api/" + API, dataByte)

	var auth AuthStr
	auth.Module = "SelfRegistration"
	auth.Token = secret

	authJson, err := json.Marshal(auth)
	authEnc := UtilEncrypt(authJson, secret)

	req.Header.Set("Authorization", string(authEnc))
	Log("", err, "0")

	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req.WithContext(ctx))
	Log("", err, "0")

	if err == nil {
		body, err := ioutil.ReadAll(resp.Body)
		//Log("POST MESSAGE: "+string(body), err, "0")
		resp.Body.Close()

		bodyDec := UtilDecrypt(body, secret)

		return bodyDec, err
	}

	return nil, err
}

func ServiceSmtp(to string, body string) (bool, error) {

	if config.SmtpPassword == "" ||
		config.SmtpPort == "" ||
		config.SmtpServer == "" ||
		config.SmtpUser == "" {

		err := errors.New("The e-mail configuration has not been defined. Contact the host administrator.")
		return false, err
	}

	header := make(map[string]string)
	header["From"] = "Cluster System<"+config.SmtpUser+">"
	header["To"] = to
	header["Subject"] = "Recover Password"
	header["MIME-Version"] = "1.0"
	header["Content-Type"] = "text/html; charset=\"utf-8\""
	header["Content-Transfer-Encoding"] = "base64"

	message := ""
	for k, v := range header {
		message += fmt.Sprintf("%s: %s\r\n", k, v)
	}
	message += "\r\n" + base64.StdEncoding.EncodeToString([]byte(body))

	server := config.SmtpServer+":"+config.SmtpPort
	err := smtp.SendMail(server,
		smtp.PlainAuth("", config.SmtpUser, config.SmtpPassword, config.SmtpServer),
		config.SmtpUser, []string{to}, []byte(message))

	Log("", err, "0")

	if err != nil {
		return false, err
	}
	return true, nil
}