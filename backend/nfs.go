package main

import (
	"./nfs"
)

func nfsStop() {
	nfs.ValidateConfigFile(DEFAULT_CONFIG_PATH)

	r := nfs.Server{}
	r.Stop()
}

func nfsStart() (*nfs.Server, string) {
	nfs.ValidateConfigFile(DEFAULT_CONFIG_PATH)

	// create our test server
	network := "0.0.0.0/0"
	exported := "shared"
	baseDir := "/iguana-hpc-usp/shared/master"

	s, err := nfs.NewServer(baseDir, exported, network)
	Log("", err, "1")

	return s, baseDir
}

func nfsVolume(s *nfs.Server, baseDir string) {
	nfs.ValidateConfigFile(DEFAULT_CONFIG_PATH)

	if s != nil {
		err := s.AddVolume(baseDir)
		Log("NFS Volume add", err, "0")
		Log("", err, "1")
		if err == nil {
			err = s.Sync()
			Log("", err, "1")
		}
	}
}

func nfsMount() {
	nfs.ValidateConfigFile(DEFAULT_CONFIG_PATH)

	err := nfs.Mount(&nfs.NFSDriver{}, GLOBAL_HOST.Cluster.MasterIP.String() + ":"+DEFAULT_NFS_PATH, DEFAULT_NFS_PATH)
	Log("", err, "1")
}

func nfsUmount() {
	nfs.ValidateConfigFile(DEFAULT_CONFIG_PATH)

	for i:=0; i < 3; i++ {
		err := nfs.Unmount(&nfs.NFSDriver{}, DEFAULT_NFS_PATH)
		if err == nil {
			break
		}
	}
	//Log("Problem in NFS Umount", nil, "0")
}