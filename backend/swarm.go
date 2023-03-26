package main

import (
	"context"
	"encoding/json"
	"errors"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/filters"
	"github.com/docker/docker/api/types/mount"
	"github.com/docker/docker/api/types/swarm"
	"github.com/docker/docker/client"
	"strconv"
)

func SwarmToken() (string, error) {
	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv)
	Log("", err, "0")

	cli.NegotiateAPIVersion(ctx)

	out, err := cli.SwarmInspect(ctx)
	defer cli.Close()

	if err == nil {
		Log("", err, "0")
		return out.JoinTokens.Worker, nil
	} else {
		return "", err
	}
}

func SwarmInit() string {

	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv)
	Log("SwarmInit", err, "0")

	cli.NegotiateAPIVersion(ctx)

	clusterID := ""
	if GLOBAL_HOST.IP != "" {

		req := swarm.InitRequest{
			ListenAddr:    "0.0.0.0",
			AdvertiseAddr: GLOBAL_HOST.IP,
		}

		clusterID, err = cli.SwarmInit(ctx, req)

		if clusterID != "" {
			SwarmNetwork()
		}

	} else {
		err = errors.New("No public interface found!")
		Log("", err, "0")
	}
	cli.Close()

	return clusterID
}

func SwarmRemoveNode(id string) error {

	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv)
	Log("", err, "0")

	cli.NegotiateAPIVersion(ctx)

	err = cli.NodeRemove(ctx, id, types.NodeRemoveOptions{true})
	Log("", err, "0")

	cli.Close()
	return err
}

func SwarmLeave() error {
	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv)
	Log("", err, "0")

	cli.NegotiateAPIVersion(ctx)

	err = cli.SwarmLeave(ctx, true)
	//Log("", err, "0")

	cli.Close()

	return nil
}

func SwarmJoin(addr string, token string) error {

	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv)
	Log("", err, "0")

	cli.NegotiateAPIVersion(ctx)

	req := swarm.JoinRequest{JoinToken: token, RemoteAddrs: []string{addr}, ListenAddr: "0.0.0.0:2377"}
	ret := cli.SwarmJoin(ctx, req)

	if ret != nil {
		//Trying leave first
		_ = SwarmLeave()
		ret = cli.SwarmJoin(ctx, req)
	}

	cli.Close()

	if ret == nil {
		return nil
	}

	return ret

}

func SwarmNodeList(name string) []NodeStr {

	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv)
	Log("", err, "0")

	filters := filters.NewArgs()
	if name != "" {
		filters.Add("name", name)
	}

	nodes, err := cli.NodeList(ctx, types.NodeListOptions{Filters: filters})
	cli.Close()

	if err == nil {
		numberOfCPUs := 0

		var a = []NodeStr{}

		// List all nodes in the Swarm Service
		for _, n := range nodes {
			// If some node was not ready, let's remove it
			if n.Status.State != "ready" {
				SwarmRemoveNode(n.ID)
				continue
			}

			Log("", err, "0")
			var data = NodeStr{}

			// Keep the hostname and Id
			data.Hostname = n.Description.Hostname
			data.Id = n.ID

			data.IP = ""
			// Let's look inside de GLOBAL NODES
			// GLOBAL NODES keep the slaves information
			for _, g := range GLOBAL_NODES {
				if (g.Id != "" && g.Id == data.Id) ||
					(g.Id == "" && g.Hostname == data.Hostname) {
					data.IP = g.IP
					data.Memory = g.Memory
					data.NumberOfCPUs = g.NumberOfCPUs

					cpu, _ := strconv.Atoi(g.NumberOfCPUs)
					numberOfCPUs += cpu
				}
			}

			data.ManagerStatus = "Slave"
			data.Status = "Off"

			// IF MASTER IS MANAGER
			if n.ManagerStatus != nil {
				if n.ManagerStatus.Leader == true {
					data.ManagerStatus = "Master"
					ip, _ := HostIP(GLOBAL_HOST.PublicAddr)
					data.IP = ip.String()
					data.NumberOfCPUs, data.Memory = HostResources()

					cpu, _ := strconv.Atoi(data.NumberOfCPUs)
					numberOfCPUs += cpu
				}
			}
			if n.Status.State == "ready" {
				data.Status = "On"
			}
			a = append(a, data)
		}

		return a
	}
	return nil
}

func SwarmNodeContainers(name string) []NodeStr {

	nodes := SwarmNodeList(name)

	var a = []NodeStr{}

	// LIST ALL JOINED NODES IN THE SWARM
	for _, n := range nodes {
		if n.ManagerStatus == "Master" {
			masterContainers := ContainerList("")
			for _, mc := range masterContainers {
				n.Container = append(n.Container, mc)
			}
		}

		// THE DOCKER API CAN'T GET ABOUT CONTAINER INFORMATION ON NODES
		// WE SEND A MESSAGE TO NODES ASKING ABOUT RUNNING CONTAINERS
		if n.Status == "On" && n.ManagerStatus != "Master" && n.IP != "" {

			request := RequestStr{"ContainerNodeList", []ParamStr{}}
			IPService := n.IP + ":" + config.FrontendPort
			body, err := ServiceSendPost("simpleRequest", IPService, request)
			Log("", err, "0")

			var nodeContainers []ContainerStr
			err = json.Unmarshal(body, &nodeContainers)
			Log("", err, "0")

			for _, nc := range nodeContainers {
				n.Container = append(n.Container, nc)
			}
		}

		a = append(a, n)
	}

	return a
}

func SwarmNetwork() {
	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv)
	Log("", err, "0")

	cli.NegotiateAPIVersion(ctx)

	networks, err := cli.NetworkList(ctx, types.NetworkListOptions{})
	Log("", err, "0")

	find := 0
	for _, i := range networks {
		if i.Name == "net-iguana-usp" {
			find = 1
		}
	}
	if find == 0 {
		_, err := cli.NetworkCreate(ctx, "net-iguana-usp", types.NetworkCreate{
			CheckDuplicate: true,
			Driver:         "overlay",
			EnableIPv6:     false,
			Internal:       true,
			Attachable:     true,
		})
		Log("", err, "0")
	}

	cli.Close()
}

func makeSpec(image string, replic int) swarm.ServiceSpec {

	var numOfReplics = uint64(replic)

	var n int64
	if config.NodeMode == "SINGLE" {
		n = 1000000000
	}

	spec := swarm.ServiceSpec{
		Annotations: swarm.Annotations{
			Name: GLOBAL_HOST.Cluster.Name,
		},
		Networks: []swarm.NetworkAttachmentConfig{
			swarm.NetworkAttachmentConfig{
				Target: "net-iguana-usp",
			},
		},
		Mode: swarm.ServiceMode{
			Replicated: &swarm.ReplicatedService{
				Replicas: &numOfReplics,
			},
		},

		TaskTemplate: swarm.TaskSpec{
			ContainerSpec: &swarm.ContainerSpec{
				Image: image,
				Mounts: []mount.Mount{
					// Bind-mount the docker socket
					mount.Mount{
						Type:   mount.TypeBind,
						Source: DEFAULT_NFS_PATH,
						Target: DEFAULT_NFS_PATH,
					},
				},
			},
			Resources: &swarm.ResourceRequirements{
				Limits: &swarm.Limit{
					NanoCPUs: n,
				},
				Reservations: &swarm.Resources{
					NanoCPUs: n,
					//MemoryBytes: 200000000,
				},
			},
		},
	}

	return spec
}

func SwarmServiceAdd(numOfReplicas int) ResponseStr {
	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv)
	Log("", err, "0")

	cli.NegotiateAPIVersion(ctx)

	if config.NodeMode == "MULTI" {
		return ResponseStr{"error", "The node mode setting has been set to multi. " +
			"In this option all vCPUs were allocated to the master."}
	}

	image := "containers_slave"
	MaxContainers, _ := strconv.Atoi(config.MaxContainers)

	if numOfReplicas > MaxContainers {
		return ResponseStr{"error", "Maximum number of nodes allowed: " + config.MaxContainers}
	}

	cpu, _ := HostResources()
	NumberOfCPUs, _ := strconv.Atoi(cpu)
	if numOfReplicas+1 > NumberOfCPUs && config.NodeMode == "SINGLE" {
		return ResponseStr{"error", "Cannot create more containers in a " +
			"single-mode as the CPU limit has been reached."}
	}

	if config.NodeMode == "MULTI" {
		return ResponseStr{"error", "It is impossible to create more nodes because all " +
			"CPUs are allocated to the master node in the multi-node."}
	}

	hasID := SwarmServiceList()

	if len(hasID) > 0 {
		spec := makeSpec(image, numOfReplicas)
		_, err = cli.ServiceUpdate(ctx, hasID[0].ID, hasID[0].Version, spec, types.ServiceUpdateOptions{})
		Log(numOfReplicas, err, "0")
	} else {
		spec := makeSpec(image, numOfReplicas)
		_, err = cli.ServiceCreate(ctx, spec, types.ServiceCreateOptions{})
		Log(numOfReplicas, err, "0")
	}

	cli.Close()

	if err == nil {
		return ResponseStr{"info", "Request successfully. Wait a few seconds for the answer."}
	} else {
		return ResponseStr{"error", err.Error()}
	}

}

func SwarmServiceList() []swarm.Service {

	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv)
	Log("", err, "0")

	cli.NegotiateAPIVersion(ctx)
	cli.Close()

	if GLOBAL_HOST.Cluster.IdSwarm != "" {
		filters := filters.NewArgs()

		hasID, err := cli.ServiceList(ctx, types.ServiceListOptions{Filters: filters})
		Log("", err, "")

		return hasID
	}
	return nil
}
