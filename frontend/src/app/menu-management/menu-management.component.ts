import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthStr, ParamStr, RequestStr, ResponseStr, UniversalDTOStr} from "../_model/service";
import {HostService} from "../_services/host.service";
import {EventEmitterService} from "../_services/event-emitter.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import {Subscription} from "rxjs";
import {UtilControl} from "../_control/util.control";

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent implements OnInit {

  userSession = {} as AuthStr;
  response = {} as ResponseStr;

  subLogin: Subscription;

  constructor(
    private router: Router,
    private host: HostService,
    private _eventEmitter: EventEmitterService,
    private _snackBar: MatSnackBar,
    public _util: UtilControl,
  ) { }

  ngOnInit() {
    window.localStorage.removeItem("TryACode");

    this.userSession = this.host.getSessionID();

    //Getting value from HostCredentials
    this.subLogin = this._eventEmitter.loginChange.subscribe(
      data => {
        this.userSession = this.host.getSessionID();
        //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', this.userSession);
      },
    );
  }

  ngOnDestroy() {
    this.subLogin.unsubscribe();
  }

  setRoute(val) {
    this.router.navigate([val])
  }

  reboot() {
    let ret = this._util.openModal('Reboot Server: ',
        'Confirm restart the server?',
        'Yes', 'No', '');

    ret.afterClosed().subscribe(data => {

      if (data['button'] == 'YES') {
        let params: ParamStr[] = [];

        let request: RequestStr = {
          Request: "reboot",
          Param: params,
        };

        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
              this.response = data;
              this._util.setResponse(this.response['Status'], this.response['Name'], null, null);

            });
      }
    });
  }

}
