package nfs

import (
	"fmt"
	"github.com/tkanos/gonfig"
	"net/url"
	"path/filepath"
	"runtime"
	"github.com/fatih/color"
)

const DEFAULT_CONFIG_PATH = "../config/config.yaml"

var config Configuration
type Configuration struct {
	Debug string
	Error string
}

func ValidateConfigFile(pathConfig string) {
	// READ THE CONFIGURATION FILE
	config = Configuration{}
	err := gonfig.GetConf(pathConfig, &config)

	if config.Debug == "" {
		config.Debug = "On"
	}
	if config.Error == "" {
		config.Error = "On"
	}

	Log("", err, "0")
}


func Log(msg interface{}, err error, info string) {
	pc, file, line, ok := runtime.Caller(1)
	u, _ := url.Parse(filepath.Base(file))

	if info == "1" && msg != "" && err == nil {
		y := color.New(color.FgHiYellow)
		y.Printf("\n[INFO] %s\n", msg)
	}

	if config.Debug == "On" {
		if ok && msg != "" {
			b := color.New(color.FgHiGreen)
			b.Printf("\n[DEBUG] (%s, line #%d, func: %v)\n output: %s\n",
				u, line, runtime.FuncForPC(pc).Name(), msg)
		}
	}

	if err != nil && (config.Error == "On" || (info == "1")) {
		r := color.New(color.BgHiGreen)
		r.Printf("\n[DEBUG] (%s, line #%d, func: %v)\n output: %s\n",
			u, line, runtime.FuncForPC(pc).Name(), err)
		fmt.Printf("\n")
	}

}