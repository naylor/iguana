package main

import (
	"os"
)

var GLOBAL_VERSION_NUMBER = "3.6"
var GLOBAL_VERSION_RELEASE = "2021-11-08" +
	""

func main() {
	fn := UtilLogOutput()
	defer fn()

	//SET DOCKER/SWARM API VERSION
	os.Setenv("DOCKER_API_VERSION", "1.39")
	Log("VERSION " + GLOBAL_VERSION_NUMBER +
		" >>><<< RELEASE " + GLOBAL_VERSION_RELEASE, nil, "1")

	// Read the Configuration File
	ConfigFileRead()

	//START THE SERVICES, BASED ON CONFIG FILE OR DEFAULT SETTINGS
	go ServiceManager()

	//START QUEUE MONITOR
	go HostMonitor()

	//CHECK THE QUEUE
	go QueueMonitor()

	//WEBSOCKET
	go WebSocket()

	// START THE WEB SERVER (GO GENERATE THE FRONTEND WEB HTML)
	WebServer()
}