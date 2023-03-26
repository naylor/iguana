import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HostService} from "../..//../../_services/host.service";
import {Router} from "@angular/router";
import {ParamStr, ResponseStr, UniversalDTOStr} from "../..//../../_model/service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {Observable} from "rxjs";
import {map, startWith} from 'rxjs/operators';
import {UsersStr} from "../../../../_model/users";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UtilControl} from "../../../../_control/util.control";

@Component({
  selector: 'class-app-users-join',
  templateUrl: './users-join.component.html',
  styleUrls: ['./users-join.component.css']
})
export class UsersClassroomJoinComponent implements OnInit {

  response = {} as ResponseStr;
  editForm: FormGroup;

  users: UsersStr[] = [];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  memberCtrl = new FormControl();
  filteredMembers: Observable<UsersStr[]>;
  members: UsersStr[] = [];
  membersDrop: UsersStr[] = [];

  IdClassroom: string;
  module: string;

  @ViewChild('memberInput', {static: false}) memberInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  constructor(
      private host: HostService,
      private formBuilder: FormBuilder,
      private router: Router,
      private _snackBar: MatSnackBar,
      private _util: UtilControl,
  ) {
    this.host.checkSessionID(this.constructor.name);
    this.filteredMembers = this.memberCtrl.valueChanges.pipe(
        startWith(null),
        map((member: string | null) => member ? this._filter(member) : this.users.slice()));
  }

  ngOnInit() {
    this.module = window.localStorage.getItem("ClassModule");

    if (this.host.getSessionID().Module != "Admin"
        && this.module != "Assistant"
        && this.module != "Lecturer") {
      this.router.navigate(['welcome']);
      return;
    }

    this.editForm = this.formBuilder.group({
      Id: [''],
      IdUser: [''],
      IdClassroom: [''],
      Name: [''],
    });

    this.IdClassroom = window.localStorage.getItem("ClassroomId");

    this.getUsers();
    this.getMembers();
  }

  setRoute(val) {
    this.router.navigate([val])
  }

  get f() {
    return this.editForm.controls;
  }

  add(member): void {
    // Add our member
    if (member && member.Id != 'undefined') {
      this.members.push(member);
      this.memberCtrl.setValue(null);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.members.push(event.option.value);
    this.memberInput.nativeElement.value = '';
    this.memberCtrl.setValue(null);
  }

  private _filter(value: string): UsersStr[] {
    let usersFiltered: UsersStr[] = [];

    if (value != "" && typeof(value) != 'object') {
      this.users.forEach(function (i) {
        if (i.Name.trim().toLowerCase().includes(value.toLowerCase(), -1)) {
          usersFiltered.push(i);
        }
      });
      return usersFiltered;
    }
  }

  onSubmit() {

    let temp = this.editForm;
    delete temp.controls['Name'];
    delete temp.controls['Id'];

    for (let index = 0; index < this.members.length; ++index) {
      temp.controls['IdUser'].setValue(this.members[index].Id);
      temp.controls['IdClassroom'].setValue(this.IdClassroom);

      let filter: ParamStr[] = [];
      let requestDB: UniversalDTOStr = {
        Operation: "update",
        TableData: temp.value,
        Custom: "ClassMembers",
        Filter: filter,
      };

      let res;
      this.host.request(requestDB, 'FDBRequest')
          .subscribe(data => {
            if (data) {
              res = data;
              if (res.Name == "ok" && parseInt(res.Status) > 0) {
                this.response.Name = "ok";
                this.response.Status = "Record updated successfully.";
                //console.log(res);
                this._util.setResponse(this.response['Status'], 'Go to Users',
                    this.response['Name'], 'view-user-classroom');

              }
              this.getMembers();
            }
          });
    }
  }


  getMembers() {
    let filter: ParamStr[] = [];

    filter.push({Name: 'IdClassroom', Value: this.IdClassroom});

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "users-classroom",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          if (data)
            this.members = data;
          //console.log("GroupsMembers | getMembers ", this.members, request);
        });
  }

  getUsers() {
    let filter: ParamStr[] = [];

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "users",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          this.users = data;

          //console.log("Users | dbList: ", data);
        });
  }
}
