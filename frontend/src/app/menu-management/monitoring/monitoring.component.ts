import {Component, OnInit, ViewChild} from '@angular/core';
import {HostInfoStr} from "../../_model/hostInfo";
import {HostService} from "../../_services/host.service";
import {ParamStr, RequestStr} from "../../_model/service";
import {EventEmitterService} from "../../_services/event-emitter.service";
import {QueueStr} from "../../_model/code";
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'app-monitoring',
    templateUrl: './monitoring.component.html',
    styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {
    displayedColumns = ['User', 'Position', 'Queue', 'Command', 'Time'];

    hosts: HostInfoStr[] = [];
    hostInfo = {} as HostInfoStr;
    haveUpdate: string = "";
    queues: QueueStr[] = [];

    subHostInfo: Subscription;

    dataSource: MatTableDataSource<QueueStr>;
    // @ts-ignore
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private host: HostService,
        private router: Router,
        private _eventEmitter: EventEmitterService,
    ){
        this.host.checkSessionID(this.constructor.name);
    }

    ngOnInit() {
        this.getFrontendInfo();

        //Getting value from App Component
        this.subHostInfo = this._eventEmitter.hostInfo.subscribe(
            data => {
                this.hostInfo = data;

                if (this.hostInfo.Updates["activeQueues"] || this.queues)
                    this.getActiveQueues()

                if (this.hostInfo.Updates["activeFrontends"]) {
                    let hu = this.haveUpdate;
                    hu = this.hostInfo.Updates["activeFrontends"];

                    if (hu != this.haveUpdate) {
                        this.getFrontendInfo();
                        //console.log('OperationMode: monitoring: ', hu, this.haveUpdate);
                    }
                    //console.log('OperationMode: monitoring: ', hu, this.haveUpdate);
                }
            },
        );
    }

    ngOnDestroy() {
        this.subHostInfo.unsubscribe();
    }

    getFrontendInfo() {
        let params: ParamStr[] = [];

        let request: RequestStr = {
            Request: "activeFrontends",
            Param: params,
        };

        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
                this.hosts = data;
                if (this.hosts) {
                    this.haveUpdate = this.hosts.length.toString();
                    //console.log('Queues: hu haveUpdate: ', this.hosts);
                } else {
                    this.haveUpdate = "0";
                }
            });
    }

    getActiveQueues() {
        let params: ParamStr[] = [];

        let request: RequestStr = {
            Request: "activeQueues",
            Param: params,
        };

        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
                this.queues = data;
                if (this.queues) {
                    this.dataSource = new MatTableDataSource(this.queues);
                    this.dataSource.sort = this.sort;
                } else {
                    delete this.dataSource;
                }
            });

        //console.log('Queues: hu haveUpdate: ', this.queues, this.haveUpdate);
    }

}
