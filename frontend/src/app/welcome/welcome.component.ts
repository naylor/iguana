import {CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {HostService} from "../_services/host.service";
import {AuthStr, ParamStr, RequestStr} from "../_model/service";
import {EventEmitterService} from "../_services/event-emitter.service";
import {Subscription} from "rxjs";
import {HostInfoStr} from "../_model/hostInfo";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userSession = {} as AuthStr;
  subLogin: Subscription;
  hostInfo = {} as HostInfoStr;

  constructor(
      private router: Router,
      private host: HostService,
      private _eventEmitter: EventEmitterService,
  ) {
  }

  ngOnInit() {
    this.userSession = this.host.getSessionID();

    //Getting value from child HostCredentials
    this.subLogin = this._eventEmitter.loginChange.subscribe(
        data => {
          this.userSession = this.host.getSessionID();
        },
    );
    this.getHostInfo();

  }

  ngOnDestroy() {
    this.subLogin.unsubscribe();
  }

  getHostInfo() {
    let params: ParamStr[] = [];
    let request: RequestStr = {
      Request: "hostInfo",
      Param: params,
    };

    this.host.request(request, 'simpleRequest')
        .subscribe(data => {
          this.hostInfo = data;
        });
  }

  setRoute() {
    this.host.setSessionID('', 'SelfRegistration', '||NPZ8fvABP5pKSwU3');
    this.router.navigate(['add-user']);
  }

}