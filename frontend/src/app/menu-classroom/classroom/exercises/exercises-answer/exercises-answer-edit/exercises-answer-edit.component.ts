import {Component, OnInit} from '@angular/core';
import {AnswersHistoryStr, ExerciseAnswersStr, ExercisesStr} from "../../../../../_model/exercises";
import {AuthStr, ParamStr, ResponseStr, UniversalDTOStr} from "../../../../../_model/service";
import {HostService} from "../../../../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../../../../_services/event-emitter.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DiffEditorModel} from "ngx-monaco-editor";
import {formatDate} from "@angular/common";
import {CodeEmitterStr} from "../../../../../_model/code";
import {Subscription} from "rxjs";
import {UtilControl} from "../../../../../_control/util.control";

@Component({
    selector: 'app-exercises-answer-edit',
    templateUrl: './exercises-answer-edit.component.html',
    styleUrls: ['./exercises-answer-edit.component.css']
})
export class ExercisesAnswerEditComponent implements OnInit {

    editForm: FormGroup;
    editor: any;

    resultOptions = {
        theme: 'vs-dark',
        language: 'c',
        automaticLayout: true,
        readOnly: true,
        ignoreTrimWhitespace: false,
    };

    responseEdit = {} as ResponseStr;
    exercise = {} as ExercisesStr;
    answers = {} as ExerciseAnswersStr;

    answerName: string;

    diff: string = '';
    exerciseId: string = '';
    answerId: string = '';
    exIsExpired: number;

    code = {} as CodeEmitterStr;
    userSession = {} as AuthStr;

    history = [];
    load = 0;
    TotalEx = 0;
    Score = '';
    countDown = "";

    navActive = 1;

    subCode: Subscription;

    constructor(
        private host: HostService,
        private formBuilder: FormBuilder,
        private router: Router,
        private _eventEmitter: EventEmitterService,
        private _util: UtilControl,
    ) {
        this.host.checkSessionID(this.constructor.name);
    }

    originalModel: DiffEditorModel = {
        code: '',
        language: 'text/plain'
    };

    modifiedModel: DiffEditorModel = {
        code: '',
        language: 'text/plain',
    };

    ngOnInit() {
        this.editForm = this.formBuilder.group({
            Comment: [''],
        });

        this.userSession = this.host.getSessionID();

        this.exerciseId = window.localStorage.getItem("ExerciseId");
        this.answerId = window.localStorage.getItem("AnswerId");

        this.initA();

        //Getting value from child CodeComponent
        this.subCode = this._eventEmitter.code.subscribe(
            data => {
                this.code = data;

                let message;
                let typeM;
                if (this.code.Result && this.originalModel.code) {
                    this.modifiedModel = {code: this.code.Result, language: 'text/plain'};
                    if (this.originalModel.code == this.modifiedModel.code) {
                        this.diff = "EQUAL";
                        message = "Your result is the same as the result of the exercise. Congratulations!";
                        typeM = "ok"
                    } else {
                        this.diff = "NOT EQUAL";
                        message = "Your result is not the same as the result of the exercise!"
                        typeM = "error"
                    }

                    if (this.code['DIFF']) {
                        let snackBarRef = this._util.setResponse(message, 'Go to DIFF tab',
                            typeM, null);
                        snackBarRef.onAction().subscribe(() =>
                            this.navActive = 3
                        );

                        this.code['DIFF'] = false;
                    }

                }

                if (this.code.Event)
                    this.history.push(this.registerHistory(this.code.Event));

            },
        );
    }

    ngOnDestroy() {
        this.subCode.unsubscribe();
    }

    initA() {
        this.getAnswers();
        this.getExercise();

        if (this.answerId)
            this.getAnswer();
    }

    getExercise() {
        let filter: ParamStr[] = [];
        let requestDB;

        filter.push({Name: "Id", Value: this.exerciseId});
        filter.push({Name: "IdUser", Value: String(this.userSession.Id)});

        let table = "exercises-list-user";

        if (this.userSession.Module == "Admin" || window.localStorage.getItem("ClassModule"))
            table = "exercises-list-admin";

        requestDB = {
            Operation: "view",
            TableData: null,
            Custom: table,
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {

                if (data[0]) {
                    this.originalModel = {code: data[0]['Result'], language: 'text/plain'};
                    this.exercise = data[0];
                    this.exIsExpired = this.exercise['ExIsExpired'];

                    this._eventEmitter.setExercise(this.exercise);
                    this.managerStatus();
                }
            });
    }

    getAnswers() {
        let filter: ParamStr[] = [];
        let requestDB;

        filter.push({Name: "Id", Value: this.exerciseId});
        filter.push({Name: "IdUser", Value: String(this.userSession.Id)});

        let table = "exercises-answer-user";

        if (this.userSession.Module == "Admin" || window.localStorage.getItem("ClassModule")) {
            table = "exercises-answer-admin";
        }

        requestDB = {
            Operation: "view",
            TableData: null,
            Custom: table,
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {

                if (data[0]) {
                    this.answers = data[0];
                    this.TotalEx = parseInt(data[0]['TotalEx']);
                    this.Score = data[0]['Score'];

                    if (this.answers['Name'])
                        this.answerName = this.answers['Name'];
                    if (this.answers['gName'])
                        this.answerName = this.answers['gName'];

                } else {
                    this.TotalEx = 0;
                }
                //console.log("Exercises Edit | dbList: ", data, this.code);

                this.load = 1;
            });
    }

    getAnswer() {
        let filter: ParamStr[] = [];
        let requestDB;

        filter.push({Name: "Id", Value: this.answerId});

        requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-edit",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {

                if (data[0]) {
                    this.code = {
                        Result: data[0].Result,
                        Event: data[0].History,
                        Command: data[0].Command,
                        CheckCount: data[0].CheckCount,
                        CheckList: data[0].CheckList,
                        Code: data[0].Code,
                        ExecTime: data[0].ExecTime,
                    };
                    this.diff = data[0].Status;
                    this.modifiedModel = {code: this.code.Result, language: 'text/plain'};
                    this._eventEmitter.setCode(this.code);
                }

                //console.log("Exercises Edit | dbList: ", data, this.code);

                this.load = 1;
            });
    }

    // convenience getter for easy access to form fields
    get fe() {
        return this.editForm.controls;
    }

    setRoute(val) {
        this.router.navigate([val])
    }

    onSubmit() {
        this.responseEdit = {} as ResponseStr;

        if (this.TotalEx >= this.exercise.MaxSubmissions) {
            this.responseEdit.Name = "error";
            this.responseEdit.Status = "The deadline to send the exercise has ended.";
            return;
        }

        let max = '';
        if (this.exercise.MaxSubmissions > 0) {
            max = "Remaining attempts: " +
                (this.exercise.MaxSubmissions - this.TotalEx) + "\n\n";
        }
        let ret = this._util.openModal('Exercise Submission',
            max + 'Do you want to submit the exercise?',
            'Yes', 'No', '');

        let subscription = ret.afterClosed().subscribe(data => {

            if (data['button'] == 'YES') {

                let form = {} as ExerciseAnswersStr;
                form.Date = 'now';
                form.Result = this.code.Result;
                form.Code = this.code.Code;
                form.Status = this.diff;
                form.IdExercise = this.exerciseId;
                form.IdGroup = this.exercise['gId'];
                form.Id = null;
                form.CheckCount = this.code.CheckCount;
                form.CheckList = this.code.CheckList;
                form.ExecTime = this.code.ExecTime;
                form.Command = this.code.Command;
                form.IdUser = Number(this.userSession.Id);

                let filter: ParamStr[] = [];
                let requestDB: UniversalDTOStr = {
                    Operation: "update",
                    TableData: form,
                    Custom: "ExerciseAnswers",
                    Filter: filter,
                };

                this.host.request(requestDB, 'FDBRequest')
                    .subscribe(data => {
                        this.responseEdit = data;
                        //console.log(data);

                        //Let's save the history
                        if (this.responseEdit.Name == "ok") {
                            let id;
                            id = this.responseEdit.Status;

                            //console.log(this.history);

                            this.history.forEach((element) => {
                                this.submitHistory(element, id);
                            });

                            this.history = [];

                            this.responseEdit = data;
                            if (this.responseEdit.Name == "ok" && parseInt(this.responseEdit.Status) > 0)
                                this.responseEdit.Status = "Record inserted successfully.";

                            this._util.setResponse(this.responseEdit.Status, 'Go to Answers',
                                this.responseEdit.Name, 'view-answer');
                        } else {
                            this._util.setResponse(this.responseEdit.Status, this.responseEdit.Name, null, null);
                        }
                    });
            }
            this.initA();
        });
    }

    registerHistory(event) {
        let history = {} as { name: string, date: string, status: string };

        if (event) {
            history.name = event;
            history.date = formatDate(new Date(), 'yyyy-MM-dd HH:mm', 'en');
            history.status = this.diff;

            return history;
        }
    }

    submitHistory(element, id) {

        let answerHistory = {} as AnswersHistoryStr;

        answerHistory.IdExerciseAnswers = id;
        answerHistory.Date = element.date;
        answerHistory.Event = element.name;
        answerHistory.Status = element.status;

        let filter: ParamStr[] = [];
        let requestDB: UniversalDTOStr = {
            Operation: "update",
            TableData: answerHistory,
            Custom: "AnswersHistory",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                //console.log(data);
                //this.router.navigate(['Exercises']);
                //console.log("Exercises submithistory | edit: ", req, data);
            });
    }

    async managerStatus() {
        let count = true;

        let n = this.exercise['CountDown'];
        if (n <= 0)
            count = false;

        while (count) {
            await this._util.delay(1000);
            n--;
            if (n <= 0) {
                let ret = this._util.openModal('Finished Time to Submission',
                    'The time to submit the exercise is over.',
                    'Close', '', '');

                count = false;
                this.initA();
            }

            this.countDown = this._util.countdown(n);
        }
    }

}
