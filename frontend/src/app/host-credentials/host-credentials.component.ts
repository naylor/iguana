import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HostService} from "../_services/host.service";
import {HostInfoStr} from "../_model/hostInfo";
import {AuthStr, ParamStr, RequestStr, ResponseStr, UniversalDTOStr} from "../_model/service";
import {EventEmitterService} from "../_services/event-emitter.service";
import {Router} from "@angular/router";
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import {Subscription} from "rxjs";
import {UtilControl} from "../_control/util.control";

@Component({
  selector: 'app-host-credentials',
  templateUrl: './host-credentials.component.html',
  styleUrls: ['./host-credentials.component.css']
})

export class HostCredentialsComponent implements OnInit {

  //Getting hostInfo from APP ROOT
  @Input('hostInfo') hostInfo: HostInfoStr;

  idleState = '30 m';
  lastPing?: Date = null;

  registerForm: FormGroup;
  submitted = false;

  response = {} as ResponseStr;
  userSession = {} as AuthStr;
  subLogin: Subscription;

  constructor(
      private host: HostService,
      private _eventEmitter: EventEmitterService,
      private router: Router,
      private idle: Idle,
      private keepalive: Keepalive,
      public _util: UtilControl,
  ){
    idle.setIdle(1800);
    idle.setTimeout(60);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.';
      this.reset();
    });

    idle.onTimeout.subscribe(() => {
      this.logout();
      this.idleState = 'Timed out!';
    });

    idle.onIdleStart.subscribe(() => {
      this.idleState = 'You\'ve gone idle!';
      //console.log(this.idleState);
    });

    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = countdown + ' seconds!';
    });

    keepalive.interval(30);
    keepalive.onPing.subscribe(() => this.lastPing = new Date());
    this.reset();
  }

  reset() {
    this.idle.watch();
    this.idleState = '30 m';
  }

  ngOnInit() {

    this.userSession = this.host.getSessionID();

    //Getting value from child HostCredentials
    this.subLogin = this._eventEmitter.loginChange.subscribe(
        data => {
          //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', data);
          if (data['Name'] == "error") {
            this.host.killSessionID();
            this.userSession = {} as AuthStr;
            this.registerForm.reset();
            this.router.navigate(['welcome']);
          }

          if (data['Name'] == "stopSession") {
            this.idleState = "stopped";
            this.idle.stop();
          }

          if (data['Name'] == "startSession") {
            this.reset();
          }

          this.userSession = this.host.getSessionID();

        },
    );

  }

  ngOnDestroy() {
    this.subLogin.unsubscribe();
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  // LOGIN
  setRoute(val) {
    this.router.navigate([val])
  }

  addUser(): void {
    window.localStorage.removeItem("editUserId");
    this.host.setSessionID('', 'SelfRegistration', '||NPZ8fvABP5pKSwU3');
    this.router.navigate(['add-user']);
  };

  logout() {
    let params: ParamStr[] = [];
    params.push({Name: "", Value: this.userSession.Owner});

    let request: RequestStr = {
      Request: "logout",
      Param: params,
    };

    this.host.request(request, 'simpleRequest')
        .subscribe(data => {
          this.response = data;

          this._util.setResponse(this.response['Status'], this.response['Name'], null, null);

          if (this.response['Name'] == "ok")  {
            this.host.killSessionID();
            this.userSession = {} as AuthStr;
            this._eventEmitter.setLoginChange({Name: "stopSession", Status: ""});
            this.router.navigate(['welcome']);
          }
        });
  }

  getValidateSession() {
    let Auth = this.host.getSessionID();
    this.host.setSessionID(
        Auth.Owner,
        Auth.Module,
        Auth.Id + "|" + Auth.Password + "|" + Auth.Token
    );
    //console.log("getValidateSession");

  }

  // Let's validate session after 60 seconds
  async managerStatus() {
    while (true)
    {
      await this._util.delay(60000);

      this.getValidateSession();
    }
  }

}
