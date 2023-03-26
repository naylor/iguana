import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HostService} from "../../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../../_services/event-emitter.service";
import {ParamStr, ResponseStr, UniversalDTOStr} from "../../../_model/service";
import {MatDialog} from "@angular/material/dialog";
import ClassicEditor from '@haifahrul/ckeditor5-build-rich';
import {ClassroomStr} from "../../../_model/classroom";
import {UtilControl} from "../../../_control/util.control";

@Component({
    selector: 'classroom-app-edit',
    templateUrl: './classroom-edit.component.html',
    styleUrls: ['./classroom-edit.component.css']
})
export class ClassroomEditComponent implements OnInit {
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
            shouldNotGroupWhenFull: true,
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

    classroomId: number;
    submitted = false;
    disabled: boolean;

    responseEdit = {} as ResponseStr;
    classroom = {} as ClassroomStr;

    constructor(
        private host: HostService,
        public dialog: MatDialog,
        private formBuilder: FormBuilder,
        private router: Router,
        private _eventEmitter: EventEmitterService,
        private _util: UtilControl,
    ) {
        this.host.checkSessionID(this.constructor.name);
    }

    ngOnInit() {
        this.editForm = this.formBuilder.group({
            Id: [''],
            IdUser: [''],
            Enabled: [''],
            Name: ['',
                [Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(50),
                ]
            ],
            KeyAccess: ['',
                [,
                    Validators.maxLength(60),
                ]
            ],
            Description: ['', []],
            MaxStudents: ['',
                [,
                    Validators.max(100),
                ]
            ],
        });

        this.classroomId = Number(window.localStorage.getItem("ClassroomId"));
        window.localStorage.setItem('waitLoadComponent', 'N');

        if (this.classroomId)
            this.getClassroom();
    }

    setRoute(val) {
        this.getClassroom();
        this.waitLoadComponent();
        this.router.navigate([val])
    }

    getClassroom() {
        let filter: ParamStr[] = [];
        filter.push({Name: "Id", Value: String(this.classroomId)});

        let requestDB: UniversalDTOStr = {
            Operation: "view",
            TableData: null,
            Custom: "classroom-edit",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                if (!data) return;
                this.editForm.setValue(data[0]);
                this.classroom = data[0];
            });
    }

    // convenience getter for easy access to form fields
    get fe() {
        return this.editForm.controls;
    }

    async waitLoadComponent() {
        let waitLoad = 'N';
        let loop = true;
        while (loop) {
            await this.delay(100);
            if (waitLoad == 'S') {
                loop = false;
            }
            waitLoad = window.localStorage.getItem("waitLoadComponent");
        }
        this._eventEmitter.setClassroom(this.classroom);
    }

    private delay(ms: number): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }

    onSubmit() {
        this.responseEdit = {} as ResponseStr;

        this.submitted = true;
        this.disabled = true;

        // stop here if form is invalid
        if (this.editForm.invalid) {
            return;
        }

        let filter: ParamStr[] = [];
        let requestDB: UniversalDTOStr = {
            Operation: "update",
            TableData: this.editForm.value,
            Custom: "Classroom",
            Filter: filter,
        };

        this.host.request(requestDB, 'FDBRequest')
            .subscribe(data => {
                this.responseEdit = data;

                if (!this.classroomId && this.responseEdit.Name == "ok" && parseInt(this.responseEdit.Status) > 0) {
                    this.classroomId = Number(this.responseEdit.Status);
                    window.localStorage.setItem("ExerciseId", String(this.classroomId));
                    this.responseEdit.Status = "Record inserted successfully.";

                } else if (this.classroomId && this.responseEdit.Name == "ok") {
                    this.responseEdit.Status = "Record updated successfully.";
                }

                this.getClassroom();

                this.waitLoadComponent();

                this._util.setResponse(this.responseEdit.Status, 'Go to Classroom',
                    this.responseEdit.Name, 'view-classroom');

            });
    }

}
