package main

import (
	"bytes"
	"context"
	"io/ioutil"
	"regexp"
	"strconv"
	"time"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/api/types/filters"
	"github.com/docker/docker/api/types/mount"
	"github.com/docker/docker/client"
	"github.com/docker/docker/pkg/stdcopy"
)

func ContainerList(name string) []ContainerStr {

	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv)
	Log("", err, "0")

	filters := filters.NewArgs()
	if name != "" {
		filters.Add("name", name)
		filters.Add("status", "paused")
		filters.Add("status", "created")
		filters.Add("status", "restarting")
		filters.Add("status", "running")
		filters.Add("status", "removing")
		filters.Add("status", "paused")
		filters.Add("status", "exited")
		filters.Add("status", "dead")
	}
	containers, err := cli.ContainerList(ctx, types.ContainerListOptions{
		Size:    true,
		All:     true,
		Filters: filters,
	})
	Log("", err, "0")

	var a = []ContainerStr{}

	for _, c := range containers {
		var data = ContainerStr{}

		Block{
			Try: func() {
				var re = regexp.MustCompile(`(/)([\w]{1,}..)(.*)`)
				data.Name = re.ReplaceAllString(c.Names[0], `$2`)
			},
			Catch: func(e Exception) {
				Log("Exception", nil, "1")
				Log(e, nil, "0")
			},
		}.Do()

		data.Id = c.ID[:12]
		data.State = c.State

		for _, n := range c.NetworkSettings.Networks {
			data.IP = n.IPAddress
		}

		a = append(a, data)
	}

	cli.Close()

	return a
}

func ContainerStop(name string) {
	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv)
	Log("", err, "0")

	containers := ContainerList("")

	for _, c := range containers {
		err := cli.ContainerStop(ctx, c.Id, container.StopOptions{})
		Log("", err, "0")
		cli.ContainerRemove(ctx, c.Id, types.ContainerRemoveOptions{})
	}

	cli.Close()

}

type ContainerCreateCreatedBody struct {

	// The ID of the created container
	// Required: true
	ID string `json:"Id"`

	// Warnings encountered when creating the container
	// Required: true
	Warnings []string `json:"Warnings"`
}

func ContainerStart(c string) ContainerCreateCreatedBody {

	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.FromEnv)
	Log("", err, "0")

	//CHECK IF CONTAINER IS UP
	ret := ContainerList(c)
	if len(ret) > 0 {
		ContainerStop(c)
	}

	cpu, _ := HostResources()
	NumberOfCPUs, _ := strconv.Atoi(cpu)

	var n int64
	if config.NodeMode == "MULTI" {
		n = int64(NumberOfCPUs) * 1000000000
	}
	if config.NodeMode == "SINGLE" {
		n = 1000000000
	}

	config := &container.Config{
		Image: "containers_master",
	}
	hostConfig := &container.HostConfig{
		NetworkMode: "net-iguana-usp",
		Mounts: []mount.Mount{
			{
				Type:   mount.TypeBind,
				Source: DEFAULT_NFS_PATH,
				Target: DEFAULT_NFS_PATH,
			},
		},
		Privileged: true,
		Resources: container.Resources{
			NanoCPUs: n,
			//Memory:   1073741824,

		},
	}

	resp, err := cli.ContainerCreate(ctx, config, hostConfig, nil, nil, c)
	Log("", err, "0")

	if err := cli.ContainerStart(ctx, resp.ID, types.ContainerStartOptions{}); err != nil {
		Log("", err, "0")
	}
	Log("", err, "0")

	cli.Close()

	return ContainerCreateCreatedBody(resp)
}

type ExecResult struct {
	StdOut   string
	StdErr   string
	ExitCode int
}

func ContainerExec(containerID string,
	command []string,
	maxTimeout string) (ExecResult, error) {

	ctx := context.Background()

	docker, err := client.NewClientWithOpts(client.FromEnv)

	configExec := types.ExecConfig{
		AttachStderr: true,
		AttachStdout: true,
		Cmd:          command,
	}

	sec, err := time.ParseDuration(maxTimeout + "s")

	ctx, cancel := context.WithTimeout(ctx, sec)
	defer cancel()

	r, err := docker.ContainerExecCreate(ctx, containerID, configExec)
	Log("", err, "0")

	ret, err := InspectExecResp(ctx, r.ID)

	docker.Close()

	return ret, err
}

func InspectExecResp(ctx context.Context, id string) (ExecResult, error) {
	var execResult ExecResult
	docker, err := client.NewClientWithOpts(client.FromEnv)
	if err != nil {
		return execResult, err
	}
	//defer closer(docker)

	resp, err := docker.ContainerExecAttach(ctx, id, types.ExecStartCheck{})
	if err != nil {
		return execResult, err
	}
	defer resp.Close()
	defer docker.Close()

	// read the output
	var outBuf, errBuf bytes.Buffer
	outputDone := make(chan error)

	go func() {
		// StdCopy demultiplexes the stream into two buffers
		_, err = stdcopy.StdCopy(&outBuf, &errBuf, resp.Reader)
		outputDone <- err
	}()

	select {
	case err := <-outputDone:
		if err != nil {
			return execResult, err
		}
		break

	case <-ctx.Done():
		return execResult, ctx.Err()
	}

	stdout, err := ioutil.ReadAll(&outBuf)
	if err != nil {
		return execResult, err
	}
	stderr, err := ioutil.ReadAll(&errBuf)
	if err != nil {
		return execResult, err
	}

	res, err := docker.ContainerExecInspect(ctx, id)
	if err != nil {
		return execResult, err
	}

	execResult.ExitCode = res.ExitCode
	execResult.StdOut = string(stdout)
	execResult.StdErr = string(stderr)
	return execResult, nil
}
