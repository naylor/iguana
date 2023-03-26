import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthStr, ParamStr, ResponseStr, UniversalDTOStr} from "../_model/service";
import {HostService} from "../_services/host.service";
import {EventEmitterService} from "../_services/event-emitter.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import {ClassroomStr} from "../_model/classroom";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-menu-classroom',
    templateUrl: './menu-classroom.component.html',
    styleUrls: ['./menu-classroom.component.css']
})
export class MenuClassroomComponent implements OnInit {
    myGroup = new FormGroup({
        classroomControl: new FormControl('', [Validators.required])
    });

    userSession = {} as AuthStr;
    response = {} as ResponseStr;
    classroom: ClassroomStr[] = [];
    classroomList: ClassroomStr[] = [];

    classSelected = {} as ClassroomStr;
    userModule: string;
    onChangeClick = false;
    reload = 0;

    subClassroom: Subscription;
    subLogin: Subscription;

    constructor(
        private router: Router,
        private host: HostService,
        private _eventEmitter: EventEmitterService,
        private _snackBar: MatSnackBar,
    ) {
    }

    ngOnInit() {
        this.reload = 1;

        window.localStorage.removeItem("TryACode");

        this.userSession = this.host.getSessionID();
        if (this.userSession.Id) {
            this.getClassroom('1');
        }

        //Getting value from HostCredentials
        this.subLogin = this._eventEmitter.loginChange.subscribe(
            data => {
                this.userSession = this.host.getSessionID();
                if (data['Name'] == "stopSession") {
                    window.localStorage.removeItem("ClassroomId");
                    window.localStorage.removeItem("ClassModule");
                    this.classroom = {} as ClassroomStr[];
                    this.classroomList = {} as ClassroomStr[];
                    this.classSelected = {} as ClassroomStr;
                    this.userModule = "";
                }
                if (this.userSession.Id && data['Name'] == "startSession") {
                    this.getClassroom('1');
                }
            },
        );

        //Getting value from HostCredentials
        this.subClassroom = this._eventEmitter.classroom.subscribe(
            data => {
                if (!this.onChangeClick) {
                    this.getClassroom('1');
                    this.classSelected = data;
                    this.userModule = data['Module'];
                    //console.log("MenuClassroom-component|_eventEmitter", data);
                }
            },
        );

    }

    ngOnDestroy() {
        this.subLogin.unsubscribe();
        this.subClassroom.unsubscribe();
    }

    setRoute(val) {
        if (this.classSelected.Id)
            window.localStorage.setItem("ClassroomId", this.classSelected.Id.toString());
        this.router.navigate([val])
    }

    compareObjects(o1: any, o2: any): boolean {
        return o1.Id === o2.Id;
    }

    onChange() {
        if (this.classSelected) {
            this.getClassroom('0');

            window.localStorage.setItem("ClassroomId", this.classSelected.Id.toString());

            this.router.navigate(['view-classroom']);
            this.waitLoadComponent();
        }
    }

    async waitLoadComponent() {
        let waitLoad = 'N';
        let loop = true;
        while (loop) {
            await this.delay(100);
            waitLoad = window.localStorage.getItem("waitLoadComponent");
            if (waitLoad == 'S') {
                loop = false;
            }
        }
        this.onChangeClick = true;
        this._eventEmitter.setClassroom(this.classSelected);
        this.onChangeClick = false;
    }

    private delay(ms: number): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }

    getClassroom(list) {
        if (!this.userSession.Id)
            return

        let filter: ParamStr[] = [];
        let custom;
        if (this.userSession.Module == 'Admin')
            custom = "classroom-list-admin";

        if (this.userSession.Module != 'Admin') {
            filter.push({Name: "IdUser", Value: this.userSession.Id.toString()});
            filter.push({Name: "Enabled", Value: '1'});
            custom = "classroom-list";
        }

        let requestDB: UniversalDTOStr = {
            Operation: "view",
            TableData: null,
            Custom: custom,
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                if (data) {
                    this.classroom = data;

                    if (list == '1') {
                        this.classroomList = data;
                    }
                    if (this.reload) {
                        let classSel;
                        this.classroom.forEach(function (i) {
                            if (String(i.Id) == window.localStorage.getItem("ClassroomId"))
                                classSel = i;
                        });
                        if (classSel) {
                            this.classSelected = classSel;
                            this.userModule = classSel['Module'];
                            this._eventEmitter.setClassroom(this.classSelected);
                        }
                        this.reload = 0;
                    }
                }
            });
    }
}
