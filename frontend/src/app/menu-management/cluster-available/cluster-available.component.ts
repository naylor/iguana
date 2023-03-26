import {Component, OnInit} from '@angular/core';
import {HostService} from "../../_services/host.service";
import {HostInfoStr} from "../../_model/hostInfo";
import {ClusterStr} from "../../_model/cluster";
import {dialogStr} from "../../_model/dialog";
import {EventEmitterService} from "../../_services/event-emitter.service";
import {ParamStr, RequestStr, ResponseStr, ServiceOpModeStr} from "../../_model/service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {UtilControl} from "../../_control/util.control";

@Component({
  selector: 'app-cluster-available',
  templateUrl: './cluster-available.component.html',
  styleUrls: ['./cluster-available.component.css']
})
export class ClusterAvailableComponent implements OnInit {

  clusters: ClusterStr[] = [];
  responseCo = {} as ResponseStr;
  responseOp = {} as ResponseStr;
  hostInfo = {} as HostInfoStr;
  subHostInfo: Subscription;
  haveUpdate: string = "";

  constructor(
    private host: HostService,
    public _util: UtilControl,
    private router: Router,
    private _eventEmitter: EventEmitterService,
  ){
    this.host.checkSessionID(this.constructor.name);
  }

  ngOnInit() {

    this.clusterInfo();

    this.hostInfo.Cluster = {} as ClusterStr;
    this.getHostInfo();

    //Getting value from App Component
    this.subHostInfo = this._eventEmitter.hostInfo.subscribe(
      data => {
        this.hostInfo = data;

        let hu = this.haveUpdate;
        hu = this.hostInfo.Updates["clusterAvailable"];

        if (hu != this.haveUpdate) {
          this.clusterInfo();
          //console.log('OperationMode: cluster-available: ', hu, this.haveUpdate);
        }
      },
    );

  }

  ngOnDestroy() {
    this.subHostInfo.unsubscribe();
  }

  connectToCluster(val: ClusterStr) {
    //console.log('OperationMode: connectToCluster: ', val);

    let input: dialogStr[] = [];
    if (val.Password) {
      input.push({Model: "", Name: "password", Type: "password", Title: "Password"});
    }

    let ret = this._util.openModal('Connect to ' + val.Name,
      'Are you sure you want to connect to this cluster?',
      'Yes', 'No', input);

    ret.afterClosed().subscribe(data => {
      if (data['button'] == 'YES') {
        if (val.Password &&
          (!data['input'][0]['Model'] ||
            data['input'][0]['Model'] == "")) {
          this.responseCo['Name'] = "error";
          this.responseCo['Status'] = "Please, type the cluster password...";
          return;
        }

        if (val.Password)
          val.Check = data['input'][0]['Model'];

        this.responseCo['Name'] = "info";
        this.responseCo['Status'] = "Request sent, wait ...";

        let serviceOpMode: ServiceOpModeStr = {
          NewOpMode: "NODE",
          Cluster: val,
        };
        //console.log('OperationMode: ServiceOpModeStr: ', serviceOpMode);

        this.host.request(serviceOpMode, 'setOpMode')
          .subscribe(data => {
            this.responseCo = data;

            if (this.responseCo['Name'] == "ok") {
              // Inform the App Root about new change in OpMode
              this._eventEmitter.setNewOpMode("NODE");
            }
          });
      }
    });

  }

  setRoute(val) {
    this.router.navigate([val])
  }

  clusterInfo() {
    let params: ParamStr[] = [];

    let request: RequestStr = {
      Request: "clusterAvailable",
      Param: params,
    };

    this.host.request(request, 'simpleRequest')
      .subscribe(data => {
        this.clusters = data;
        if (data)
          this.haveUpdate = this.clusters.length.toString();
        else
          this.haveUpdate = "0";

        //console.log('Cluster-Available: clusterInfo ', this.clusters, this.host.getSessionID());
      });
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
          //console.log(this.hostInfo);
        });
  }

  setOpMode(mode: string) {

    if (mode == this.hostInfo.OpMode)
      return;

    let input: dialogStr[] = [];

    if (mode == 'MASTER') {
      input.push({Model: "", Name: "clusterName", Type: "text",  Title: "Cluster Name"});
      input.push({Model: "", Name: "password", Type: "password", Title: "Password *(Optional)"});
    }

    let ret = this._util.openModal('Change Mode',
        'Did you change the host operation mode to ' + mode + ', confirm the request?',
        'Yes', 'No', input);

    ret.afterClosed().subscribe(data => {

      if (data && data['button'] == 'YES') {
        if (mode == 'MASTER' &&
            (!data['input'][0]['Model'] ||
                data['input'][0]['Model'] == "")) {
          this.responseOp['Name'] = "error";
          this.responseOp['Status'] = "Please, type a cluster name...";
          mode = this.hostInfo.OpMode;
          return;
        }

        if (mode == 'MASTER' &&
            data['input'][0]['Model'] && /[^\w]/.test(data['input'][0]['Model'])) {
          this.responseOp['Name'] = "error";
          this.responseOp['Status'] = "Spaces and special characters are not allowed. " +
              "Alphanumeric characters only.";
          mode = this.hostInfo.OpMode;
          return;
        }

        let cluster = {} as ClusterStr;
        cluster.Owner = this.host.getSessionID().Owner;

        if (data['input'][0] && data['input'][0]['Model'] != "")
          cluster.Name = data['input'][0]['Model'];

        if (data['input'][1] && data['input'][1]['Model'] != "")
          cluster.Password = data['input'][1]['Model'];

        let serviceOpMode: ServiceOpModeStr = {
          NewOpMode: mode,
          Cluster: cluster,
        };

        this.responseOp['Name'] = "info";
        this.responseOp['Status'] = "Request sent, wait ...";

        this.host.request(serviceOpMode, 'setOpMode')
            .subscribe(data => {
              this.responseOp = data;
              if (this.responseOp['Name'] == "ok") {
                // Inform the App Root about new change in OpMode
                this.host.killSessionID();
                this._eventEmitter.setNewOpMode(mode);
              }
            });
      } else {
        mode = this.hostInfo.OpMode;
      }
    });

  }

}

