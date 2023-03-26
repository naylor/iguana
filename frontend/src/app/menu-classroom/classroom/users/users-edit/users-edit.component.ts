import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HostService} from "../../../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../../../_services/event-emitter.service";
import {AuthStr, ParamStr, ResponseStr, UniversalDTOStr} from "../../../../_model/service";
import {ClassMembersStr} from "../../../../_model/classroom";
import {UtilControl} from "../../../../_control/util.control";

@Component({
    selector: 'users-app-edit',
    templateUrl: './users-edit.component.html',
    styleUrls: ['./users-edit.component.css']
})
export class UsersClassroomEditComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;

    response = {} as ResponseStr;
    userSession = {} as AuthStr;
    members = {} as ClassMembersStr;

    IdClassroom: number;
    module: string;
    userId: number;
    Id: number;

    disabled: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private host: HostService,
        private router: Router,
        private _eventEmitter: EventEmitterService,
        private _util: UtilControl,
    ) {
        this.host.checkSessionID(this.constructor.name);
    }

    ngOnInit() {

        this.registerForm = this.formBuilder.group({
            Name: ['',
                [Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(60),
                ]
            ],
            Password: ['',
                [,
                    Validators.minLength(4),
                    Validators.maxLength(50),
                ]
            ],
            CPassword: ['',
                [,
                    Validators.minLength(4),
                    Validators.maxLength(50),
                ]
            ],
            Email: ['',
                [Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(100),
                    Validators.email
                ]
            ],
            Module: ['Student', []],
            ForceChangePass: ['0', []],
            Id: ['', []],
        }, {validator: this.checkPassword});

        this.IdClassroom = Number(window.localStorage.getItem("ClassroomId"));
        this.module = window.localStorage.getItem("ClassModule");

        this.userSession = this.host.getSessionID();

        //Getting Credentials
        if (this.host.getSessionID().Module != "Admin"
            && this.module != "Assistant"
            && this.module != "Lecturer") {
            this.router.navigate(['welcome']);
            return;
        }

        this.userId = Number(window.localStorage.getItem("editUserClassroomId"));

        if (this.userId && this.IdClassroom)
            this.getUsers(this.userId, this.IdClassroom);

    }

    checkPassword(control: AbstractControl) {
        if (control.get('Password').value != control.get('CPassword').value) {
            control.get('CPassword').setErrors({
                mismatch: true
            });
        }
        return false;
    }

    get fe() {
        return this.registerForm.controls;
    }

    getUsers(userId, IdClassroom) {
        let filter: ParamStr[] = [];

        if (userId && IdClassroom) {
            filter.push({Name: 'Id', Value: String(userId)});
            filter.push({Name: 'IdClassroom', Value: String(IdClassroom)});

            let requestDB: UniversalDTOStr = {
                Operation: "view",
                TableData: null,
                Custom: "users-classroom-edit",
                Filter: filter,
            };

            this.host.request(requestDB, 'FDBRequest')
                .subscribe(data => {

                    if (data[0]) {
                        this.Id = data[0]['IdCM'];
                        delete (data[0]['IdCM']);
                        data[0]['CPassword'] = "";
                        data[0]['Password'] = "";

                        this.registerForm.setValue(data[0]);
                    }

                });
        }
    }

    setRoute(val) {
        this.router.navigate([val])
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.registerForm.disable();
        this.disabled = true;

        let temp = this.registerForm.value;
        delete temp['CPassword'];
        delete temp['Owner'];

        let m = temp['Module'];
        temp['Module'] = "User";

        if (temp['Password'] == "")
            delete (temp['Password']);

        let filter: ParamStr[] = [];
        let requestDB: UniversalDTOStr = {
            Operation: "update",
            TableData: temp,
            Custom: "Users",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                this.response = data;

                if (this.response.Name == "ok" || this.response.Name == "info") {
                    this.insertMember(parseInt(this.response.Status), m);
                    this.response.Status = "Record inserted successfully.";
                    this.response.Name = "ok";
                } else {
                    this.registerForm.enable();
                    this.disabled = true;
                }

                this._util.setResponse(this.response.Status, 'Go to Users',
                    this.response['Name'], 'view-user-classroom');

                //console.log("requestDB | this.response ", requestDB, this.response);
            });
    }


    insertMember(Id, m) {
        this.members.IdUser = Number(this.userId);

        if (!this.userId)
            this.members.IdUser = Id;

        this.members.IdClassroom = Number(this.IdClassroom);
        this.members.Module = m;
        this.members.Id = this.Id;

        let filter: ParamStr[] = [];
        let requestDB: UniversalDTOStr = {
            Operation: "update",
            TableData: this.members,
            Custom: "ClassMembers",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                this.response = data;

                if (this.response.Name != "ok" && this.response.Name != "info") {

                    this._util.setResponse(this.response.Status, 'Go to Users',
                        this.response['Name'], 'view-user-classroom');

                }
            });

        //console.log("requestDB | this.response ", requestDB, this.response);
        this.getUsers(this.userId, this.IdClassroom);
        this.registerForm.enable();
        this.disabled = false;
    }
}
