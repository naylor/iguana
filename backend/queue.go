package main

import (
	"strconv"
	"time"
)

var CLOCK_QUEUE = 0
var LOCK_QUEUE = 0

func QueueInsert(code CodeStr) CodeResponseStr {

	c := CodeResponseStr{Name: "", Status: "", Command: ""}

	if len(GLOBAL_QUEUE_FRONTEND) > GLOBAL_HOST.MaxConcurrency {
		c.Name = "error"
		c.Status = "The queue has reached the limit defined in the settings. Please try again later."
		return c
	}

	queue := QueueStr{}
	for _, g := range GLOBAL_QUEUE_FRONTEND {
		if g.Token == code.Token {
			c.Name = "ok"
			c.Status = "We received your code, please wait."
			return c
		}
	}

	queue.Token = code.Token
	queue.StartTime = 0
	queue.Count = 0
	queue.Time = time.Now()
	queue.Sequence = "queue"

	for _, f := range GLOBAL_FRONTNAMES {
		if f.Token == queue.Token {
			queue.User = f.Owner
		}
	}

	queue.MaxTimeout, _ = strconv.Atoi(config.CodeExecTimeout)
	if code.MaxTimeout != "" {
		queue.MaxTimeout, _ = strconv.Atoi(code.MaxTimeout)
	}

	if GLOBAL_HOST.Queue == "On" {
		queue.Concurrency = "true"
	} else {
		queue.Concurrency = code.Queue
	}

	for {
		if LOCK_QUEUE == 0 {
			CLOCK_QUEUE = 0
			break
		}
		time.Sleep(time.Millisecond * 500)
		CLOCK_QUEUE++
	}

	LOCK_QUEUE = 1
	GLOBAL_QUEUE_FRONTEND = append(GLOBAL_QUEUE_FRONTEND, queue)
	LOCK_QUEUE = 0
	Log(GLOBAL_QUEUE_FRONTEND, nil, "0")

	q := "off"
	if queue.Concurrency == "true" {
		q = "on"
	}

	c.Name = "ok"
	c.Status = "We received your code, please wait. Queue: " + q
	return c
}

func QueueRemove(token string) {

	for {
		if LOCK_QUEUE == 0 {
			CLOCK_QUEUE = 0
			break
		}
		time.Sleep(time.Millisecond * 500)
		CLOCK_QUEUE++
	}

	LOCK_QUEUE = 1
	var temp []QueueStr
	for _, g := range GLOBAL_QUEUE_FRONTEND {
		if g.Token != token {
			temp = append(temp, g)
		}
	}
	GLOBAL_QUEUE_FRONTEND = temp

	LOCK_QUEUE = 0

	Log(token, nil, "0")

	HostKillProcess(token)
}

func QueueUpdate(token string, sequence string) {

	for {
		time.Sleep(time.Millisecond * 500)
		if LOCK_QUEUE == 0 {
			CLOCK_QUEUE = 0
			break
		}
		CLOCK_QUEUE++
	}

	LOCK_QUEUE = 1
	Block{
		Try: func() {
			for i, g := range GLOBAL_QUEUE_FRONTEND {
				if g.Token == token {
					GLOBAL_QUEUE_FRONTEND[i].Time = time.Now()
					GLOBAL_QUEUE_FRONTEND[i].Sequence = sequence
				}
			}
		},
		Catch: func(e Exception) {
			Log("Exception", nil, "1")
			Log(e, nil, "0")
		},
	}.Do()
	LOCK_QUEUE = 0
}

func QueueList(token string) QueueStr {
	for _, g := range GLOBAL_QUEUE_FRONTEND {
		if g.Token == token {
			return g
		}
	}
	return QueueStr{}
}

func QueueMonitor() {

	for {
		for {
			if LOCK_QUEUE == 0 {
				CLOCK_QUEUE = 0
				break
			}
			time.Sleep(time.Second * 5)
			CLOCK_QUEUE++

			//CHECK IF LOCKS ARE NOT LOCKING
			if CLOCK_QUEUE >= 4 {
				if LOCK_QUEUE == 1 {
					LOCK_QUEUE = 0
				}
			}
		}

		kill := 0
		var concurrencyPosition = 0
		var noConcurrencyPosition = 0

		LOCK_QUEUE = 1
		Block{
			Try: func() {
				for i, g := range GLOBAL_QUEUE_FRONTEND {

					if g.Concurrency == "true" {
						concurrencyPosition = concurrencyPosition + 1
						GLOBAL_QUEUE_FRONTEND[i].Position = concurrencyPosition
						noConcurrencyPosition = concurrencyPosition + 1
					} else {
						if noConcurrencyPosition == 0 {
							noConcurrencyPosition = 1
						}
						GLOBAL_QUEUE_FRONTEND[i].Position = noConcurrencyPosition
						concurrencyPosition = noConcurrencyPosition
					}

					GLOBAL_QUEUE_FRONTEND[i].Count = uint64(time.Now().Sub(GLOBAL_QUEUE_FRONTEND[i].Time).Seconds())

					// Check is in the queue for the eternity
					if g.Sequence == "queue" && g.Position == 1 {
						// If the user position is first and
						// his time has been count
						if g.StartTime > g.MaxTimeout/2 {
							kill = 1
						} else {
							GLOBAL_QUEUE_FRONTEND[i].StartTime += 2
						}
					}

					if g.Sequence != "queue" && g.StartTime > g.MaxTimeout {
						kill = 1
					}

					if kill == 1 {
						Log("Queue Monitor: "+g.Token, nil, "0")
						LOCK_QUEUE = 0
						QueueRemove(g.Token)
						break
					}
				}
			},
			Catch: func(e Exception) {
				Log("Exception", nil, "1")
				Log(e, nil, "0")
			},
		}.Do()
		LOCK_QUEUE = 0

		time.Sleep(time.Second * 5)
	}

}
