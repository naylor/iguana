import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HostService} from "../../_services/host.service";
import {NodeStr} from "../../_model/node";
import {ParamStr, RequestStr, ResponseStr} from "../../_model/service";
import {EventEmitterService} from "../../_services/event-emitter.service";
import {HostInfoStr} from "../../_model/hostInfo";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {UtilControl} from "../../_control/util.control";
import {ClusterStr} from "../../_model/cluster";

@Component({
    selector: 'app-current-nodes',
    templateUrl: './current-nodes.component.html',
    styleUrls: ['./current-nodes.component.css']
})
export class CurrentNodesComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    nodes: NodeStr[] = [];
    response = {} as ResponseStr;
    currentNumberOfNodes: number;

    haveUpdate: string = "";
    hostInfo = {} as HostInfoStr;

    subHostInfo: Subscription;

    vcpus = 0;

    constructor(
        private host: HostService,
        private formBuilder: FormBuilder,
        private router: Router,
        private _eventEmitter: EventEmitterService,
        public _util: UtilControl,
    ) {
        this.host.checkSessionID(this.constructor.name);
    }

    ngOnInit() {
        //Credentials
        if (!this.host.getSessionID().Id) {
            this.router.navigate(['welcome']);
            return;
        }

        this.getCurrentNodes();

        this.hostInfo.Cluster = {} as ClusterStr;
        this.getHostInfo();

        this.registerForm = this.formBuilder.group({
            srvNumber: ['',
                [Validators.required,
                    Validators.min(0),
                ]
            ],
        }, {});

        //Getting value from App Component
        this.subHostInfo = this._eventEmitter.hostInfo.subscribe(
            data => {
                this.hostInfo = data;

                let hu = this.haveUpdate;
                hu = this.hostInfo.Updates["activeNodes"];

                if (hu != this.haveUpdate) {
                    this.getCurrentNodes();
                    console.log('OperationMode: active-nodes: ', hu, this.haveUpdate);
                }
                //console.log('OperationMode: active-nodes: ', hu, this.haveUpdate);
            },
        );

    }

    ngOnDestroy() {
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        let num = this.registerForm.get('srvNumber').value;

        if (num > this.vcpus) {
            let ret = this._util.openModal('Change the Number of Nodes',
                'Attention, you are allocating more nodes than ' +
                'the total number of CPUs in the cluster. \n  ' +
                'Performance degradation may occur, confirm the request?',
                'Yes', 'No', '');

            ret.afterClosed().subscribe(data => {
                if (data && data['button'] == 'YES') {
                    this.setNodes(num - 1);
                    this.registerForm.disable();
                }
            });
        } else {
            this.setNodes(num - 1);
            this.registerForm.disable();
        }

    }

    setNodes(num) {
        let params: ParamStr[] = [];
        params.push({Name: "", Value: num.toString()});

        let request: RequestStr = {
            Request: "swarmAdd",
            Param: params,
        };

        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
                this.response = data;
                //console.log("CurrentNodes | simpleRequest: ", data);

                if (this.response['Name'] == "error") {
                    this.registerForm.enable();
                    this.f['srvNumber'].setErrors({'generic': this.response['Status']});
                    return;
                }

                this.managerStatus('getCurrentNodes', this.registerForm.get('srvNumber').value);
            });
    }

    setRoute(val) {
        this.router.navigate([val])
    }

    getCurrentNodes() {
        let params: ParamStr[] = [];

        let request: RequestStr = {
            Request: "activeNodes",
            Param: params,
        };
        //console.log("CurrentNodes | request: ", request);

        let vcpus = 0;

        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
                this.nodes = data;

                let n = 0;
                let h = 0;
                let host = "";
                if (this.nodes) {
                    this.nodes.forEach(function (v, k) {
                        if (v['NumberOfCPUs'])
                            vcpus += parseInt(v['NumberOfCPUs']);

                        if (v.Hostname != host) {
                            host = v.Hostname;
                            h++;
                        }

                        if (v.Container) {
                            v.Container.forEach(function (v1, k1) {
                                n++;
                                h++;
                            });
                        }
                    });
                    this.haveUpdate = h.toString();
                } else {
                    this.haveUpdate = "0";
                }

                this.f['srvNumber'].setValue(n);
                this.currentNumberOfNodes = n;
                this.vcpus = vcpus;
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

    async managerStatus(funcName: string, desireRet: number) {
        let wait_ret = true;
        let n = "";
        while (wait_ret) {
            await this._util.delay(5000);
            if (funcName != '') {
                n = this[funcName]();
            }

            if (this.currentNumberOfNodes == desireRet) {
                this.response['Name'] = 'ok';
                this.response['Status'] = 'Request completed successfully.';
                this.registerForm.enable();
                wait_ret = false;
            }
        }
    }

}
