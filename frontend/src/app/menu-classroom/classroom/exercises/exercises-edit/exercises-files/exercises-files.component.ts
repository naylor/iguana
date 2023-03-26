import {Component, ElementRef, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {HostService} from "../../../../../_services/host.service";
import {Router} from "@angular/router";
import {ParamStr, ResponseStr, UniversalDTOStr} from "../../../../../_model/service";
import {EventEmitterService} from "../../../../../_services/event-emitter.service";
import {ExerciseFilesStr} from "../../../../../_model/exercises";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {UtilControl} from "../../../../../_control/util.control";

@Component({
    selector: 'exercises-app-files',
    templateUrl: './exercises-files.component.html',
    styleUrls: ['./exercises-files.component.css']
})
@Injectable({
    providedIn: 'root'
})
export class ExercisesFilesComponent implements OnInit {
    @Input('exerciseId') exerciseId: Number;

    // @ts-ignore
    @ViewChild('inputFile')
    inputFile: ElementRef;

    displayedColumns = ['Id', 'Name', 'Size', 'Action'];
    dataSource: MatTableDataSource<ExerciseFilesStr>;
    // @ts-ignore
    @ViewChild(MatSort) sort: MatSort;

    // @ts-ignore
    @ViewChild('selectfile') el:ElementRef;   //in html we make variable of selectfile
    progress = { loaded : 0 , total : 0 };

    response = {} as ResponseStr;
    exerciseFiles = {} as ExerciseFilesStr;

    files: ExerciseFilesStr[] = [];

    load = 0;

    constructor(
        private host: HostService,
        private router: Router,
        private _eventEmitter: EventEmitterService,
        public _util: UtilControl,
    ){
        this.host.checkSessionID(this.constructor.name);
    }

    ngOnInit() {
        if (this.exerciseId)
            this.getFiles();
    }

    setRoute(val) {
        this.router.navigate([val])
    }

    download(file: ExerciseFilesStr) {
        //console.log(file);
        this.host.downloadFileData(file, 'ExerciseFiles');
    }

    delete(file: ExerciseFilesStr): void {

        let filter: ParamStr[] = [];

        filter.push({Name: "Id", Value: file.Id.toString()});

        let requestDB: UniversalDTOStr = {
            Operation: "drop",
            TableData: null,
            Custom: "exercises-files",
            Filter : filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                this.response = data;

                this._util.setResponse(this.response['Status'], this.response['Name'],
                    null, null);

                this.getFiles();
            });
    }

    uploadFile() {
        this.response = {} as ResponseStr;

        var filedata = this.el.nativeElement.files[0];

        let param = {} as ParamStr;
        param.Name = "Exercise";
        param.Value = this.exerciseId.toString();

        this.host.uploadFileData(filedata, param)
            .subscribe(
                (data: any) => {
                    if (data.type == 1 && data.loaded && data.total) {
                        this.progress.loaded = data.loaded;
                        this.progress.total = data.total;
                    } else if (data.body) {
                        //console.log("Data Uploaded");
                        //console.log(data.body);
                        this.response = data.body;

                        if (data['body']['Name'] == "ok")
                            this.response['Status'] = "File inserted successfully."

                        this._util.setResponse(this.response['Status'], data['body']['Name'],
                            null, null);

                        this.inputFile.nativeElement.value = "";
                        this.getFiles();
                        this.load = 0;
                    }
                },
                error => console.log(error)
            )
    }

    getFiles() {
        let filter: ParamStr[] = [];
        filter.push({Name: "Id", Value: this.exerciseId.toString()});

        let requestDB: UniversalDTOStr = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-files",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe( data => {
                //console.log(requestDB, this.files);
                this.files = data;
                this.dataSource = new MatTableDataSource(this.files);
                if (this.files)
                    this.dataSource.sort = this.sort;

                this.load = 1;
                this.progress = { loaded : 0 , total : 0 };
            });
    }
}
