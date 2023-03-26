import {Component, OnInit, ViewChild} from '@angular/core';
import {HostService} from "../../../_services/host.service";
import {Router} from "@angular/router";
import {GroupsStr} from "../../../_model/groups";
import {EventEmitterService} from "../../../_services/event-emitter.service";
import {ResponseStr, ParamStr, UniversalDTOStr} from "../../../_model/service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {UtilControl} from "../../../_control/util.control";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  displayedColumns = ['Id', 'Name', 'KeyAccess', 'Action'];

  dataSource: MatTableDataSource<GroupsStr>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  groups: GroupsStr[] = [];
  response = {} as ResponseStr;

  load = 0;

  IdClassroom: string;
  module: string;

  constructor(
    private host: HostService,
    private router: Router,
    private _eventEmitter: EventEmitterService,
    public _util: UtilControl,
  ) {
    this.host.checkSessionID(this.constructor.name);
  }

  ngAfterViewInit() {
    this.getGroups();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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

    this.IdClassroom = window.localStorage.getItem("ClassroomId");
  }

  addGroup(): void {
    window.localStorage.removeItem("editGroupId");
    this.router.navigate(['add-group']);
  };

  addMembers(group: GroupsStr): void {
    window.localStorage.setItem("editGroupId", group.Id.toString());
    window.localStorage.setItem("groupName", group.Name);
    this.router.navigate(['add-members']);
  };

  editGroup(group: GroupsStr): void {
    window.localStorage.setItem("editGroupId", group.Id.toString());
    this.router.navigate(['edit-group']);
  };

  deleteGroup(group: GroupsStr): void {
    let ret = this._util.openModal('Delete Group: ' + group.Name,
      'Confirm to delete the group?',
      'Yes', 'No', '');

    ret.afterClosed().subscribe(data => {

      if (data['button'] == 'YES') {

        let filter: ParamStr[] = [];
        filter.push({Name: "Id", Value: group.Id.toString()});

        let requestDB: UniversalDTOStr = {
          Operation: "drop",
          TableData: null,
          Custom: "groups",
          Filter : filter,
        };

        this.host.request(requestDB, 'FDBRequest')
          .subscribe(data => {
            this.response = data;

            this._util.setResponse(this.response['Status'], this.response['Name'],null, null);

            if (this.response['Name'] == "ok") {
              this.getGroups();
            }
          });
      }
    });
  }

  getGroups() {
    let filter: ParamStr[] = [];
    filter.push({Name: 'IdClassroom', Value: this.IdClassroom});

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "groups",
      Filter: filter,
    };

    let gTemp: GroupsStr[] = [];

    this.host.request(requestDB, 'FDBRequest')
      .subscribe( data => {
        this.groups = data;
        if (this.groups) {
          //console.log("Groups | dbList: ", data);
          this.dataSource = new MatTableDataSource(this.groups);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
          delete this.dataSource;
        }

        this.load = 1;
      });
  }

}
