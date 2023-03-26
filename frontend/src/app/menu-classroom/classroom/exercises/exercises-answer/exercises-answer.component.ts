import {Component, OnInit, ViewChild} from '@angular/core';
import {HostService} from "../../../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../../../_services/event-emitter.service";
import {AuthStr, ParamStr, ResponseStr, UniversalDTOStr} from "../../../../_model/service";
import {ExerciseAnswersStr, ExercisesStr} from "../../../../_model/exercises";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ExcelService} from '../../../../_services/file.service';
import {dialogStr} from "../../../../_model/dialog";
import * as JSZip from "jszip";
import {saveAs} from 'file-saver';
import {UtilControl} from "../../../../_control/util.control";

@Component({
    selector: 'exercises-answer-app-answer',
    templateUrl: './exercises-answer.component.html',
    styleUrls: ['./exercises-answer.component.css'],
    animations: [
        trigger('detailExpand', [
            state('collapsed, void', style({height: '0px', minHeight: '0', display: 'none'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
        ]),
    ]
})

export class ExercisesAnswerComponent implements OnInit {
    displayedColumns = ['Id', 'Name', 'Date', 'Status', 'Score', 'TotalEx'];
    dataSource: MatTableDataSource<ExerciseAnswersStr>;
    displayedColumns2 = ['Index2', 'Name2', 'Date2', 'CheckCount2', 'ExecTime2', 'History2', 'Status2', 'Action2'];

    // @ts-ignore
    @ViewChild(MatPaginator) paginator: MatPaginator;
    // @ts-ignore
    @ViewChild(MatSort) sort: MatSort;

    exercise = {} as ExercisesStr;
    answers: ExerciseAnswersStr[] = [];
    answersXLS: { Name, Submission_Date, Status, Response_Time, Attempts_Number, Events, Score }[] = [];

    expandedElement: string;

    response = {} as ResponseStr;
    userSession = {} as AuthStr;

    exerciseId: string;
    exIsExpired: number;
    countDown: string;
    load = 0;

    totalAnswers = 0;

    similarity = "";

    module: string;
    score: boolean;

    constructor(
        private host: HostService,
        private router: Router,
        private _eventEmitter: EventEmitterService,
        private excelService: ExcelService,
        private _util: UtilControl,
    ) {
        this.host.checkSessionID(this.constructor.name);
    }

    ngAfterViewInit() {
        if (this.exerciseId) {
            this.getExercise();
            this.getAnswers();
        }
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    ngOnInit() {

        this.userSession = this.host.getSessionID();
        this.module = window.localStorage.getItem("ClassModule");
        this.exerciseId = window.localStorage.getItem("ExerciseId");
    }

    setRoute(val) {
        this.router.navigate([val])
    }

    addAnswer(): void {
        window.localStorage.setItem("ExerciseId", this.exerciseId);
        window.localStorage.removeItem("AnswerId");
        this.router.navigate(['add-answer']);
    };

    editAnswer(answer): void {
        window.localStorage.setItem("AnswerId", answer.Id.toString());
        window.localStorage.setItem("ExerciseId", this.exerciseId);
        this.router.navigate(['edit-answer']);
    };

    deleteAnswer(id, name, r, i): void {

        let ret = this._util.openModal('Delete Exercise of the User: ' + name,
            'Confirm to delete the exercise?',
            'Yes', 'No', '');

        ret.afterClosed().subscribe(data => {

            if (data['button'] == 'YES') {

                let filter: ParamStr[] = [];
                filter.push({Name: "Id", Value: id.toString()});

                let requestDB: UniversalDTOStr = {
                    Operation: "drop",
                    TableData: null,
                    Custom: "exercises-answer",
                    Filter: filter,
                };

                this.host.request(requestDB, 'FDBRequest')
                    .subscribe(data => {
                        this.response = data;

                        this._util.setResponse(this.response['Status'], this.response['Name'], null, null);
                        if (this.response['Name'] == "ok") {
                            this.getAnswers();
                            //console.log("Exercises-Answer | deleteAnswer: ", this.response, this.exerciseId);
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

    showEvents(id): void {
        this.getHistory(id);
    }

    download(choice): void {
        if (choice == "lastExec") {
            this.answers.forEach(answer => {
                let name = answer['Name'];
                if (answer['gId'])
                    name = answer['gName'];

                this.answersXLS.push({
                    Name: name,
                    Submission_Date: answer.Date,
                    Response_Time: answer.ExecTime,
                    Status: answer.Status,
                    Attempts_Number: answer['TotalEx'],
                    Events: answer['HistSum'],
                    Score: answer.Score
                })
            });

            this.excelService.exportAsExcelFile(this.answersXLS, this.exercise.Title);
            //console.log(this.answersXLS);
        }

        if (choice == "lastCode") {

            var zip = new JSZip();
            this.answers.forEach(answer => {
                let name = answer['Name'];
                if (answer['gId'])
                    name = answer['gName'];
                zip.file(name + '.c', answer.Code);
            });

            let name = this.exercise.Title;

            zip.generateAsync({type: "blob"}).then(function (content) {
                // see FileSaver.js
                saveAs(content, name);
            });
        }
    }

    showFeedback(id) {
        let ret = this._util.openModal('Feedback',
            this.answers[id].Feedback,
            'Close', '', '');

    }

    changeScore(index, row) {
        let input: dialogStr[] = [];

        input.push({Model: row.Score, Name: "score", Type: "text", Title: "Score"});
        input.push({Model: row.Feedback, Name: "feedback", Type: "text", Title: "Feedback *(Optional)"});

        let ret = this._util.openModal('Change Score',
            'Please enter the score: ',
            'Yes', 'No', input);

        ret.afterClosed().subscribe(data => {

            if (data && data['button'] == 'YES') {

                let score, feedback;
                if (data['input'][0] && data['input'][0]['Model'] != "")
                    score = data['input'][0]['Model'];

                if (data['input'][1] && data['input'][1]['Model'] != "")
                    feedback = data['input'][1]['Model'];

                if (!score)
                    score = "";

                if (row.gId)
                    row.IdUser = "";

                let filter: ParamStr[] = [];
                let requestDB: UniversalDTOStr = {
                    Operation: "update",
                    TableData: {
                        IdExercise: this.exerciseId,
                        IdUser: row.IdUser,
                        Id: row.IdScore,
                        Score: score,
                        Feedback: feedback,
                        IdGroup: row.gId,
                    },
                    Custom: "ExerciseScores",
                    Filter: filter,
                };

                this.host.request(requestDB, 'FDBRequest')
                    .subscribe(data => {
                        if (data) {
                            if (data['Name'] == 'ok') {

                                if (parseInt(data['Status']) > 0)
                                    this.answers[index].IdScore = parseInt(data['Status']);
                                this.answers[index].Score = score;
                                this.answers[index].Feedback = feedback;
                                this._util.setResponse('Record changed successfully.', 'ok', null, null);
                                if (score)
                                    this.score = true;
                                else
                                    this.score = false;

                            } else {
                                this._util.setResponse(data['Status'], 'error', null, null);
                            }
                        }
                    });
            }
        });
    }

    getHistory(id) {
        let filter: ParamStr[] = [];
        filter.push({Name: "IdExerciseAnswers", Value: id.toString()});

        let requestDB: UniversalDTOStr = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-history",
            Filter: filter,
        };

        let h = "";
        let i = 0;
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                //console.log(data);

                if (data) {
                    data.forEach(history => {
                        i++;
                        h += "EVENT #" + i + "\n\nDATE: " + history.Date + "\nSTATUS: " +
                            history.Status + "\n\n COMMAND\n" + history.Event + "\n\n"
                    });
                } else {
                    h = "Records not found."
                }

                let ret = this._util.openModal('Events',
                    h,
                    'Close', '', '');

            });
    }

    getHistoryGroup(id) {
        let filter: ParamStr[] = [];

        filter.push({Name: "GroupId", Value: id.toString()});

        let requestDB: UniversalDTOStr = {
            Operation: "view",
            TableData: null,
            Custom: 'group-history-admin',
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                let sel = 0, del = 0, ins = 0, rep = 0;
                let h = "";

                if (data) {
                    data.forEach(history => {
                        if (history.ESelection)
                            sel += history.ESelection;
                        if (history.EDelete)
                            del += history.EDelete;
                        if (history.EInsert)
                            ins += history.EInsert;
                        if (history.EReplace)
                            rep += history.EReplace;
                    });

                    let usel = 0, udel = 0, uins = 0, urep = 0;
                    data.forEach(history => {
                        if (history.ESelection)
                            usel = Math.floor((history.ESelection * 100) / sel);
                        if (history.EInsert)
                            uins = Math.floor((history.EInsert * 100) / ins);
                        if (history.EReplace)
                            urep = Math.floor((history.EReplace * 100) / rep);
                        if (history.EDelete)
                            udel = Math.floor((history.EDelete * 100) / del);

                        h += history['Name'] + "\n";
                        h += "Selection.......: " + usel + "%\n";
                        h += "Insertion........: " + uins + "%\n";
                        h += "Replacement: " + urep + "%\n";
                        h += "Deletion.........: " + udel + "%\n";
                        h += "\n\n";
                    });

                } else {
                    h = "Records not found."
                }

                let ret = this._util.openModal('Group History',
                    h,
                    'Close', '', '');

            });
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
                    this.exercise = data[0];
                    this.exIsExpired = this.exercise['ExIsExpired'];
                    this.countDown = this._util.countdown(this.exercise['CountDown']);
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

        this.score = false;
        this.answers = [] as ExerciseAnswersStr[];

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {

                if (data) {
                    let bId;
                    let gId;
                    let run = [];
                    let bAnswer;
                    let i = 0;
                    let total = data.length;
                    let history = 0;

                    data.forEach(answer => {

                        if (answer.Score)
                            this.score = true;

                        if (i == 0) {
                            bId = answer.IdUser;
                            gId = answer.gId;
                        }

                        history += answer.History;

                        if ((answer.IdUser != bId && !answer.gId) ||
                            answer.gId != gId) {

                            bAnswer['run'] = run;
                            bAnswer['HistSum'] = history;
                            this.answers.push(bAnswer);
                            run = [];
                            history = 0;
                        }

                        bAnswer = answer;
                        run.push(answer);
                        bId = answer.IdUser;
                        gId = answer.gId;

                        if (total == 1 || total == i + 1) {
                            bAnswer['run'] = run;
                            bAnswer['HistSum'] = history;
                            this.answers.push(bAnswer);
                            run = [];
                            history = 0;
                        }

                        i++;
                        this.totalAnswers++;
                    });

                    this.dataSource = new MatTableDataSource(this.answers);
                    //console.log(this.answers);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;

                } else {
                    delete this.answers;
                    delete this.dataSource;
                }
                this.load = 1;
            });
    }

    checkSimilarity() {
        // APPLYING SIMILARITY CHECK

        var stringSimilarity = require("string-similarity/src/index");

        this.similarity = "Code similarity ranges from 0 to 1. Where 1 is an identical code string.\n\n";

        this.answers.forEach(answer1 => {
            this.answers.forEach(answer2 => {
                if (answer1.IdUser != answer2.IdUser || answer1['gId'] != answer2['gId']) {
                    let s = stringSimilarity.compareTwoStrings(answer1.Code, answer2.Code);
                    if (answer1['gId'])
                        this.similarity += "Similarity: " + parseFloat(s.toFixed(2)) +
                            " -> " + answer1['gName'] + " ~ " + answer2['gName'] + "\n";
                    else
                        this.similarity += "Similarity: " + parseFloat(s.toFixed(2)) +
                            " -> " + answer1['Name'] + " ~ " + answer2['Name'] + "\n";
                }
            });
        });

        let ret = this._util.openModal('Code Similarity',
            this.similarity,
            'Close', '', '');
    }
}