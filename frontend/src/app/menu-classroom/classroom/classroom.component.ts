import {Component, OnInit} from '@angular/core';
import {ClassMembersStr, ClassroomStr} from "../../_model/classroom";
import {AuthStr, ParamStr, ResponseStr, UniversalDTOStr} from "../../_model/service";
import {HostService} from "../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../_services/event-emitter.service";
import {UsersStr} from "../../_model/users";
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtilControl} from "../../_control/util.control";

@Component({
    selector: 'app-classroom',
    templateUrl: './classroom.component.html',
    styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

    registerForm: FormGroup;

    response = {} as ResponseStr;
    classroom = {} as ClassroomStr;
    userSession = {} as AuthStr;
    users: UsersStr[] = [];

    classroomModule: string;

    submitted = false;

    loadM = 0;
    loadC = 0;
    notSel = 1;
    subClassroom: Subscription;

    constructor(
        private host: HostService,
        private router: Router,
        private _eventEmitter: EventEmitterService,
        public _util: UtilControl,
        private formBuilder: FormBuilder,
    ){
        this.host.checkSessionID(this.constructor.name);
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            KeyAccess: ['',
                [,
                    Validators.maxLength(60),
                ]
            ],
        }, {});

        window.localStorage.removeItem("TryACode");
        window.localStorage.setItem('waitLoadComponent', 'S');

        this.subClassroom = this._eventEmitter.classroom.subscribe(
            data => {
                this.notSel = 0;
                this.userSession = this.host.getSessionID();
                if (data && this.userSession.Id) {
                    this.classroom = data;
                    this.classroomModule = data['Module'];

                    this.loadC = 1;

                    if (this.classroom.IdUser == Number(this.userSession.Id))
                        window.localStorage.setItem("ClassModule", "Lecturer");

                    this.getUsers();
                    //console.log("Classroom-component|_eventEmitter");
                }
            },
        );

        this.notSel = 1;
    }

    ngOnDestroy() {
        this.subClassroom.unsubscribe();
    }

    editClassroom(): void {
        window.localStorage.setItem("ClassroomId", this.classroom.Id.toString());
        this.router.navigate(['edit-classroom']);
    };

    disableClassroom(): void {
        let option = this.classroom.Enabled;

        let op;
        if (!option)
            op = 'enable';
        else
            op = 'disable';

        //console.log(this.classroom);

        let ret = this._util.openModal('Classroom: ' + this.classroom.Name,
            'Confirm ' + op + ' the classroom?',
            'Yes', 'No', '');

        ret.afterClosed().subscribe(data => {

            if (data['button'] == 'YES') {

                if (!option)
                    this.classroom.Enabled = 1;
                else
                    this.classroom.Enabled = 0;

                delete this.classroom['Owner'];

                let filter: ParamStr[] = [];
                let requestDB: UniversalDTOStr = {
                    Operation: "update",
                    TableData: this.classroom,
                    Custom: "Classroom",
                    Filter: filter,
                };

                this.host.request(requestDB, 'FDBRequest')
                    .subscribe(data => {
                        this.response = data;

                        if (this.classroom.Id && this.response.Name == "ok") {
                            this.response.Status = "Record updated successfully.";
                        }
                        this._util.setResponse(this.response.Status, this.response.Name, null, null);

                    });
            }
        });
    }

    get fe() {
        return this.registerForm.controls;
    }

    onSubmit() {

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.submitted = true;

        if (this.classroom.KeyAccess != this.fe['KeyAccess'].value) {
            this._util.setResponse('Invalid Key!', 'Error', 'error', null);
            return;
        }

        let c = {'IdClassroom': this.classroom.Id, IdUser: this.userSession.Id, Module: 'Student'};

        let filter: ParamStr[] = [];
        let requestDB: UniversalDTOStr = {
            Operation: "update",
            TableData: c,
            Custom: "ClassMembers",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                this.response = data;

                if (this.response.Name == "ok") {
                    this.response.Status = "Record inserted successfully.";

                    this._eventEmitter.setClassroom(this.classroom);
                    this.classroom['Module'] = "Student";
                    this.classroomModule = "Student";
                }

                this._util.setResponse(this.response.Status, 'Welcome!',
                    this.response.Name, 'view-classroom-manager');

            });
    }

    getUsers() {
        let filter: ParamStr[] = [];
        filter.push({Name: 'Id', Value: String(this.classroom.Id)});

        let requestDB: UniversalDTOStr = {
            Operation: "view",
            TableData: null,
            Custom: "users-classroom",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                if (data) {
                    this.users = data;
                    data.forEach(u => {
                        if (u.Id == this.host.getSessionID().Id &&
                            (u.Module == 'Lecturer' || u.Module == 'Assistant')) {
                            window.localStorage.setItem("ClassModule", u.Module);
                        }
                    });
                    }
                this.loadM = 1;
            });
    }

}

