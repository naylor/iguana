import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HostService} from "../../../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../../../_services/event-emitter.service";
import {ParamStr, ResponseStr, UniversalDTOStr} from "../../../../_model/service";
import {GroupsStr} from "../../../../_model/groups";
import {UtilControl} from "../../../../_control/util.control";

@Component({
  selector: 'groups-app-edit',
  templateUrl: './groups-edit.component.html',
  styleUrls: ['./groups-edit.component.css']
})
export class GroupsEditComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  response = {} as ResponseStr;
  group: GroupsStr;

  groupId: number;
  IdClassroom: number;
  module: string;

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
    this.module = window.localStorage.getItem("ClassModule");

    //Credentials
    if (this.host.getSessionID().Module != "Admin"
        && this.module != "Assistant"
        && this.module != "Lecturer") {
      this.router.navigate(['welcome']);
      return;
    }

    this.registerForm = this.formBuilder.group({
      Name: ['',
        [Validators.required,
          Validators.minLength(4),
          Validators.maxLength(60),
        ]
      ],
      KeyAccess: ['',
        [Validators.maxLength(60),
        ]
      ],
      Description: ['', []],
      Id: ['', []],
      IdClassroom: ['', []],
    }, {});

    this.groupId = Number(window.localStorage.getItem("editGroupId"));
    this.IdClassroom = Number(window.localStorage.getItem("ClassroomId"));

    if (this.groupId)
      this.getGroups(this.groupId);
  }

  get fe() {
    return this.registerForm.controls;
  }

  getGroups(groupId) {

    let filter: ParamStr[] = [];
    filter.push({Name: "Id", Value: String(groupId)});

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "groups-edit",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe(data => {
          delete data[0]['mCount'];
          this.registerForm.setValue(data[0]);
          //console.log("Groups Edit | dbList: ", data, requestDB);
        });
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

    let temp = this.registerForm.value;
    temp['IdClassroom'] = this.IdClassroom;

    let filter: ParamStr[] = [];
    let requestDB: UniversalDTOStr = {
      Operation: "update",
      TableData: temp,
      Custom: "Groups",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe(data => {
          this.response = data;

          if (this.response.Name == "ok" && !this.groupId)
            this.response.Status = "Record inserted successfully.";

          if (this.response.Name == "ok" && this.groupId)
            this.response.Status = "Record updated successfully.";

          this._util.setResponse(this.response['Status'], 'Go to Groups',
              this.response['Name'],'view-group');

          //console.log("Groups onSubmit | edit: ", this.editForm.value);
        });
  }

}
