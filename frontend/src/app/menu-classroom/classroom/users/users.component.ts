import {Component, OnInit, ViewChild} from '@angular/core';
import {HostService} from "../../../_services/host.service";
import {Router} from "@angular/router";
import {UsersStr} from "../../../_model/users";
import {EventEmitterService} from "../../../_services/event-emitter.service";
import {ResponseStr, ParamStr, UniversalDTOStr, AuthStr} from "../../../_model/service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatSnackBar} from "@angular/material/snack-bar";
import {UtilControl} from "../../../_control/util.control";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersClassroomComponent implements OnInit {
  displayedColumns = ['Id', 'Name', 'Email', 'Module', 'Action'];
  dataSource: MatTableDataSource<UsersStr>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  users: UsersStr[] = [];
  response = {} as ResponseStr;
  userSession = {} as AuthStr;

  IdClassroom: string;

  module: string;

  load = 0;

  constructor(
    private host: HostService,
    private router: Router,
    private _eventEmitter: EventEmitterService,
    public _util: UtilControl,
    private _snackBar: MatSnackBar,
  ){
    this.host.checkSessionID(this.constructor.name);
  }

  ngAfterViewInit() {
    this.getUsers();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.IdClassroom = window.localStorage.getItem("ClassroomId");
    //console.log(this.IdClassroom);

    this.module = window.localStorage.getItem("ClassModule");

    //Credentials
    if (this.host.getSessionID().Module == "User" &&
        this.module != "Assistant" && this.module != "Lecturer" ) {
      window.localStorage.setItem("editUserId", String(this.host.getSessionID().Id));
      this.router.navigate(['edit-user']);
      return;
    }

    if (this.host.getSessionID().Module != "Admin"
        && this.module != "Assistant"
        && this.module != "Lecturer") {
      this.router.navigate(['welcome']);
      return;
    }

    this.userSession = this.host.getSessionID();

  }

  addUser(): void {
    window.localStorage.removeItem("editUserClassroomId");
    this.router.navigate(['add-user-classroom']);
  };

  joinUser(): void {
    window.localStorage.setItem("ClassroomId", this.IdClassroom.toString());
    this.router.navigate(['add-join-classroom']);
  };

  editUser(user: UsersStr): void {
      window.localStorage.setItem("editUserClassroomId", user.Id.toString());
      this.router.navigate(['edit-user-classroom']);
  };

  deleteUser(user: UsersStr): void {
    let ret = this._util.openModal('Remove User: ' + user.Name,
      'Confirm remove the user from the classroom?',
      'Yes', 'No', '');

    ret.afterClosed().subscribe(data => {

      if (data['button'] == 'YES') {

        let filter: ParamStr[] = [];
        filter.push({Name: "IdUser", Value: user.Id.toString()});
        filter.push({Name: "IdClassroom", Value: this.IdClassroom});

        let requestDB: UniversalDTOStr = {
          Operation: "drop",
          TableData: null,
          Custom: "classMembers",
          Filter : filter,
        };

        this.host.request(requestDB, 'FDBRequest')
          .subscribe(data => {
            this.response = data;

            this._util.setResponse(this.response['Status'], this.response['Name'], null, null);

            if (this.response['Name'] == "ok") {
              this.getUsers()
            }
          });
      }
    });
  }

  getUsers() {
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
        this.users = data;
        if (this.users) {
          // Assign the data to the data source for the table to render
          this.dataSource = new MatTableDataSource(this.users);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
            delete this.dataSource;
        }

        this.load = 1;
        //console.log("Users | dbList: ", data);
      });
  }

}
