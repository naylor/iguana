package main

import (
	"time"
)

func UserRecoverPassword(host string, email string) ResponseStr {

	user := dbListUsers(email)

	if user.Module == "" {
		return ResponseStr{"error", "Email account not found."}
	}

	token := UtilTokenGenerator()

	dbUpdateBack("UPDATE Users SET TempChangePass='" + UtilCreateHash(token) + "' WHERE Email='" + email + "'")

	body := "<html><head><body>" +
		user.Name + ",<br /><br />" +
		"A password recovery was requested. <br /><br />" +
		"We create a temporary password for you to access the system. <br /><br /><hr />" +
		"Temporary password: <b>" + token + "</b>" +
		"<hr /><br />" +
		"<i>If it's not your request, just ignore this message " +
		"and use your regular password to login.</i> <br /><br />" +
		"Best Regards" +
		"</body></head></html>"

	r, err := ServiceSmtp(email, body)
	Log(r, err, "0")

	if r == true && err == nil {
		return ResponseStr{"ok", "Email sent."}
	}

	if err != nil {
		return ResponseStr{"error", err.Error()}
	}

	return ResponseStr{"error", "Email not sent. Internal error!"}

}

func UserLogout(name string) ResponseStr {

	var temp []HostInfoStr

	for _, g := range GLOBAL_FRONTNAMES {
		if g.Owner != name {
			temp = append(temp, g)
		}
	}
	GLOBAL_FRONTNAMES = temp

	return ResponseStr{"ok", "Successfully logged out."}

}

func UserLogin(frontend HostInfoStr) ResponseStr {

	var ret ResponseStr

	// Let's verify if owner has been set in Config File
	auth := AuthStr{
		Owner:    frontend.Owner,
		Password: frontend.Password,
		Token:    frontend.Token,
	}
	authorized, _, token, ret := HostCredentials(auth, "", "LOGIN")

	// Let's check if owner has been include in GLOBAL_FRONTNAMES
	if authorized {
		has := false

		Block{
			Try: func() {
				for index, f := range GLOBAL_FRONTNAMES {
					if f.Owner == frontend.Owner {
						has = true
						GLOBAL_FRONTNAMES[index].Token = token
						break
					}
				}
			},
			Catch: func(e Exception) {
				Log("Exception", nil, "1")
				Log(e, nil, "0")
			},
		}.Do()

		// If not problems, let's include this user in GLOBAL
		if !has {
			frontend.Token = token
			GLOBAL_FRONTNAMES = append(GLOBAL_FRONTNAMES, frontend)
		}

		//Registering last activity of frontname
		UserSetLastActivity(frontend.Token)
	}

	return ret
}

func UserSetLastActivity(token string) {

	layout := "2006-01-02 15:04:05 -0700"
	t := time.Now().Local()

	var fTemp []HostInfoStr

	Block{
		Try: func() {
			for index, g := range GLOBAL_FRONTNAMES {
				if g.Token == token {
					GLOBAL_FRONTNAMES[index].LastActivity = t.Format(layout)
					fTemp = append(fTemp, GLOBAL_FRONTNAMES[index])
				} else {
					hrLA, _ := time.Parse(layout, GLOBAL_FRONTNAMES[index].LastActivity)
					duration := t.Sub(hrLA).Minutes()

					if duration < 20 {
						fTemp = append(fTemp, GLOBAL_FRONTNAMES[index])
					}
				}
			}
		},
		Catch: func(e Exception) {
			Log("Exception", nil, "1")
			Log(e, nil, "0")
		},
	}.Do()

	GLOBAL_FRONTNAMES = fTemp
}
