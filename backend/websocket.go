package main

import (
	"github.com/gorilla/websocket"
	"net/http"
	"strconv"
	"time"
)

var clients = make(map[*websocket.Conn]bool) // connected clients
var broadcast = make(chan CodePairStr)           // broadcast channel
var LOCK_LIST = 0
var count int64

// Configure the upgrader
var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func WebSocket() {

	// Configure websocket
	GLOBAL_CODEPAIR = []CodePairActives{}
	http.HandleFunc("/ws", 					handleConnections)

	// Start listening for incoming chat messages
	go handleMessages()

	/// WEB SERVER LISTENER ///
	ipPublic := ""
	if GLOBAL_HOST.PublicAddr == "" {
		for _, i := range ConfigDefaultAddr() {
			ip, _:= HostIP(i.Name)
			ipPublic = ip.String()
			Log("WebSocket on IP ws://"+ipPublic+":"+GLOBAL_HOST.WebSocketPort, nil, "1")
		}
		ipPublic = ""
	} else {
		ip, _:= HostIP(GLOBAL_HOST.PublicAddr)
		ipPublic = ip.String()
		Log("WebSocket on IP ws://"+ipPublic+":"+GLOBAL_HOST.WebSocketPort, nil, "1")
	}

	//readtime, _ := strconv.Atoi(config.CodeExecTimeout)
	//writetime, _ := strconv.Atoi(config.CodeExecTimeout)

	srv := &http.Server{
		Addr:           ipPublic+":"+GLOBAL_HOST.WebSocketPort,
		Handler:        nil,
		//ReadTimeout:    time.Duration(readtime) * 2 * time.Second,
		//WriteTimeout:   time.Duration(writetime) * 3 * time.Second,
		//MaxHeaderBytes: 1 << 20,
	}
	err := srv.ListenAndServe()
	Log("", err, "0")
}

func listUsersCoding(param string) []CodePairActives {

	group, _ := strconv.ParseInt(param, 10, 64)

	c := CodePairActives{}

	var ret []CodePairActives
	if param != "" {
		for _, g := range GLOBAL_CODEPAIR {
			if g.IdGroup == group {
				c.Users = g.Users
				c.IdGroup = g.IdGroup
				ret = append(ret, c)
				return ret
			}
		}
	} else {
		ret = GLOBAL_CODEPAIR
	}
	return ret
}

func addUsersCoding(msg CodePairStr) {

	c := CodePairActives{}
	u := CodePairUsers{}

	c.IdGroup = msg.IdGroup

	exits := 0
	index :=-1

	if msg.IdGroup == 0 {
		return
	}

	for {
		if LOCK_LIST == 0 {
			break
		}
		time.Sleep(time.Millisecond * 500)
	}

	LOCK_LIST = 1

	for i, g := range GLOBAL_CODEPAIR {
		if g.IdGroup == msg.IdGroup {
			index = i
		}
		for _, u := range g.Users {
			if u.IdUser == msg.IdUser {
				exits = 1
			}
		}
	}

	if exits == 1 {
		LOCK_LIST = 0
		return
	}

	if exits == 0 && index >= 0  {
		u.IdUser = msg.IdUser
		u.UserName = msg.UserName

		LOCK_LIST = 1
		Block{
			Try: func() {
				GLOBAL_CODEPAIR[index].Users = append(GLOBAL_CODEPAIR[index].Users, u)
			},
			Catch: func(e Exception) {
				Log("Exception", nil,"1")
				Log(e, nil,"0")
			},
		}.Do()
		LOCK_LIST = 0
		return
	}

	if len(GLOBAL_CODEPAIR) == 0 || index < 0 {
		u.IdUser = msg.IdUser
		u.UserName = msg.UserName
		c.Users = append(c.Users, u)

		c.IdGroup = msg.IdGroup
		GLOBAL_CODEPAIR = append(GLOBAL_CODEPAIR, c)
		Log(index, nil, "0")
		LOCK_LIST = 0
	}
}

func delUsersCoding() {
	for {
		if LOCK_LIST == 0 {
			break
		}
		time.Sleep(time.Millisecond * 500)
	}

	LOCK_LIST = 1
	GLOBAL_CODEPAIR = []CodePairActives{}
	LOCK_LIST = 0
}

func handleConnections(w http.ResponseWriter, r *http.Request) {
	// Upgrade initial GET request to a websocket
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		Log("upgrader", err, "0")
	}
	// Make sure we close the connection when the function returns
	defer ws.Close()

	// Register our new client
	clients[ws] = true

	for {
		var msg CodePairStr
		// Read in a new message as JSON and map it to a Message object
		err := ws.ReadJSON(&msg)
		if err != nil {
			Log("ReadJSON", err, "0")
			delete(clients, ws)
			delUsersCoding()
			break
		}
		addUsersCoding(msg)

		count = count + 1
		msg.EventNumber = count

		// Send the newly received message to the broadcast channel
		broadcast <- msg
	}
}

func handleMessages() {

	for {
		// Grab the next message from the broadcast channel
		msg := <-broadcast
		// Send it out to every client that is currently connected

		for client := range clients {
			err := client.WriteJSON(msg)
			if err != nil {
				Log("WriteJSON", err, "0")
				client.Close()
				delete(clients, client)
			}
		}
	}
}