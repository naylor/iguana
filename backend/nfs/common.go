// Copyright 2014 The Serviced Authors.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package nfs

import (
	"github.com/control-center/serviced/commons/proc"
	"github.com/control-center/serviced/utils"
	"errors"
	"fmt"
	"net"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"
)

var etcHostsAllow = "/etc/hosts.allow"
var etcHostsDeny = "/etc/hosts.deny"
var etcFstab = "/etc/fstab"
var etcExports = "/etc/exports"
var exportsDir = "/iguana-hpc-usp"
var lookPath = exec.LookPath
var staleNFSCheck = utils.IsNFSMountStale

const mountNfs4 = "/sbin/mount.nfs4"

// ErrMalformedNFSMountpoint is returned when the nfs mountpoint string is malformed
var ErrMalformedNFSMountpoint = errors.New("malformed nfs mountpoint")

// ErrNfsMountingUnsupported is returned when the mount.nfs4 binary is not found
var ErrNfsMountingUnsupported = errors.New("nfs mounting not supported; install nfs-common")

// exec.Command interface (for mocking)
type commandFactoryT func(string, ...string) command

// locally plugable command interface
var commandFactory = func(name string, args ...string) command {
	return exec.Command(name, args...)
}

// exec.Cmd interface subset we need
type command interface {
	CombinedOutput() ([]byte, error)
}

type Driver interface {
	// Installed determines if the driver is installed on the system
	Installed() error
	// Info provides information about the mounted drive
	// TODO: make output more universal
	Info(localPath string, info *proc.NFSMountInfo) error
	// Mount mounts the remote path to local
	Mount(remotePath, localPath string, timeout time.Duration) error
	// Unmount force unmounts a volume
	Unmount(localPath string) error
}

type NFSDriver struct{}

func (d *NFSDriver) Installed() error {
	if _, err := lookPath(mountNfs4); err != nil {
		return ErrNfsMountingUnsupported
	}
	return nil
}

func (d *NFSDriver) Info(localPath string, info *proc.NFSMountInfo) error {
	minfo, err := proc.GetNFSVolumeInfo(localPath)
	if minfo != nil {
		*info = *minfo
	}

	return err
}

func (d *NFSDriver) Mount(remotePath, localPath string, timeout time.Duration) error {
	Log("Mounting " + remotePath + " -> " + localPath, nil, "0")
	cmd := commandFactory("mount.nfs4", "-o", "intr", remotePath, localPath)
	errC := make(chan error, 1)
	go func() {
		output, err := cmd.CombinedOutput()
		if exitCode, ok := utils.GetExitStatus(err); exitCode == 32 || !ok {
			errC <- fmt.Errorf("%s (%s)", string(output), err)
		} else {
			errC <- nil
		}
	}()

	select {
	case <-time.After(timeout):
		err := fmt.Errorf("timeout waiting for nfs mount")
		if execCmd, ok := cmd.(*exec.Cmd); ok {
			execCmd.Process.Kill()
		}
		return err
	case err := <-errC:
		return err
	}
}

func (d *NFSDriver) Unmount(localPath string) error {
	//Log("Unmounting " + localPath, nil, "0")
	cmd := commandFactory("umount", "-f", localPath)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("%s (%s)", string(output), err)
	}
	return nil
}

// Mount attempts to mount the nfsPath to the localPath
func Mount(driver Driver, remotePath, localPath string) error {
	// check if the driver is installed
	if err := driver.Installed(); err != nil {
		return err
	}

	// validate that the remote path
	if ok := func(remotePath string) bool {
		parts := strings.Split(remotePath, ":")
		if len(parts) != 2 {
			return false
		}

		ip := net.ParseIP(parts[0])
		if ip == nil {
			return false
		}

		dest := filepath.Clean(parts[1])
		return dest != "/" && filepath.IsAbs(dest)
	}(remotePath); !ok {
		return ErrMalformedNFSMountpoint
	}

	/*
	var mountInfo proc.NFSMountInfo
	mountError := driver.Info(localPath, &mountInfo)

	needsReMount := false

	if mountError == nil {
		// we need to check for a stale NFS mount
		if staleNFSCheck(localPath) {
			Log("Detected stale NFS mount, re-mounting " + localPath, nil, "0")
			//unmount and re-mount
			needsReMount = true
			if err := driver.Unmount(localPath); err != nil {
				Log("Error while unmounting " + localPath, err, "0")
				return err
			}

		}
	}

	if mountError == proc.ErrMountPointNotFound || needsReMount {
	*/
		// the mountpoint is not found so try to mount
		Log("Creating new mount for " + remotePath + " --> " + localPath, nil, "0")
		if err := os.MkdirAll(localPath, 0777); err != nil {
			return err
		}
		if err := driver.Mount(remotePath, localPath, time.Second*30); err != nil {
			Log("Error while creating mount point for " + remotePath + " --> " + localPath, err, "0")
			return err
		}

		// get the mount point
		//mountError = driver.Info(localPath, &mountInfo)
	//}

	/*
	if mountError != nil {
		// we should have a mount point by now or bust
		Log("Could not get volume info for " + localPath + " (mounting from " + remotePath + ")", mountError, "0")
		return mountError
	}

	// validate mount info
	Log(mountInfo, nil, "0")
	verr := validation.NewValidationError()
	verr.Add(validation.StringsEqual(remotePath, mountInfo.RemotePath, ""))
	verr.Add(validation.StringsEqual("nfs4", mountInfo.FSType, fmt.Sprintf("%s not mounted nfs4, %s instead", mountInfo.LocalPath, mountInfo.FSType)))

	if verr.HasError() {
		// the mountpoint is stale or wrong, so unmount
		Log("Stale mount point at "+localPath+" (mounting "+remotePath+")", nil, "0")
		if err := driver.Unmount(localPath); err != nil {
			Log("Could not unmount " + localPath, err, "0")
		}
		return verr
	}
	*/

	return nil
}

// Unmount attempts to unmount the localPath
func Unmount(driver Driver, localPath string) error {
	// check if the driver is installed
	if err := driver.Installed(); err != nil {
		return err
	}

	// verify mount
	//var mountInfo proc.NFSMountInfo
	//if err := driver.Info(localPath, &mountInfo); err != nil {
	//	Log("Could not get volume info for " + localPath, err, "0")
	//	return err
	//}

	if err := driver.Unmount(localPath); err != nil {
		//Log("Could not unmount " + localPath, err, "0")
		return err
	}

	return nil
}
