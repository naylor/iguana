import {Component, ViewChild} from '@angular/core';
import {HostService} from "./_services/host.service";
import {EventEmitterService} from "./_services/event-emitter.service";
import {HostInfoStr} from "./_model/hostInfo";
import {ClusterStr} from "./_model/cluster";
import {ParamStr, RequestStr, ResponseStr} from "./_model/service";
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";
import {UtilControl} from "./_control/util.control";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // @ts-ignore
  @ViewChild('drawer') sidenav: MatSidenav;

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'angular-idle-timeout';

  hostConnection: ResponseStr;
  clusterConnection: ResponseStr;

  tmp_hostConnection: ResponseStr;
  tmp_clusterConnection: ResponseStr;
  tmp_OkConnection: ResponseStr;

  hostInfo = {} as HostInfoStr;
  cluster = {} as ClusterStr;

  newOpMode: string;

  panelOpenState: boolean;
  isHandset$: any;

  load = 0;

  version: string;
  conn: any;

  subLogin: Subscription;
  subNewOpMode: Subscription;

  constructor(
      private router: Router,
      private host: HostService,
      public _util: UtilControl,
      private _eventEmitter: EventEmitterService,
  ){}

  ngOnInit() {

    this.hostInfo.Cluster = this.cluster;

    this.tmp_hostConnection = {
      Name: "info",
      Status: "waiting data from host...",
    };
    this.tmp_clusterConnection = {
      Name: "info",
      Status: "waiting for some cluster on the network...",
    };

    this.tmp_OkConnection = {
      Name: "ok",
      Status: "connected",
    };

    this.hostConnection = this.tmp_hostConnection;
    this.clusterConnection = this.tmp_clusterConnection;

    this.getVersion();

    //Getting value from child HostCredentials
    this.subLogin = this._eventEmitter.loginChange.subscribe(
        data => {
          //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', data);
          this.getHostInfo();

          if (data['Name'] == "stopSession")
            this.sidenav.close();
          //if (data['Name'] == "startSession")
          //  this.sidenav.toggle();
        },
    );

    //Getting value from child OperationModeComponent
    this.subNewOpMode = this._eventEmitter.newOpMode.subscribe(
        data => {
          this.sidenav.close();
          this.newOpMode = data;
          this.clusterConnection = this.tmp_clusterConnection;
          this.hostConnection = this.tmp_hostConnection;

          this.host.killSessionID();
        },
    );

    this.managerStatus();

  }

  ngOnDestroy() {
    this.subLogin.unsubscribe();
    this.subNewOpMode.unsubscribe();
  }

  getVersion() {
    let params: ParamStr[] = [];

    let request: RequestStr = {
      Request: "version",
      Param: params,
    };

    let queue;
    this.host.request(request, 'simpleRequest')
        .subscribe(data => {
          this.version = data;
        });
  }

  checkToken() {
    // Let's check if token is already valid
    // This value come from HttpErrorInterceptor
    let auth = this.host.getSessionID();
    if (auth.Token == "error") {
      console.log("erro the token");

      this._util.openModal('Token Error',
          'This token is no more valid! Please, login again...',
          'Close', '', '');
      this.host.killSessionID();
      this._eventEmitter.setLoginChange({Name: "error", Status: "logout"});
    }

  }

  first = 0;

  getHostInfo() {
    let params: ParamStr[] = [];
    let request: RequestStr = {
      Request: "hostInfo",
      Param: params,
    };

    this.checkToken();

    this.host.request(request, 'simpleRequest')
        .subscribe(data => {

          //console.log('App Root | hostInfo, this.newOpMode: ', data, this.newOpMode);
          this.hostInfo = data;

          if (this.hostInfo.WebSocketPort)
            window.localStorage.setItem('WebSocketPort', this.hostInfo.WebSocketPort);

          if (data == '-' ||
              data['OpMode'] == '' ||
              (this.newOpMode && this.hostInfo.OpMode != this.newOpMode)) {
            // If no connection, show error message
            this.hostConnection = this.tmp_hostConnection;
            this.host.killSessionID();
            this.first = 0;
            this.sidenav.close();

          } else {
            //console.log(this.hostInfo);

            this.hostConnection = this.tmp_OkConnection;
            //Send HostInfo to all children
            this._eventEmitter.setHostInfo(this.hostInfo);

            //Get Credential
            if (this.host.getSessionID().Module == "Admin")
              this.hostInfo['IsMaster'] = true;

            if (this.hostInfo.Cluster.MasterIP && this.hostInfo.Cluster.MasterIP != "") {
              this.clusterConnection = this.tmp_OkConnection;

              if (this.first == 0 && this.hostInfo.OpMode == 'NODE') {
                let ret = this._util.openModal('Master Frontend',
                    'Do you want to be redirected to the master frontend?',
                    'Yes', 'No', '');

                ret.afterClosed().subscribe(data => {
                  if (data['button'] == 'YES') {
                    window.open("http://"+this.hostInfo.Cluster.MasterIP+":"
                        +this.hostInfo.Cluster.PortFrontend, "_blank");
                  }
                });

                this.first = 1;
              }
            } else {
              this.clusterConnection = this.tmp_clusterConnection;
            }
          }

        });
  }

  // Let's check host connection after 10 seconds and forever....
  async managerStatus() {
    let n = 0;

    while (true)
    {
      this.getHostInfo();

      if (this.hostConnection["Name"] == "info" && n == 2) {
        this.conn = this._util.openModal('Connection Failed',
            'There is no connection with the server!',
            'Close', '', '');
      }

      if (this.conn && this.hostConnection["Name"] == "ok" && n > 0) {
        this.conn.close();
        n = 0;
      }

      await this._util.delay(10000);

      if (this.hostConnection["Name"] == "info")
        n++;

    }
  }

}