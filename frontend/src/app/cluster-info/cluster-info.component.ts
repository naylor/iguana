import {Component, Input, OnInit} from '@angular/core';
import {AuthStr, ResponseStr, ServiceOpModeStr} from "../_model/service";
import {HostService} from "../_services/host.service";
import {EventEmitterService} from "../_services/event-emitter.service";
import {ClusterStr} from "../_model/cluster";
import {HostInfoStr} from "../_model/hostInfo";
import {Subscription} from "rxjs";
import {UtilControl} from "../_control/util.control";

@Component({
  selector: 'app-cluster-info',
  templateUrl: './cluster-info.component.html',
  styleUrls: ['./cluster-info.component.css']
})
export class ClusterInfoComponent implements OnInit {
  //Getting hostInfo from APP ROOT
  @Input('hostInfo') hostInfo: HostInfoStr;
  @Input('hostConnection') hostConnection: ResponseStr;
  @Input('clusterConnection') clusterConnection: ResponseStr;

  userSession = {} as AuthStr;
  response = {} as ResponseStr;
  subLogin: Subscription;

  constructor(
    private host: HostService,
    public _util: UtilControl,
    private _eventEmitter: EventEmitterService
  ) {}

  ngOnInit() {

    //Getting value from child HostCredentials
    this.subLogin = this._eventEmitter.loginChange.subscribe(
      data => {
        //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', data);
        this.userSession = this.host.getSessionID();
      },
    );

    this.userSession = this.host.getSessionID();
  }

  ngOnDestroy() {
    this.subLogin.unsubscribe();
  }

  setOpMode() {

    let ret = this._util.openModal('Exit Cluster',
      'Do you confirm leaving the cluster??',
      'Yes', 'No', '');

    ret.afterClosed().subscribe(data => {

      if (data['button'] == 'YES') {

        let cluster = {} as ClusterStr;

        let serviceOpMode: ServiceOpModeStr = {
          NewOpMode: "LOCAL",
          Cluster: cluster,
        };
        //console.log('OperationMode: serviceOpMode ', serviceOpMode)

        this.response['Name'] = "info";
        this.response['Status'] = "Request sent, wait ...";

        this.host.request(serviceOpMode, 'setOpMode')
          .subscribe(data => {
            this.response = data;
            if (this.response['Name'] == "ok") {
              // Inform the App Root about new change in OpMode
              this.host.killSessionID();
              this._eventEmitter.setNewOpMode("LOCAL");
            }
          });
      }
    });

  }



}

