import {Component, OnInit, ViewChild} from '@angular/core';
import {ExercisesStr} from "../../../_model/exercises";
import {AuthStr, ParamStr, ResponseStr, UniversalDTOStr} from "../../../_model/service";
import {HostService} from "../../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../../_services/event-emitter.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {dialogStr} from "../../../_model/dialog";
import {UtilControl} from "../../../_control/util.control";

@Component({
    selector: 'app-exercises',
    templateUrl: './exercises.component.html',
    styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
    cAdmin = ['Id', 'Title', 'MaxSubmissions', 'Date', 'ExecTime', 'CheckCount', 'Answers', 'Action'];
    cUser = ['Id', 'Title', 'MaxSubmissions', 'Date', 'ExecTime', 'CheckCount', 'Answers'];
    displayedColumns;

    dataSource: MatTableDataSource<ExercisesStr>;
    // @ts-ignore
    @ViewChild(MatPaginator) paginator: MatPaginator;
    // @ts-ignore
    @ViewChild(MatSort) sort: MatSort;

    exercises: ExercisesStr[] = [];
    response = {} as ResponseStr;

    exerciseCount: number;

    IdClassroom: string;
    module: string;

    userSession = {} as AuthStr;

    load = 0;

    constructor(
        private host: HostService,
        private router: Router,
        private _eventEmitter: EventEmitterService,
        public _util: UtilControl,
    ) {
        this.host.checkSessionID(this.constructor.name);
    }

    ngAfterViewInit() {
        this.getExercises();
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    ngOnInit() {

        this.userSession = this.host.getSessionID();

        window.localStorage.removeItem("TryACode");

        this.module = window.localStorage.getItem("ClassModule");

        if (this.userSession.Module == 'Admin'
            || this.module == "Lecturer"
            || this.module == "Assistant")
            this.displayedColumns = this.cAdmin;
        else
            this.displayedColumns = this.cUser;

        this.IdClassroom = window.localStorage.getItem("ClassroomId");
    }

    addExercise(): void {
        window.localStorage.removeItem("ExerciseId");
        this.router.navigate(['add-exercise']);
    };

    viewAnswer(exercise: ExercisesStr, IsExpired: string): void {
        window.localStorage.setItem("ExerciseId", exercise.Id.toString());
        this.router.navigate(['view-answer']);
    };

    editExercise(exercise: ExercisesStr): void {
        window.localStorage.setItem("ExerciseId", exercise.Id.toString());
        this.router.navigate(['edit-exercise']);
    };


    setKey() {
        let input: dialogStr[] = [];

        input.push({Model: '', Name: "key", Type: "text", Title: "Key"});

        let ret = this._util.openModal('Exercise Key',
            'Please enter the key: ',
            'Yes', 'No', input);

        ret.afterClosed().subscribe(data => {

            if (data && data['button'] == 'YES') {
                let key;
                if (data['input'][0] && data['input'][0]['Model'] != "")
                    key = data['input'][0]['Model'];

                let filter: ParamStr[] = [];
                filter.push({Name: 'IdUser', Value: String(this.userSession.Id)});
                filter.push({Name: 'KeyAccess', Value: key});
                filter.push({Name: 'IdClassroom', Value: this.IdClassroom});

                let requestDB: UniversalDTOStr = {
                    Operation: "groupKey",
                    TableData: null,
                    Custom: "",
                    Filter: filter,
                };

                this.host.request(requestDB, 'FDBRequest')
                    .subscribe(data => {
                        if (data) {
                          this._util.setResponse(data['Status'], data['Name'], null, null);
                            this.getExercises();
                        }
                    });
            }
        });
    }

    deleteExercise(exercise: ExercisesStr): void {
        let ret = this._util.openModal('Delete Exercise: ' + exercise.Title,
            'Confirm to delete the exercise?',
            'Yes', 'No', '');

        ret.afterClosed().subscribe(data => {

            if (data['button'] == 'YES') {

                let filter: ParamStr[] = [];
                filter.push({Name: "Id", Value: exercise.Id.toString()});

                let requestDB: UniversalDTOStr = {
                    Operation: "drop",
                    TableData: null,
                    Custom: "exercises",
                    Filter: filter,
                };

                this.host.request(requestDB, 'FDBRequest')
                    .subscribe(data => {
                        this.response = data;

                        this._util.setResponse(this.response['Status'], this.response['Name'], null, null);

                        if (this.response['Name'] == "ok") {
                            this.getExercises();
                        }
                    });
            }
        });
    }

    showList(list: string): void {
        let ret = this._util.openModal('Code Analysis by Clang-Tidy',
            list,
            'Close', '', '');
    }

    getExercises() {
        let filter: ParamStr[] = [];
        filter.push({Name: "User", Value: String(this.userSession.Id)});
        filter.push({Name: 'IdClassroom', Value: this.IdClassroom});

        let requestDB: UniversalDTOStr;

        if (this.userSession.Module == "User") {
            requestDB = {
                Operation: "view",
                TableData: null,
                Custom: "exercises-user",
                Filter: filter,
            };
        }

        if (this.userSession.Module == "Admin"
            || this.module == "Lecturer"
            || this.module == "Assistant") {
            requestDB = {
                Operation: "view",
                TableData: null,
                Custom: "exercises-admin",
                Filter: filter,
            };
        }

        let gTemp: ExercisesStr[] = [];

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                if (data) {
                    this.exercises = data;
                    if (this.exercises) {
                        this.dataSource = new MatTableDataSource(this.exercises);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                    } else {
                        delete this.dataSource;
                    }
                }

                this.load = 1;
            });
    }

}

