import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HostService} from "../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../_services/event-emitter.service";
import {ParamStr, RequestStr, ResponseStr, UniversalDTOStr} from "../_model/service";
import {
    CodeEmitterStr,
    CodePairStr, CodePairUsers,
    CodeResponseStr,
    CodeStr,
    CodeTempStr,
    QueueStr
} from "../_model/code";
import {HostInfoStr} from "../_model/hostInfo";
import {ContainerStr} from "../_model/node";
import {ExercisesStr} from "../_model/exercises";
import {Subscription} from "rxjs";
import {SocketService} from "../_services/socket.service";
import {EditorContentManager, RemoteCursorManager, RemoteSelectionManager} from "@convergencelabs/monaco-collab-ext";
import {editor} from "monaco-editor";
import {Md5} from 'ts-md5/dist/md5';
import {RemoteSelection} from "@convergencelabs/monaco-collab-ext/typings/RemoteSelection";
import {RemoteCursor} from "@convergencelabs/monaco-collab-ext/typings/RemoteCursor";
import {CodeControl} from "../_control/code.control";
import {NodeControl} from "../_control/node.control";
import {DOCUMENT} from "@angular/common";
import {UtilControl} from "../_control/util.control";
import {GroupHistoryStr} from "../_model/groups";

@Component({
    selector: 'app-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.css']
})

export class CodeComponent implements OnInit {
// @ts-ignore
    @ViewChild("ResultsTab", {static: false}) re;

    // @ts-ignore
    @ViewChild('selectfile') el: ElementRef;   //in html we make variable of selectfile
    progress = {loaded: 0, total: 0};

    codeForm: FormGroup;
    submitted = false;

    editor: any;
    editorOptions = {
        theme: 'vs-dark',
        language: 'c',
        automaticLayout: true,
        cursorSmoothCaretAnimation: true,
        fontSize: 12,
        suggest: true,
        tabCompletion: true,
        glyphMargin: true,
        minimap:
            {
                enabled: true,
                showSlider: "always",
            },
    };

    resultOptions = {
        theme: 'vs-dark',
        language: 'c',
        automaticLayout: true,
        readOnly: true,
    };
    load = 0;

    cleanDecorations: boolean;
    otherUserTyping: number;
    nameUserTyping: string;
    codePairUsers = {} as CodePairUsers[];
    offsetLine: number;
    offsetCol: number;
    hideMsgUpdateCode = 0;
    receivedMsg = 0;
    countLines = 0;
    cursorEditors: Map<string, RemoteCursor>;
    selectionEditors: Map<string, RemoteSelection>;
    lastUpdate: number;
    lastHistGroup: number;
    firstUpdate = 1;
    chatMsg: string;
    chatList = [];
    userId: number;
    groupHistory = {ESelection: 0, EInsert: 0, EDelete: 0, EReplace: 0} as GroupHistoryStr;
    codeInGroup = -1;

    response = {} as CodeResponseStr;
    responseTemp = {} as CodeResponseStr;
    responseQueue = {} as QueueStr;
    responseFile = {} as ResponseStr;

    codePacket: CodeStr;
    disabled: boolean;
    btnCompile: string;
    btnCompileTemp: string;
    sequence: string[];
    programStatus: string;
    queueStatus: string;
    programTimeout: number;
    msgProcess: any[];

    OpMode: string;

    code = {} as CodeEmitterStr;
    codeTemp = {} as CodeTempStr;
    codeTempMode: string;

    hostInfo = {} as HostInfoStr;
    nodes;

    containers = new FormControl();

    command: string;
    codeExample: string;
    loadParameters: string;

    exercise = {} as ExercisesStr;

    exerciseFiles: { Id: number, IdExercise: number, FileName: string }[];
    files = new FormControl();
    fileName = '';
    fileCodeExecution!: string[];

    navActive = 1;
    queue = false;
    tryACode = "0";

    sysInfo!: ParamStr[];

    numberOfCPUs = 0;
    msgOverLoad = "";

    hasChoiceCompile = 0;

    subCode: Subscription;
    subExercise: Subscription;
    subSocket: Subscription;

    constructor(
        private host: HostService,
        private formBuilder: FormBuilder,
        private router: Router,
        private _eventEmitter: EventEmitterService,
        private socket: SocketService,
        private _code: CodeControl,
        private _node: NodeControl,
        public _util: UtilControl,
        @Inject(DOCUMENT) private _document: Document,
    ) {
        this.host.checkSessionID(this.constructor.name);
    }

    ngOnInit() {
        this.codeForm = this.formBuilder.group({
            CompCmd: ['',
                [Validators.required,
                    Validators.minLength(1),
                ]
            ],
            CompArgs: ['',
                [Validators.required,
                    Validators.minLength(1),
                ]
            ],
            ExecCmd: ['', []],
            ExecArgs: ['', []],
            ExtraArgs: ['', []],
            File: ['', []],
            NumberProc: ['',
                [Validators.required,
                    Validators.min(1),
                ]
            ],
            run: ['', []],
        }, {});

        this.disabled = false;
        this.btnCompile = "Compile and Run";

        this.userId = Number(this.host.getSessionID().Id);

        this.exercise.Id = parseInt(window.localStorage.getItem("ExerciseId"));

        //Getting value from child CodeComponent
        this.subCode = this._eventEmitter.code.subscribe(
            data => {
                this.code = data;

                if (this.code.Command) {
                    let r = this.code.Command.split("|");
                    this.loadParameters = r[0];
                    this.fc['CompCmd'].setValue(r[1]);
                    this.fc['CompArgs'].setValue(r[2]);
                    this.fc['ExecCmd'].setValue(r[3]);
                    this.fc['ExecArgs'].setValue(r[4]);
                    this.fc['ExtraArgs'].setValue(r[5]);
                    this.fc['NumberProc'].setValue(r[6]);

                    if (this.loadParameters != "Manual") {
                        this.fc['CompCmd'].disable();
                        this.fc['CompArgs'].disable();
                        this.fc['ExecCmd'].disable();
                        this.fc['ExecArgs'].disable();
                    }

                }
            },
        );

        this.tryACode = window.localStorage.getItem("TryACode");
        if (this.tryACode)
            this.codeInGroup = 0;

        if (this.exercise.Id)
            this.getFiles();

        //Getting value from child CodeComponent
        this.subExercise = this._eventEmitter.exercise.subscribe(
            data => {
                this.exercise = data;
                if (data && this.exercise && this.exercise.Id) {
                    window.localStorage.setItem("ExerciseId", this.exercise.Id.toString());
                    this.getFiles();
                }
                if (this.exercise['gId']) {
                    this.getHistoryGroup();

                    if (this.exercise['gId'] > 0 && !this.subSocket) {
                        this.codeInGroup = 1;

                        this.openSocket(this.exercise.Code);

                        let c = {} as CodePairStr;
                        c.IdGroup = this.exercise['gId'];
                        c.IdUser = this.userId;
                        c.UserName = this.host.getSessionID().Name;
                        c.Option = "getCode";
                        this.socketSend(c);
                    }
                } else {
                    this.codeInGroup = 0;
                }
            },
        );

        this.getActiveNodes();
        this.getHostInfo();
        this.getFilesCodeExecution();
        //this.codeForm.disable();
    }

    onInit(editor) {
        this.editor = editor;
        this.load = 1;

        const existCondition = setInterval(() => {
            if (this.exercise) {
                this.codePair();
                this.getUsersCoding();
                clearInterval(existCondition);
            }
        }, 1000);

        this.codeTempMode = "auto";
        this.cleanDecorations = false;
    }

    ngOnDestroy() {
        this.subCode.unsubscribe();
        this.subExercise.unsubscribe();

        if (this.subSocket)
            this.subSocket.unsubscribe();
    }


    onQueue() {
        this.queue = !this.queue;
    }

    onChange(editor) {
        //Save in temp code
        if (!this.exercise['gId'])
            this.codeTemp.IdUser = this.userId;
        if (this.exercise['gId'])
            this.codeTemp.IdGroup = Number(this.exercise['gId']);
        this.codeTemp.Code = this.code.Code;
        this.codeTemp.Command = this.code.Command;
    }

    setTheme(val: string) {
        this.editor._themeService.setTheme(val);
    }

    onKeydownEvent(editor) {
        //To autodetect de compiler language
        this.setAutoParameters(this.code.Code);

        if (this.cleanDecorations == true) {
            this.editor.getModel().setValue(this.code.Code);
            this.cleanDecorations = false;
        }

        if (!this.lastUpdate)
            this.lastUpdate = Math.floor(Date.now() / 1000);
        if ((Math.floor(Date.now() / 1000) - this.lastUpdate) > 5) {
            this.lastUpdate = Math.floor(Date.now() / 1000);
            if (this.codeTempMode == "auto")
                this.updateCodeTemp();
            this.getUsersCoding();
        }

        if ((Math.floor(Date.now() / 1000) - this.otherUserTyping) < 5) {
            this._util.setResponse(this.nameUserTyping + ' is typing... ' +
                'Please, wait 3 sec and try again!'
                , 'error', null, null);
            let c = {} as CodePairStr;
            c.IdGroup = this.exercise['gId'];
            c.IdUser = this.userId;
            c.UserName = this.host.getSessionID().Name;
            c.Option = "sendCode";
            c.Hash = "";
            this.socketSend(c);
            this.receivedMsg = 1;
            this.hideMsgUpdateCode = 1;
        }
    }

    setErrorCode(error) {
        let sl = 0;
        let sc = 0;
        let ed = this.editor;

        error.split('\n').forEach( (line) => {
            let regexp = line.match('(main.c):([0-9]+):([0-9]+)');

            if (error && Array.isArray(regexp) &&
                regexp.length >= 3 && regexp[1] == "main.c") {
                if (Number(regexp[2]) > 0)
                    sl = regexp[2];
                if (Number(regexp[3]) > 0)
                    sc = regexp[3];

                ed.deltaDecorations([], [
                    {
                        range: new monaco.Range(sl, sc, sl, sc),
                        options: {
                            isWholeLine: true,
                            className: 'myContentClass',
                            glyphMarginClassName: 'myGlyphMarginClass',
                            glyphMarginHoverMessage: {value: line},
                        }
                    }
                ]);

            }
        });
        this.editor = ed;
        this.cleanDecorations = true;
    }

    setFont(val: number) {
        let font = {"fontSize": val}
        this.editor.updateOptions(font);
    }

    setMiniMap(val: string) {
        this.editor.updateOptions({minimap: {enabled: val}});
    }

    getHostInfo() {
        let params: ParamStr[] = [];
        let request: RequestStr = {
            Request: "hostInfo",
            Param: params,
        };

        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
                this.hostInfo = data;
            });
    }

    getSysInfo() {
        let params: ParamStr[] = [];
        let request: RequestStr = {
            Request: "sysInfo",
            Param: params,
        };

        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
                this.sysInfo = data['Param'];
                if (data['Request'] != 'ok')
                    this._util.setResponse('There was a problem executing the request.', 'info', null, null);
                else
                    this._util.setResponse('Data found.', 'ok', null, null);
            });
    }

    getFilesCodeExecution() {
        let params: ParamStr[] = [];
        let request: RequestStr = {
            Request: "filesCodeExecution",
            Param: params,
        };

        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
                this.fileCodeExecution = data;
            });
    }

    // convenience getter for easy access to form fields
    get fc() {
        return this.codeForm.controls;
    }

    getCodeExample(example) {
        this.hasChoiceCompile = 1;

        this.host.CodeExample(example)
            .then(result => {
                this.receivedMsg = 0;
                const contentManager = new EditorContentManager({
                    editor: this.editor,
                });
                contentManager.replace(0, result.length + 1, result);

            })
            .catch(error => {
                console.log('Error Getting Data: ', error);
            });
        this.OpMode = 'vs-dark';

        this.codeExample = example;

        this.setParameters(this.codeExample);
    }

    setFileCodeExecution(file) {
        let ExtraArgs = this.fc['ExtraArgs'].value.toString();
        let ExtraArgsTemp = ExtraArgs.split(" ");

        if (ExtraArgsTemp.indexOf(file) > -1) {
            return;
        } else {
            if (ExtraArgsTemp.indexOf("<") == -1)
                ExtraArgs += "<";
            ExtraArgs += " " + file;
        }

        this.fc['ExtraArgs'].setValue(ExtraArgs);
    }

    setFileParameters(tec) {
        this.hasChoiceCompile = 1;

        let ExtraArgs = this.fc['ExtraArgs'].value.toString();
        let ExtraArgsTemp = ExtraArgs.split(" ");

        //check if all files in the selected box are in the input ExtraArgs
        if (this.files.value) {
            for (var i = 0; i < this.files.value.length; i++) {
                if (ExtraArgsTemp.indexOf(this.files.value[i]) > -1) {
                    continue;
                } else {
                    if (i == 0 && ExtraArgsTemp.indexOf("<") == -1)
                        ExtraArgs += "<";
                    ExtraArgs += " " + this.files.value[i];
                }
            }
        }

        // Removing key index from exerciseFiles
        if (this.exerciseFiles) {
            let exerciseFilesTemp = [];
            for (var i = 0; i < this.exerciseFiles.length; i++) {
                exerciseFilesTemp[i] = this.exerciseFiles[i]['FileName'];
            }

            //check if all files in the input ExtraArgs are in the selected box
            ExtraArgsTemp = ExtraArgs.split(" ");
            ExtraArgs = "";
            for (var i = 0; i < ExtraArgsTemp.length; i++) {
                if (exerciseFilesTemp.indexOf(ExtraArgsTemp[i]) > -1) {
                    if (this.files.value.indexOf(ExtraArgsTemp[i]) > -1) {
                        ExtraArgs += " " + ExtraArgsTemp[i];
                    }
                } else {
                    ExtraArgs += " " + ExtraArgsTemp[i];
                }
            }
        }

        // Check if file uploaded from input File
        ExtraArgsTemp = ExtraArgs.split(" ");
        if (this.fileName != null) {
            if (ExtraArgsTemp.indexOf(this.fileName) === -1) {
                if (ExtraArgsTemp.indexOf("<") == -1)
                    ExtraArgs += "<";
                ExtraArgs += " " + this.fileName;
            }
        }

        this.fc['ExtraArgs'].setValue(ExtraArgs);

        this.setParameters(tec);
    }

    setManualParameters(tec) {
        this.hasChoiceCompile = 1;
        this.setParameters(tec);
    }

    setAutoParameters(code) {
        if (!code)
            return;

        let c = 0;
        if (code.indexOf('mpi.h') !== -1) {
            this.setParameters('MPI');
            c += 1
        }
        if (code.indexOf('omp.h') !== -1) {
            this.setParameters('OpenMP');
            c += 1
        }
        if (c == 2) {
            this.setParameters('OpenMP_MPI');
        }
        if (code.indexOf('cuda_runtime.h') !== -1) {
            this.setParameters('CUDA');
        }
    }

    updateParameters() {
        //console.log("updateParameters");
        this.code.Command = this.loadParameters + "|";
        this.code.Command += this.fc['CompCmd'].value.toString() + "|";
        this.code.Command += this.fc['CompArgs'].value.toString() + "|";
        this.code.Command += this.fc['ExecCmd'].value.toString() + "|";
        this.code.Command += this.fc['ExecArgs'].value.toString() + "|";
        this.code.Command += this.fc['ExtraArgs'].value.toString() + "|";
        if (this.fc['NumberProc'].value > 0)
            this.code.Command += this.fc['NumberProc'].value.toString();
        this._eventEmitter.setCode(this.code);
    }

    setParameters(tec) {
        if (tec != '')
            this.loadParameters = tec;

        if (this.loadParameters != "Manual") {
            this.fc['CompCmd'].disable();
            this.fc['CompArgs'].disable();
            this.fc['ExecCmd'].disable();
            this.fc['ExecArgs'].disable();
        } else {
            this.fc['CompCmd'].enable();
            this.fc['CompArgs'].enable();
            this.fc['ExecCmd'].enable();
            this.fc['ExecArgs'].enable();
        }

        let nProcess;
        if (this.fc['NumberProc'].value > 0)
            nProcess = this.fc['NumberProc'].value.toString();

        if (nProcess > this.nodes.cpu) {
            this.msgOverLoad = "Attention, you are allocating more processes than " +
                "the total number of CPUs in the cluster. " +
                "Performance degradation may occur."
        } else {
            this.msgOverLoad = "";
        }

        let hosts;
        if (this.nodes)
            hosts = "-host " + this.nodes.join(",");
        if (this.containers.value != null) {
            if (this.containers.value[0]) {
                hosts = "-host " + this.containers.value;
            }
        }

        let CompCmd = this.fc['CompCmd'].value.toString();
        let CompArgs = this.fc['CompArgs'].value.toString();
        let ExecCmd = this.fc['ExecCmd'].value.toString();
        let ExecArgs = this.fc['ExecArgs'].value.toString();
        let ExtraArgs = this.fc['ExtraArgs'].value.toString();

        if (this.loadParameters == "MPI") {
            CompCmd = "mpic++";
            CompArgs = "main.c -o main";
            ExecCmd = "mpiexec";
            ExecArgs = "-n " + nProcess + " " + hosts + " main";
        }

        if (this.loadParameters == "OpenMP_MPI") {
            CompCmd = "mpic++";
            CompArgs = "-fopenmp main.c -o main";
            ExecCmd = "mpiexec";
            ExecArgs = "-n " + nProcess + " " + hosts + " main";
        }

        if (this.loadParameters == "OpenMP") {
            CompCmd = "g++";
            CompArgs = "-fopenmp main.c -o main";
            ExecCmd = "main";

            this.fc['ExecArgs'].setValidators([,]);
            this.fc['ExecArgs'].updateValueAndValidity();
            ExecArgs = "";
        }

        if (this.loadParameters == "CUDA") {
            CompCmd = "nvcc";
            CompArgs = "main.cu -o main";
            ExecCmd = "main";

            this.fc['ExecArgs'].setValidators([,]);
            this.fc['ExecArgs'].updateValueAndValidity();
            ExecArgs = "";
        }

        CompCmd = CompCmd.replace(/\s{2,}/g, ' ');
        CompArgs = CompArgs.replace(/\s{2,}/g, ' ');
        ExecCmd = ExecCmd.replace(/\s{2,}/g, ' ');
        ExecArgs = ExecArgs.replace(/\s{2,}/g, ' ');
        ExtraArgs = ExtraArgs.replace(/\s{2,}/g, ' ');

        this.fc['CompCmd'].setValue(CompCmd.trim());
        this.fc['CompArgs'].setValue(CompArgs.trim());
        this.fc['ExecCmd'].setValue(ExecCmd.trim());
        this.fc['ExecArgs'].setValue(ExecArgs.trim());
        this.fc['ExtraArgs'].setValue(ExtraArgs.trim());

        this.updateParameters();
    }

    resetFormFile() {
        this.responseFile = {} as ResponseStr;
    }

    uploadFile() {
        //this.response = {} as ResponseStr;

        if (this.exercise.MaxTimeout == 0 || !this.exercise.MaxTimeout)
            this.exercise.MaxTimeout = this.hostInfo.CodeMaxFileSize;

        var filedata = this.el.nativeElement.files[0];

        if (parseInt(filedata.size) > this.exercise.MaxFileSize) {
            this.responseFile.Name = "error";
            this.responseFile.Status = "The file is larger than the limit set for the exercise. \n" +
                "\nFile: " + filedata.name +
                "\nSize: " + this._util.formatBytes(filedata.size) +
                "\nMaximum allowed size: " + this._util.formatBytes(this.exercise.MaxFileSize);
            return;
        }

        let param = {} as ParamStr;
        param.Name = "Code";
        param.Value = this.host.getSessionID().Token;

        this.host.uploadFileData(filedata, param)
            .subscribe(
                (data: any) => {
                    if (data.type == 1 && data.loaded && data.total) {
                        this.progress.loaded = data.loaded;
                        this.progress.total = data.total;
                    } else if (data.body) {
                        //console.log("Data Uploaded");
                        //console.log(data.body);
                        this.setFileParameters('');
                        this.responseFile.Name = "ok";
                        this.responseFile.Status = "File uploaded successfully. " +
                            "You can call the file directly in your code by the name: " + filedata.name;
                        this.getFilesCodeExecution();

                    }
                    if (data.loaded == data.total) {
                        //console.log(filedata);
                        this.fileName = filedata['name'];

                        //this.load = 0;
                        if (data.body && data['body']['Name'] == "error") {
                            this.responseFile = data['body'];
                        }
                    }
                },
                error => console.log(error)
            )
    }

    download(file: any) {
        //console.log(file);
        this.host.downloadFileData(file, 'ExerciseFiles');
    }

    onClick(mode) {
        this.btnCompile = "Compile";
        this.fc['ExecCmd'].setValidators([,]);
        this.fc['ExecCmd'].updateValueAndValidity();

        if (mode == "Compile and Run") {
            this.fc['ExecCmd'].setValidators([Validators.required, Validators.minLength(1)]);
            this.fc['ExecCmd'].updateValueAndValidity();
        }

        this.btnCompile = mode;

        return
    }

    checkFileParameters() {
        //Check if user include fopen in his code but forget of input the file
        if (this.code.Code && this.code.Code.indexOf('fopen') !== -1 &&
            (!this.fileName && !this.files.value)) {
            this._util.setResponse("Attention, you are called a file in your code. " +
                "Go to the Files tab and send or select the correct file.", 'info',null, null);

            return false;
        }

        if (this.exerciseFiles) {
            //Select automatically the filename in the select box
            let extraArguments = this.fc['ExtraArgs'].value.split(" ");
            let getFilesName = [];
            for (var va of extraArguments) {
                for (var ve of this.exerciseFiles) {
                    if (va == ve['FileName'])
                        getFilesName.push(va);
                }
            }

            if (getFilesName.length > 0)
                this.files.setValue(getFilesName);
        }
    }

    onSubmitCode() {

        this.checkFileParameters();

        this.re.nativeElement.scrollIntoView({behavior: "smooth"});

        this.submitted = true;

        // stop here if form is invalid
        if (this.codeForm.invalid) {
            this.navActive = 1;
            return;
        }

        this.navActive = 4;

        this.codeForm.disable();
        this.disabled = true;

        let container = {} as ContainerStr[];

        //console.log(this.code.MaxTimeout ,this.hostInfo.CodeExecTimeout);

        if (this.exercise.MaxTimeout == 0 || !this.exercise.MaxTimeout)
            this.exercise.MaxTimeout = this.hostInfo.CodeExecTimeout;

        this.codePacket = {
            Token: this.host.getSessionID().Token,
            Code: this.code.Code,
            NumberProc: this.fc['NumberProc'].value.toString(),
            CompArgs: this.fc['CompArgs'].value.toString(),
            ExecArgs: this.fc['ExecArgs'].value.toString() + " " + this.fc['ExtraArgs'].value.toString(),
            ExecCmd: this.fc['ExecCmd'].value.toString(),
            CompCmd: this.fc['CompCmd'].value.toString(),
            FileName: this.fileName,
            Container: this.containers.value,
            Files: this.files.value,
            Queue: this.queue.toString(),
            Sequence: "",
            IdExercise: this.exercise.Id.toString(),
            MaxTimeout: (this.exercise.MaxTimeout + 2).toString(),
            Next: "",
        };

        //console.log(this.codePacket);

        this.sequence = ['queue', 'compile'];
        if (this.btnCompile == "Compile and Run") {
            this.sequence.push('run');
            this.codePacket.Next = "run";
        }

        this.btnCompileTemp = this.btnCompile;
        this.btnCompile = "wait please...";

        this.code.Result = "";

        this.response['Name'] = 'ok';
        this.response['Status'] = "Please wait, we are sending your request to the server.";
        this.programStatus = "is running...";

        if (this.exercise['gId']) {
            let c = {} as CodePairStr;
            c.IdGroup = this.exercise['gId'];
            c.IdUser = this.userId;
            c.UserName = this.host.getSessionID().Name;
            c.Option = "submit";
            c.Hash = "";
            this.socketSend(c);
        }

        this.managerStatus();

    }

    getActiveNodes() {
        let params: ParamStr[] = [];

        let request: RequestStr = {
            Request: "activeNodes",
            Param: params,
        };

        this.host.request(request, 'simpleRequest')
            .subscribe(data => {

                this.numberOfCPUs = this._node.nodes(data, 'cpu');
                this.fc['NumberProc'].setValue(this.numberOfCPUs);
                this.nodes = this._node.nodes(data, 'nodes');
                ;
            });
    }

    getFiles() {
        let filter: ParamStr[] = [];
        filter.push({Name: "Id", Value: this.exercise.Id.toString()});

        let requestDB: UniversalDTOStr = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-files",
            Filter: filter,
        };

        let fileTemp: string[] = [];
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                this.exerciseFiles = data;
            });
    }

    showQueue() {
        let params: ParamStr[] = [];
        params.push({Name: "", Value: this.codePacket.Token});

        let request: RequestStr = {
            Request: "queueCheck",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
                //console.log(this.codePacket.Token, data);
                this.responseQueue = data;
            });
    }

    runCode() {
        //console.log("CodeEditor | runCode", this.codePacket);
        this.host.request(this.codePacket, 'runExecCode')
            .subscribe(data => {
                this.responseTemp = data;
                this.response = this.responseTemp;
            });
    }

    async managerStatus() {
        let wait = true;
        let wait_queue = false;
        let wait_compile = false;
        let wait_run = false;
        let sequence = "queue";
        let timeout = false;

        //console.log(this.code);
        this.programTimeout = this.exercise.MaxTimeout;
        this.command = "";
        this.code.Event = "";
        this.response.Command = "";
        this.responseQueue = {} as QueueStr;

        while (wait) {
            //Let's refresh the Session Timeout
            this._eventEmitter.setLoginChange({Name: "RefreshSession", Status: ""});

            if (timeout == true) {
                if (this.responseQueue.Count > 5)
                    this.programTimeout = this.exercise.MaxTimeout - this.responseQueue.Count;
                else
                    this.programTimeout--;
            }

            if (wait_queue && this.responseQueue.Position > 1)
                this.queueStatus = "getting position..."

            if (sequence == "queue") {
                if (!wait_queue) {
                    this.responseTemp = {} as CodeResponseStr;
                    this.codePacket.Sequence = "queue";
                    this.runCode();
                    wait_queue = true;
                }

                if (wait_queue) {
                    if (this.responseTemp['Name'] == "ok") {
                        this.showQueue();
                        if (this.responseQueue.Position)
                            this.queueStatus = this.responseQueue.Position.toString();
                    }

                    if (this.responseQueue.Position == 1) {
                        sequence = "compile";
                    }
                }
            }

            await this._util.delay(1000);

            if (sequence == "compile") {
                if (!wait_compile) {
                    this.responseTemp = {} as CodeResponseStr;
                    this.codePacket.Sequence = "compile";
                    this.runCode();
                    wait_compile = true;
                }

                if (wait_compile) {
                    if (this.responseTemp['Name']) {

                        //SHOW COMPILE RESULTS
                        this.code.Event = this.response.Command + " (time " + this.response.CompTime + ")";

                        if (this.fileName)
                            this.code.Event += "\nFilename: " + this.fileName;

                        this.command += this.code.Event

                        this.code.Event += "\n" + this.response.Status;
                        this._eventEmitter.setCode(this.code);

                        if (this.responseTemp['Name'] == 'ok') {
                            if (this.sequence.includes("run"))
                                sequence = "run";
                            else
                                wait = false;
                        }
                    }
                }
            }

            if (sequence == "run") {
                if (!wait_run) {
                    this.responseTemp = {} as CodeResponseStr;
                    this.codePacket.Sequence = "run";
                    this.runCode();
                    this.responseQueue = {} as QueueStr;
                    wait_run = true;
                }

                if (wait_run) {
                    timeout = true;
                    this.showQueue();
                    //console.log(this.responseTemp);
                    if (this.responseTemp['Name']) {
                        //SHOW RUN RESULTS
                        this.msgProcess = this._code.showProcess(this.responseTemp.Output);
                        this.code.Result = this.responseTemp.Output;
                        this.code.CheckCount = this.responseTemp.CheckCount;
                        this.code.CheckList = this.responseTemp.CheckList;
                        this.code.ExecTime = this.responseTemp.ExecTime;

                        this.code.Event = this.response.Command + " (time " + this.response.ExecTime + ")";
                        this.command += "\n\n" + this.code.Event

                        this.code.Event += "\n" + this.response.Status;
                        this.code['DIFF'] = true;
                        this._eventEmitter.setCode(this.code);

                        if (this.exercise['gId']) {
                            let c = {} as CodePairStr;
                            c.IdGroup = this.exercise['gId'];
                            c.IdUser = this.userId;
                            c.UserName = this.host.getSessionID().Name;
                            c.Option = "result";
                            if (this.code.Result == this.exercise.Result)
                                c.Text = "ok";
                            else
                                c.Text = "info";
                            c.Hash = "";
                            this.socketSend(c);
                        }

                        if (this.responseTemp['Name'] == 'ok') {
                            this.responseTemp.Status = "Code copied to result area.";
                        }
                        wait = false;
                    }
                }
            }

            if (this.responseTemp['Name'] == 'error' || this.responseTemp['Name'] == 'info') {
                wait = false;
                this.programTimeout = 0;
                this.setErrorCode(this.responseTemp['Status']);
            }

        }

        this.queueStatus = "done!";

        this.codeForm.enable();
        this.disabled = false;
        this.btnCompile = this.btnCompileTemp;
        this.sequence = [''];
        this.programStatus = "output";
        this.programTimeout = 0;

        if (!this.exercise.Id) {
            this._util.setResponse("Execution finished.", '', 'ok', null);
        }

        await this._util.delay(1000);

    }

    codeTempCall(option) {
        if (option == "load") {
            this.getCodeTemp("replace");
        }
        if (option == "none")
            this.codeTempMode = "none";
        if (option == "auto")
            this.codeTempMode = "auto";
    }

    getCodeTemp(option) {
        let filter: ParamStr[] = [];
        let table = 'code-temp-user';

        if (this.exercise['gId']) {
            filter.push({Name: "GroupId", Value: String(this.exercise['gId'])});
            table = 'code-temp-group';
        } else {
            filter.push({Name: "UserId", Value: String(this.host.getSessionID().Id)});
        }

        let requestDB: UniversalDTOStr = {
            Operation: "view",
            TableData: null,
            Custom: table,
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                if (data[0]) {
                    if (option == "replace") {
                        const contentManager = new EditorContentManager({
                            editor: this.editor,
                        });
                        contentManager.replace(0, data[0].Code.length + 1, data[0].Code);

                        this.code.Command = data[0].Command
                        if (this.hasChoiceCompile == 0)
                            this.setAutoParameters(this.code.Code);
                    }
                    this.codeTemp.Id = data[0].Id;
                }
            });
    }

    updateCodeTemp() {

        let filter: ParamStr[] = [];
        filter.push({Name: "Id", Value: String(this.codeTemp.Id)});

        let requestDB: UniversalDTOStr = {
            Operation: "update",
            TableData: this.codeTemp,
            Custom: "CodeTemp",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                if (data['Name'] == "ok" && parseInt(data['Status']) >= 1)
                    this.codeTemp.Id = data['Status'];
            });
    }


    /////// CODE PAIR IMPLEMENTATION //////////

    socketSend(c) {
        if (!this.exercise['gId'])
            return;

        if (!this.socket.isOpen()) {
            let ret = this._util.openModal('Connection failed', 'You are not connected to the group. ' +
                'Press F5 to reload the page.', 'F5', 'Cancel', '');
            ret.afterClosed().subscribe(data => {
                if (data && data['button'] == 'YES')
                    this._document.defaultView.location.reload();
            });
        }
        this.socket.send(c);
    }

    getHistoryGroup() {
        let filter: ParamStr[] = [];

        filter.push({Name: "UserId", Value: String(this.host.getSessionID().Id)});
        filter.push({Name: "GroupId", Value: String(this.exercise['gId'])});

        let requestDB: UniversalDTOStr = {
            Operation: "view",
            TableData: null,
            Custom: 'group-history-user',
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                if (data[0])
                    this.groupHistory = data[0];
            });
    }

    setHistoryGroup() {
        if (!this.exercise['gId'])
            return;

        if (!this.lastHistGroup)
            this.lastHistGroup = Math.floor(Date.now() / 1000);

        if ((Math.floor(Date.now() / 1000) - this.lastHistGroup) > 5) {
            this.lastHistGroup = Math.floor(Date.now() / 1000);

            let filter: ParamStr[] = [];
            this.groupHistory.IdUser = Number(this.host.getSessionID().Id);
            this.groupHistory.IdGroup = this.exercise['gId'];

            let requestDB: UniversalDTOStr = {
                Operation: "update",
                TableData: this.groupHistory,
                Custom: "GroupHistory",
                Filter: filter,
            };

            this.host.request(requestDB, 'FDBRequest')
                .subscribe(data => {
                    if (data['Name'] == "ok" && parseInt(data['Status']) >= 1)
                        this.groupHistory.Id = data['Status'];
                });
            //console.log(requestDB, this.groupHistory);
        }
    }

    sendMsgChat() {
        if (!this.exercise['gId'])
            return;

        let c = {} as CodePairStr;
        c.IdGroup = this.exercise['gId'];
        c.IdUser = this.userId;
        c.UserName = this.host.getSessionID().Name;
        c.Option = "chatMsg";
        c.Text = this.chatMsg;
        c.Hash = "";
        this.chatMsg = "";
        this.socketSend(c);
    }

    getUsersCoding() {
        if (!this.exercise['gId'])
            return;

        let params: ParamStr[] = [];
        params.push({Name: "IdGroup", Value: this.exercise['gId'].toString()});

        let request: RequestStr = {
            Request: "activeSocket",
            Param: params,
        };
        //console.log("CurrentNodes | request: ", request);
        this.host.request(request, 'simpleRequest')
            .subscribe(data => {

                if (data) {
                    this.codePairUsers = data[0].Users;
                }
                //console.log(data);
            });
    }

    codePair() {
        if (!this.exercise['gId'])
            return;

        this._util.openModal('Screen sharing', 'You are playing in a group exercise. ' +
            'The code screen is shared among all online group users.' +
            '\n\nRules: \n' +
            '#1. One user can edit the code at a time. \n' +
            '#2. After a user finishes editing, the system automatically releases it to the other users in the group. \n' +
            '#3. The first one to start editing wins the turn. \n' +
            '#4. The user name tag is set in the editor when some character is typed.\n', 'Close', '', '');

        let c = {} as CodePairStr;
        c.IdGroup = this.exercise['gId'];
        c.IdUser = this.userId;
        c.UserName = this.host.getSessionID().Name;

        if (this.firstUpdate == 1) {
            c.Option = "sendCode";
            c.Hash = "";
            this.socketSend(c);
            //console.log("getCodeUpdated Request First");
            this.firstUpdate = 0;
        }

        this.editor.onDidChangeCursorPosition(e => {
            c.Option = "position";
            c.Offset = this.editor.getModel().getOffsetAt(e.position);
            this.offsetLine = e.position['lineNumber'];
            this.offsetCol = e.position['column'];
            this.socketSend(c);
        });

        this.editor.onDidChangeCursorSelection(e => {
            c.Option = "selection";
            c.StartOffset = this.editor.getModel().getOffsetAt(e.selection.getStartPosition());
            c.EndOffset = this.editor.getModel().getOffsetAt(e.selection.getEndPosition());
            this.groupHistory.ESelection++;
            this.setHistoryGroup();
            this.socketSend(c);
            //console.log(c);
        });

        this.editor.onDidChangeModelContent(e => {
            e.changes.forEach((change: editor.IModelContentChange) => {
                    if (this.receivedMsg == 0) {
                        const {rangeOffset, rangeLength, text} = change;
                        if (text.length > 0 && rangeLength === 0) {
                            c.Option = "insert";
                            c.Index = rangeOffset;
                            c.Text = text;
                            const md5 = new Md5();
                            c.Hash = String(md5.appendStr(this.editor.getModel().getValue()).end());
                            //console.log(this.editor.getModel().getValue(), c);
                            this.groupHistory.EInsert++;
                            this.setHistoryGroup();
                            this.socketSend(c);
                        } else if (text.length > 0 && rangeLength > 0) {
                            c.Option = "replace";
                            c.Index = rangeOffset;
                            c.Text = text;
                            c.Length = rangeLength;
                            const md5 = new Md5();
                            c.Hash = String(md5.appendStr(this.editor.getModel().getValue()).end());
                            //console.log(c);
                            this.groupHistory.EReplace++;
                            this.setHistoryGroup();
                            this.socketSend(c);
                        } else if (text.length === 0 && rangeLength > 0) {
                            c.Option = "delete";
                            c.Index = rangeOffset;
                            c.Length = rangeLength;
                            const md5 = new Md5();
                            c.Hash = String(md5.appendStr(this.editor.getModel().getValue()).end());
                            //console.log(c);
                            this.groupHistory.EDelete++;
                            this.setHistoryGroup();
                            this.socketSend(c);
                        } else {
                            //console.log(change);
                        }
                    }
                    this.receivedMsg = 0;
                }
            );
        });
    }

    openSocket(code) {
        if (!this.exercise['gId'])
            return;

        if (this.editor && code) {
            const contentManager = new EditorContentManager({
                editor: this.editor,
            });
            contentManager.replace(0, code.length + 1, code);
        }

        this.cursorEditors = new Map([]);
        this.selectionEditors = new Map([]);

        this.subSocket = this.socket.getEventListener().subscribe({
            next: (event: string) => {
                if (event['data']) {
                    let codePair = {} as CodePairStr;
                    codePair = event['data'];

                    //console.log(codePair);

                    if (!this.editor || !codePair.IdGroup)
                        return;

                    if (!codePair.IdUser || !this.host.getSessionID().Id)
                        return;

                    if (this.exercise['gId'] != codePair.IdGroup)
                        return;

                    if (codePair.Option == "chatMsg") {
                        this.chatList.push({
                            IdUser: codePair.IdUser,
                            Name: codePair.UserName, Text: codePair.Text
                        });
                        return;
                    }

                    let c = {} as CodePairStr;
                    c.IdGroup = this.exercise['gId'];
                    c.IdUser = this.userId;
                    c.UserName = this.host.getSessionID().Name;

                    if (codePair.IdUser != this.userId) {

                        let remoteCursorManager;
                        let remoteSelectionManager;
                        let cursor;
                        let selection;

                        let color = this._code.getColor();

                        if (!this.cursorEditors.has(String(codePair.IdUser))) {
                            const sourceUser = {
                                id: String(codePair.IdUser),
                                label: codePair.UserName,
                                color: color
                            };

                            if (this.editor) {
                                remoteCursorManager = new RemoteCursorManager({
                                    editor: this.editor,
                                    tooltips: true,
                                    tooltipDuration: 2
                                });
                                cursor = remoteCursorManager.addCursor(sourceUser.id, sourceUser.color, sourceUser.label);
                                this.cursorEditors.set(String(codePair.IdUser), cursor);

                                remoteSelectionManager = new RemoteSelectionManager({editor: this.editor});
                                selection = remoteSelectionManager.addSelection(String(codePair.IdUser), color);
                                this.selectionEditors.set(String(codePair.IdUser), selection);
                            }
                        }

                        if (codePair.Option == "position" && this.cursorEditors.has(String(codePair.IdUser)))
                            this.cursorEditors.get(String(codePair.IdUser)).setOffset(codePair.Offset);

                        if (codePair.Option == "selection" && this.selectionEditors.has(String(codePair.IdUser))) {
                            this.selectionEditors.get(String(codePair.IdUser)).setOffsets(codePair.StartOffset, codePair.EndOffset);
                            this.selectionEditors.get(String(codePair.IdUser)).show();
                        }

                        if (codePair.Option == "insert") {
                            this.receivedMsg = 1;
                            const contentManager = new EditorContentManager({
                                editor: this.editor,
                            });
                            contentManager.insert(codePair.Offset, codePair.Text);
                        }

                        if (codePair.Option == "replace") {
                            this.receivedMsg = 1;
                            const contentManager = new EditorContentManager({
                                editor: this.editor,
                            });
                            contentManager.replace(codePair.Index, codePair.Length, codePair.Text);
                        }

                        if (codePair.Option == "delete") {
                            this.receivedMsg = 1;
                            const contentManager = new EditorContentManager({
                                editor: this.editor,
                            });
                            contentManager.delete(codePair.Index, codePair.Length);
                        }

                        if (codePair.Option == "sendCode") {
                            c.Option = "codeUpdated";
                            codePair.Hash = "";
                            c.StartOffset = this.offsetLine;
                            c.EndOffset = this.offsetCol;
                            c.Text = this.editor.getModel().getValue();
                            this.socketSend(c);
                            //console.log("sendCode", c.Hash);
                        }

                        if (codePair.Option == "codeUpdated") {
                            this.receivedMsg = 1;
                            if (!this.hideMsgUpdateCode) {
                                this._util.setResponse('The system is waiting for synchronization with your group.', 'Rsync',
                                    'info', null);
                            }
                            //this.editor.getModel().setValue(codePair.Text);
                            const contentManager = new EditorContentManager({
                                editor: this.editor,
                            });
                            contentManager.replace(0, codePair.Text.length + 1, codePair.Text);

                            //this.editor.setPosition({
                            //    lineNumber: codePair.StartOffset,
                            //    column: codePair.EndOffset
                            //});
                            //this.editor.focus();

                            this.hideMsgUpdateCode = 0;
                            codePair.Hash = "";
                        }

                        if (codePair.Option == "result") {
                            let res = "not equal";
                            if (codePair.Text == "ok")
                                res = "equal";

                            this._util.setResponse(c.UserName + " just ran a code. Result: " + res, '',
                                codePair.Text, null);

                        }

                        if (codePair.Option == "submit") {

                            this._util.setResponse(c.UserName + " Test submit a code right now. " +
                                "In a few moments, we will show the result.", '',
                                'info', null);
                        }

                        if (codePair.Option == "insert"
                            || codePair.Option == "replace"
                            || codePair.Option == "delete") {
                            this.otherUserTyping = Math.floor(Date.now() / 1000);
                            this.receivedMsg = 1;
                            this.nameUserTyping = codePair.UserName;
                        }


                        const md5 = new Md5();
                        let s1 = String(md5.appendStr(this.editor.getModel().getValue()).end());

                        if (codePair.Hash && codePair.Hash != s1
                            && (codePair.Option == "insert" || codePair.Option == "replace" ||
                                codePair.Option == "delete")) {

                            c.Option = "codeUpdated";
                            c.Text = this.editor.getModel().getValue();
                            this.socketSend(c);
                            //console.log("getCodeUpdated Request");
                            return;
                        }

                    }
                }
            }
        })
    }
}
