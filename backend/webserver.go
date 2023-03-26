package main

import (
	"net/http"
)

type NotFoundRedirectRespWr struct {
	http.ResponseWriter // We embed http.ResponseWriter
	status              int
}

func (w *NotFoundRedirectRespWr) WriteHeader(status int) {
	w.status = status // Store the status for our own use
	if status != http.StatusNotFound {
		w.ResponseWriter.WriteHeader(status)
	}
}

func (w *NotFoundRedirectRespWr) Write(p []byte) (int, error) {
	if w.status != http.StatusNotFound {
		return w.ResponseWriter.Write(p)
	}
	return len(p), nil // Lie that we successfully written it
}

func wrapHandler(h http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		nfrw := &NotFoundRedirectRespWr{ResponseWriter: w}
		h.ServeHTTP(nfrw, r)
		if nfrw.status == 404 {
			http.Redirect(w, r, "/", http.StatusFound)
		}
	}
}

func WebServer() {
	fs := wrapHandler( http.FileServer(http.Dir(DEFAULT_STATIC_PATH)))
	http.Handle("/", fs)

	/// FRONTEND CALL ///
	http.HandleFunc("/api/simpleRequest",   FSimpleRequest)
	http.HandleFunc("/api/fileRequest",     FFileRequest)
	http.HandleFunc("/api/fileResponse",    FFileResponse)
	http.HandleFunc("/api/FDBRequest",      FDBRequest)
	http.HandleFunc("/api/setLogin",        FLogin)
	http.HandleFunc("/api/runExecCode",     FExecCode)
	http.HandleFunc("/api/setOpMode",       FOperationMode)
	http.HandleFunc("/api/setConfigs",      FConfigUpdate)

	/// WEB SERVER LISTENER ///
	ipPublic := ""
	if GLOBAL_HOST.PublicAddr == "" {
		for _, i := range ConfigDefaultAddr() {
			ip, _:= HostIP(i.Name)
			ipPublic = ip.String()
			Log("WebInterface on IP http://"+ipPublic+":"+GLOBAL_HOST.FrontendPort, nil, "1")
		}
		ipPublic = ""
	} else {
		ip, _:= HostIP(GLOBAL_HOST.PublicAddr)
		ipPublic = ip.String()
		Log("WebInterface on IP http://"+ipPublic+":"+GLOBAL_HOST.FrontendPort, nil, "1")
	}

	//readtime, _ := strconv.Atoi(config.CodeExecTimeout)
	//writetime, _ := strconv.Atoi(config.CodeExecTimeout)

	srv := &http.Server{
		Addr:           ipPublic+":"+GLOBAL_HOST.FrontendPort,
		Handler:        nil,
		//ReadTimeout:    time.Duration(readtime) * 2 * time.Second,
		//WriteTimeout:   time.Duration(writetime) * 3 * time.Second,
		//MaxHeaderBytes: 1 << 20,
	}
	err := srv.ListenAndServe()
	Log("", err, "0")
}