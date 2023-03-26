import {Component, OnInit, ViewChild} from '@angular/core';
import {HostService} from "../../_services/host.service";
import {Router} from "@angular/router";
import {ClassroomStr} from "../../_model/classroom";
import {EventEmitterService} from "../../_services/event-emitter.service";
import {ResponseStr, ParamStr, UniversalDTOStr, AuthStr} from "../../_model/service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatSnackBar} from "@angular/material/snack-bar";
import {UtilControl} from "../../_control/util.control";

@Component({
  selector: 'app-classroom-manager',
  templateUrl: './classroom-manager.component.html',
  styleUrls: ['./classroom-manager.component.css']
})

export class ClassroomManagerComponent implements OnInit {
  displayedColumns = ['Id', 'Owner', 'Name',
    'MaxStudents', 'Enabled', 'KeyAccess', 'Action'];
  dataSource: MatTableDataSource<ClassroomStr>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  classroom: ClassroomStr[] = [];
  response = {} as ResponseStr;
  userSession = {} as AuthStr;

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
    this.getClassroom();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
     this.userSession = this.host.getSessionID();

  }

  addClassroom(): void {
    window.localStorage.removeItem("editClassroomId");
    this.router.navigate(['add-classroom-manager']);
  };

  editClassroom(classroom: ClassroomStr): void {
      window.localStorage.setItem("editClassroomId", classroom.Id.toString());
      this.router.navigate(['edit-classroom-manager']);
  };

  deleteClassroom(classroom: ClassroomStr): void {
    let ret = this._util.openModal('Delete Classroom: ' + classroom.Name,
      'Confirm to delete the classroom?',
      'Yes', 'No', '');

    ret.afterClosed().subscribe(data => {

      if (data['button'] == 'YES') {

        let filter: ParamStr[] = [];
        filter.push({Name: "Id", Value: classroom.Id.toString()});

        let requestDB: UniversalDTOStr = {
          Operation: "drop",
          TableData: null,
          Custom: "classroom",
          Filter : filter,
        };

        this.host.request(requestDB, 'FDBRequest')
          .subscribe(data => {
            this.response = data;
            //console.log("Classroom | dbList: ", this.response);

            this._util.setResponse(this.response['Status'], this.response['Name'], null, null);

            if (this.response['Name'] == "ok") {
              this.getClassroom()

              let n = {} as ClassroomStr;
              this._eventEmitter.setClassroom(n);
            }
          });
      }
    });
  }

  getClassroom() {
    let filter: ParamStr[] = [];

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "classroom-list-admin",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
      .subscribe( data => {
        this.classroom = data;
        if (this.classroom) {
          // Assign the data to the data source for the table to render
          this.dataSource = new MatTableDataSource(this.classroom);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } else {
            delete this.dataSource;
        }

        this.load = 1;
        //console.log("Classroom | dbList: ", data);
      });
  }

}
