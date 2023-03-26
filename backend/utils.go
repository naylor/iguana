package main

import (
	"./openssl"
	"bufio"
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"github.com/fatih/color"
	"io"
	"io/ioutil"
	"log"
	m "math/rand"
	"net/url"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"runtime"
	"syscall"
	"time"
)

type Block struct {
	Try     func()
	Catch   func(Exception)
	Finally func()
}

type Exception interface{}

func Throw(up Exception) {
	panic(up)
}

func (tcf Block) Do() {
	if tcf.Finally != nil {
		defer tcf.Finally()
	}
	if tcf.Catch != nil {
		defer func() {
			if r := recover(); r != nil {
				tcf.Catch(r)
			}
		}()
	}
	tcf.Try()
}

func UtilReboot() ResponseStr {
	Log("Rebooting the system", nil, "1")
	syscall.Sync()
	err := syscall.Reboot(syscall.LINUX_REBOOT_CMD_RESTART)
	if err != nil {
		return ResponseStr{"error", err.Error()}
	}
	return ResponseStr{"ok", "The system is restarting, please wait a few seconds!"}
}

func UtilTokenGenerator() string {
	m.Seed(time.Now().UnixNano())

	var pool = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

	bytes := make([]byte, 16)
	for i := 0; i < 16; i++ {
		bytes[i] = pool[m.Intn(len(pool))]
	}
	return string(bytes)
}

func Log(msg interface{}, err error, info string) {
	pc, file, line, ok := runtime.Caller(1)
	u, _ := url.Parse(filepath.Base(file))

	if info == "1" && msg != "" && err == nil {
		y := color.New(color.FgHiYellow)
		y.Printf("\n[INFO] %s\n", msg)
		log.Println("[INFO] ", msg)
	}

	if config.Debug == "On" {
		if ok && msg != "" {
			b := color.New(color.FgHiBlue)
			b.Printf("\n[DEBUG] (%s, line #%d, func: %v)\n output: %s\n",
				u, line, runtime.FuncForPC(pc).Name(), msg)
			log.Println("[DEBUG] (", u, ",line #", line, ",func: ", runtime.FuncForPC(pc).Name(),
				") output: ", msg)
		}
	}

	if err != nil && (config.Error == "On" || (info == "1")) {
		r := color.New(color.FgHiRed)
		r.Printf("\n[DEBUG] (%s, line #%d, func: %v)\n output: %s\n",
			u, line, runtime.FuncForPC(pc).Name(), err)
		log.Println("[DEBUG] (", u, ",line #", line, ",func: ", runtime.FuncForPC(pc).Name(),
			") output: ", err)
		fmt.Printf("\n")
	}

}

func UtilLogOutput() func() {
	logfile := `/var/log/iguana.log`
	// open file read/write | create if not exist | clear file at open if exists
	f, _ := os.OpenFile(logfile, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)

	// save existing stdout | MultiWriter writes to saved stdout and file
	out := os.Stdout
	mw := io.MultiWriter(out, f)

	// get pipe reader and writer | writes to pipe writer come out pipe reader
	r, w, _ := os.Pipe()

	// replace stdout,stderr with pipe writer | all writes to stdout, stderr will go through pipe instead (fmt.print, log)
	os.Stdout = w
	os.Stderr = w

	// writes with log.Print should also write to mw
	log.SetOutput(mw)

	//create channel to control exit | will block until all copies are finished
	exit := make(chan bool)

	go func() {
		// copy all reads from pipe to multiwriter, which writes to stdout and file
		_, _ = io.Copy(mw, r)
		// when r or w is closed copy will finish and true will be sent to channel
		exit <- true
	}()

	// function to be deferred in main until program exits
	return func() {
		// close writer then block on exit channel | this will let mw finish writing before the program exits
		_ = w.Close()
		<-exit
		// close file after all writes have finished
		_ = f.Close()
	}

}

func UtilFileCreate(filePath string, content string) {
	file, err := os.Create(filePath)
	Log("", err, "1")

	defer file.Close()

	w := bufio.NewWriter(file)
	fmt.Fprintln(w, content)
	w.Flush()

}

func UtilDefaultDir(name string) string {
	if name == "NFS" {
		dir := "/iguana-hpc-usp/shared/master"
		configDir, _ := UtilDirExists(dir)
		if !configDir {
			err := UtilEnsureDir(dir)
			if err != nil {
				Log("Failed to create dir: "+dir, nil, "1")
				os.Exit(3)
			}
		}
		return dir
	}

	if name == "CONFIG" {
		dir := "/usr/local/etc/iguana-hpc-usp"
		configDir, _ := UtilDirExists(dir)
		if !configDir {
			err := UtilEnsureDir(dir)
			if err != nil {
				Log("Failed to create dir: "+dir, nil, "1")
				os.Exit(3)
			}
		}
		return dir
	}

	if name == "STATIC" {
		dir := "/usr/local/share/iguana-hpc-usp"
		configDir, _ := UtilDirExists(dir)
		if !configDir {
			err := UtilEnsureDir(dir)
			if err != nil {
				Log("Failed to create dir: "+dir, nil, "1")
				os.Exit(3)
			}
		}
		return dir
	}

	return ""
}

func UtilDirExists(path string) (bool, error) {
	_, err := os.Stat(path)
	if err == nil {
		return true, nil
	}
	if os.IsNotExist(err) {
		return false, nil
	}
	return true, err
}

func UtilEnsureDir(dirName string) error {
	err := os.MkdirAll(dirName, 0755)
	if err == nil || os.IsExist(err) {
		return nil
	} else {
		return err
	}
}

func UtilListDir(dirName string) []string {
	files, err := ioutil.ReadDir(dirName)
	Log("", err, "0")

	var dirs []string

	for _, f := range files {
		switch f.Name() {
		case
			"main",
			"main.c",
			"main.sh",
			"out.res":
			continue
		}
		dirs = append(dirs, f.Name())
	}

	return dirs
}

func UtilRemoveContents(dir string) error {
	err := os.RemoveAll(dir)
	if err != nil {
		return err
	}

	return nil
}

func UtilValidateNames(name string) bool {
	var IsLetter = regexp.MustCompile(`^[a-zA-Z]+$`).MatchString
	return IsLetter(name)
}

func UtilCreateHash(key string) string {

	key += "NPZ8fvABP5pKSwU3"

	hasher := md5.New()
	hasher.Write([]byte(key))
	return hex.EncodeToString(hasher.Sum(nil))
}

func UtilEncrypt(plaintext []byte, secret string) []byte {

	o := openssl.New()

	enc, err := o.EncryptBytes(secret, plaintext, openssl.DigestMD5Sum)
	Log("", err, "0")

	return enc
}

func UtilDecrypt(text []byte, secret string) []byte {

	o := openssl.New()

	dec, err := o.DecryptBytes(secret, text, openssl.DigestMD5Sum)
	if err != nil {
		Log(secret, err, "0")
		Log(text, err, "0")
	}

	return dec
}

func UtilSysInfo() RequestStr {

	var ret RequestStr
	var p ParamStr
	var execute []string
	Block{
		Try: func() {
			ret.Request = "ok"
			/////// SO VERSION /////////////
			p.Name = "SO Host"
			p.Value = getVersionLocal("/bin/cat", "/etc/os-release", "PRETTY_NAME=(.*)")
			p.Value = p.Value[:len(p.Value)-1]
			p.Value = p.Value[13:len(p.Value)]
			ret.Param = append(ret.Param, p)

			/////// CPU /////////////
			p.Name = "CPU Host"
			//cpuInfos, _ := cpu.Info()
			//p.Value = cpuInfos[0].ModelName
			ret.Param = append(ret.Param, p)

			/////// KERNEL /////////////
			p.Name = "Host Kernel"
			//p.Value, _ = host.KernelVersion()
			ret.Param = append(ret.Param, p)

			/////// VIRTUALIZATION /////////////
			p.Name = "Virtualization Technology"
			/*v1, v2, _ := host.Virtualization()
			if v2 != "" {
				p.Value = v2
			}
			if v1 != "" {
				p.Value = v1
			}*/
			ret.Param = append(ret.Param, p)

			/////// VIRTUAL SO /////////////
			execute = nil
			execute = append(execute, "/bin/cat", "/etc/os-release")
			p.Name = "Virtualized OS"
			p.Value = getVersionVirt(execute, "PRETTY_NAME=(.*)")
			p.Value = p.Value[:len(p.Value)-1]
			p.Value = p.Value[13:len(p.Value)]
			ret.Param = append(ret.Param, p)

			/////// VIRTUAL KERNEL /////////////
			execute = nil
			execute = append(execute, "/bin/uname", "-r")
			p.Name = "Virtualized Kernel"
			p.Value = getVersionVirt(execute, ".*")
			ret.Param = append(ret.Param, p)

			/////// MPI /////////////
			execute = append(execute, "mpirun", "--version")
			p.Name = "OpenMPI"
			p.Value = getVersionVirt(execute, "([0-9].[0-9].[0-9])|([0-9].[0-9])")
			ret.Param = append(ret.Param, p)

			/////// GCC /////////////
			execute = nil
			execute = append(execute, "gcc", "--version")
			p.Name = "GCC"
			p.Value = getVersionVirt(execute, "([0-9].[0-9].[0-9])|([0-9].[0-9])")
			ret.Param = append(ret.Param, p)

			/////// NVCC VERSION /////////////
			p.Name = "NVCC"
			p.Value = getVersionLocal("/usr/bin/nvcc", "--version", "(V[0-9]+.*)")
			ret.Param = append(ret.Param, p)

		},
		Catch: func(e Exception) {
			Log("Exception", nil, "1")
			Log(e, nil, "0")
			ret.Request = "error"
		},
	}.Do()

	return ret
}

func getVersionLocal(execute string, args string, regex string) string {

	rs, err := exec.Command(execute, args).Output()
	Log("", err, "0")

	var ret string
	Block{
		Try: func() {
			var re = regexp.MustCompile(regex)
			match := re.FindAllString(string(rs), -1)
			if len(match) >= 1 {
				ret = match[0]
			} else {
				ret = "not found"
			}
		},
		Catch: func(e Exception) {
			Log("Exception", nil, "1")
			Log(e, nil, "0")
			ret = "not found"
		},
	}.Do()

	return ret
}

func getVersionVirt(execute []string, regex string) string {

	rs, err := ContainerExec(GLOBAL_HOST.IdContainer, execute, "5")
	Log("", err, "0")

	var ret string
	Block{
		Try: func() {
			var r string
			if rs.StdErr != "" {
				r = rs.StdErr
			}
			if rs.StdOut != "" {
				r = rs.StdOut
			}
			var re = regexp.MustCompile(regex)
			match := re.FindAllString(r, -1)
			if len(match) >= 1 {
				ret = match[0]
			} else {
				ret = "not found"
			}
		},
		Catch: func(e Exception) {
			Log("Exception", nil, "1")
			Log(e, nil, "0")
			ret = "not found"
		},
	}.Do()

	return ret
}
