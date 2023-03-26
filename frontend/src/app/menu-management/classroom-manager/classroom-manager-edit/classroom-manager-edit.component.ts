import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HostService} from "../../../_services/host.service";
import {Router} from "@angular/router";
import {EventEmitterService} from "../../../_services/event-emitter.service";
import {ParamStr, ResponseStr, UniversalDTOStr} from "../../../_model/service";
import {MatSnackBar} from "@angular/material/snack-bar";
import ClassicEditor from '@haifahrul/ckeditor5-build-rich';
import {UsersStr} from "../../../_model/users";
import {ClassroomStr} from "../../../_model/classroom";
import {UtilControl} from "../../../_control/util.control";

@Component({
  selector: 'classroom-manager-app-edit',
  templateUrl: './classroom-manager-edit.component.html',
  styleUrls: ['./classroom-manager-edit.component.css']
})
export class ClassroomManagerEditComponent implements OnInit {
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

  registerForm: FormGroup;
  submitted = false;

  response = {} as ResponseStr;
  users: UsersStr[] = [];

  ForceChangePass: string;

  classroomId: number;

  constructor(
      private formBuilder: FormBuilder,
      private host: HostService,
      private router: Router,
      private _eventEmitter: EventEmitterService,
      private _snackBar: MatSnackBar,
      private _util: UtilControl,
  ){
    this.host.checkSessionID(this.constructor.name);
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
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
      Enabled: ['', []],
      Id: ['', []],
      IdUser: ['',Validators.required],
    }, {});

    if (window.localStorage.getItem("editClassroomId"))
      this.classroomId = Number(window.localStorage.getItem("editClassroomId"));

    this.getUsers();

    if (this.classroomId)
      this.getClassrooms(this.classroomId);

  }

  get fe() {
    return this.registerForm.controls;
  }

  getClassrooms(classroomId) {
    let filter: ParamStr[] = [];

    if (classroomId) {
      filter.push({Name: 'Id', Value: String(classroomId)});

      let requestDB: UniversalDTOStr = {
        Operation: "view",
        TableData: null,
        Custom: "classroom-edit",
        Filter: filter,
      };

      this.host.request(requestDB, 'FDBRequest')
          .subscribe(data => {
            if (data)
              this.registerForm.setValue(data[0]);
          });
    }
  }

  setRoute(val) {
    this.router.navigate([val])
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let filter: ParamStr[] = [];
    let requestDB: UniversalDTOStr = {
      Operation: "update",
      TableData: this.registerForm.value,
      Custom: "Classroom",
      Filter: filter,
    };
    //console.log(requestDB);

    this.host.request(requestDB, 'FDBRequest')
        .subscribe(data => {
          this.response = data;

          if (this.response.Name == "ok") {
            if (!this.classroomId)
              this.response.Status = "Record inserted successfully.";
            else
              this.response.Status = "Record updated successfully.";

            let n = {} as ClassroomStr;
            this._eventEmitter.setClassroom(n);
          }

          this._util.setResponse(this.response.Status, 'Go to Classroom',
              this.response.Name, 'view-classroom-manager');

        });
  }

  getUsers() {
    let filter: ParamStr[] = [];

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "users",
      Filter: filter,
    };

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          this.users = data;
        });
  }

}
