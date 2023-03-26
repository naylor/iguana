import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HostService} from "../../../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../../../_services/event-emitter.service";
import {AuthStr, ParamStr, ResponseStr, UniversalDTOStr} from "../../../../_model/service";
import {ExercisesStr} from "../../../../_model/exercises";
import {CodeEmitterStr} from "../../../../_model/code";
import ClassicEditor from '@haifahrul/ckeditor5-build-rich';
import {NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";
import {Subscription} from "rxjs";
import {UtilControl} from "../../../../_control/util.control";

@Component({
    selector: 'exercises-app-edit',
    templateUrl: './exercises-edit.component.html',
    styleUrls: ['./exercises-edit.component.css']
})
export class ExercisesEditComponent implements OnInit {
    public Editor = ClassicEditor;

    config = {
        toolbar: {
            items: [
                'heading', '|',
                'alignment', '|',
                'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                'link', '|',
                'bulletedList', 'numberedList', 'todoList',
                '-', // break point
                'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|',
                'code', 'codeBlock', '|',
                'Smiley', 'insertTable', '|',
                'outdent', 'indent', '|',
                'uploadImage', 'blockQuote', '|',
                'undo', 'redo'
            ],
            shouldNotGroupWhenFull: true
        },
        language: 'id',
        image: {
            toolbar: [
                'imageTextAlternative',
                'imageStyle:full',
                'imageStyle:side'
            ]
        },
    }

    editForm: FormGroup;
    date: NgbDateStruct;
    time: NgbTimeStruct;
    exerciseId: number;
    userId: number;

    submitted = false;

    responseEdit = {} as ResponseStr;
    exercise = {} as ExercisesStr;

    code = {} as CodeEmitterStr;

    maxFileSize='';
    userSession = {} as AuthStr;
    subCode: Subscription;
    module: string;

    constructor(
        private host: HostService,
        public _util: UtilControl,
        private formBuilder: FormBuilder,
        private router: Router,
        private _eventEmitter: EventEmitterService,
    ){
        this.host.checkSessionID(this.constructor.name);
    }

    ngOnInit() {
        this.editForm = this.formBuilder.group({
            Id: [''],
            IdUser: [''],
            IdClassroom: [''],
            Title: ['',
                [Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(50),
                ]
            ],
            Date: ['', Validators.required],
            Time: ['', Validators.required],
            MaxSubmissions: ['', Validators.required],
            MaxTimeout: ['', Validators.required],
            MaxFileSize: [''],
            Content: [''],
            Code: [''],
            Result: [''],
            Command: [''],
            ExecTime: [''],
            CheckCount: [''],
            CheckList: [''],
        });

        if (window.localStorage.getItem("ExerciseId"))
            this.exerciseId = Number(window.localStorage.getItem("ExerciseId"));

        this.module = window.localStorage.getItem("ClassModule");

        this.userSession = this.host.getSessionID();

        this.getInit();

        //Getting value from child CodeComponent
        this.subCode = this._eventEmitter.code.subscribe(
            data => {
                if (data) {
                    this.code = data
                    //this.getInit();
                }
            },
        );
    }

    ngOnDestroy() {
        this.subCode.unsubscribe();
    }

    getInit() {
        if (this.exerciseId)
            this.getExercise();
    }

    updateCodeTab() {
        this.getExercise();
    }

    getExercise() {
        let filter: ParamStr[] = [];
        filter.push({Name: "Id", Value: String(this.exerciseId)});

        let requestDB: UniversalDTOStr = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-edit",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe( data => {

                if (!data) return;

                //console.log(data);

                data[0]['Date'] = {
                    day: parseInt(data[0]['EDDay']),
                    month: parseInt(data[0]['EDMonth']),
                    year: parseInt(data[0]['EDYear']),
                };
                if (!data[0]['EDHour'])
                    data[0]['EDHour'] = '00';
                if (!data[0]['EDMinute'])
                    data[0]['EDMinute'] = '00';

                data[0]['Time'] = {
                    hour: parseInt(data[0]['EDHour']),
                    minute: parseInt(data[0]['EDMinute']),
                };

                delete data[0]['EDDay'];
                delete data[0]['EDMonth'];
                delete data[0]['EDYear'];
                delete data[0]['EDHour'];
                delete data[0]['EDMinute'];

                delete data[0]['FileContent'];
                delete data[0]['FileName'];

                this.editForm.setValue(data[0]);
                this.code = data[0];
                this.code['ShowDiff'] = 1;

                this._eventEmitter.setCode(this.code);
                this._eventEmitter.setExercise(data[0]);

                this.maxFileSize = this._util.formatBytes(data[0].MaxFileSize);
            });
    }

    // convenience getter for easy access to form fields
    get fe() { return this.editForm.controls; }

    setRoute(val) {
        this.router.navigate([val])
    }

    onSubmit() {
        this.responseEdit = {} as ResponseStr;

        this.submitted = true;

        // stop here if form is invalid
        if (this.editForm.invalid) {
            return;
        }

        this.fe['Code'].setValue(this.code.Code);
        this.fe['Result'].setValue(this.code.Result);
        this.fe['Command'].setValue(this.code.Command);
        this.fe['ExecTime'].setValue(this.code.ExecTime);
        this.fe['CheckCount'].setValue(this.code.CheckCount);
        this.fe['CheckList'].setValue(this.code.CheckList);

        this.date = this.fe['Date'].value;
        this.time = this.fe['Time'].value;
        //console.log(this.time);

        if (!this.time || this.fe['Time'].value == "") {
            this.fe['Time'].setValue("00:00");
        }

        let temp = this.editForm.value;

        temp['Id'] = this.exerciseId;
        temp['IdUser'] = this.userSession.Id;
        temp['IdClassroom'] = window.localStorage.getItem("ClassroomId");

        temp['Date'] =
            this.date.year + "-" +
            this._util.numberFormat(this.date.month) + "-" +
            this._util.numberFormat(this.date.day) + " " +
            this._util.numberFormat(this.time.hour) + ":" +
            this._util.numberFormat(this.time.minute);

        delete temp['Time'];
        //console.log(temp);

        let filter: ParamStr[] = [];
        let requestDB: UniversalDTOStr = {
            Operation: "update",
            TableData: temp,
            Custom: "Exercises",
            Filter: filter,
        };

        //console.log(requestDB);
        this.host.request(requestDB, 'FDBRequest')
            .subscribe( data => {
                this.responseEdit = data;

                if (!this.exerciseId && this.responseEdit.Name == "ok" && parseInt(this.responseEdit.Status) > 0) {
                    this.exerciseId = Number(this.responseEdit.Status);
                    this.exercise.Id = this.exerciseId;
                    window.localStorage.setItem("ExerciseId", String(this.exerciseId));
                    this.responseEdit.Status = "Record inserted successfully.";

                } else if (this.exerciseId && this.responseEdit.Name == "ok") {
                    this.responseEdit.Status = "Record updated successfully.";
                }

                this._util.setResponse(this.responseEdit.Status, 'Go to Exercises',
                    this.responseEdit.Name, 'view-exercise');

                this.getInit();
                this._eventEmitter.setExercise(this.exercise);

                //console.log("Exercises onSubmit | edit: ", this.editForm.value);
            });
    }

    getInputMaxFileSize(input) {
        this.maxFileSize = this._util.formatBytes(input.path[0].value);
    }

}
