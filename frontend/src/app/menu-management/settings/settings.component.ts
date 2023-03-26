import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {ParamStr, RequestStr, ResponseStr} from "../../_model/service";
import {HostService} from "../../_services/host.service";
import {EventEmitterService} from "../../_services/event-emitter.service";
import {UtilControl} from "../../_control/util.control";
import {ConfigurationStr} from "../../_model/config";

@Component({
  selector: 'settings-module',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  config = {} as ConfigurationStr;

  response = {} as ResponseStr;

  CodeMaxFileSize='';

  constructor(
    private formBuilder: FormBuilder,
    private host: HostService,
    private router: Router,
    public _util: UtilControl,
    private _eventEmitter: EventEmitterService,
  ){
    this.host.checkSessionID(this.constructor.name);
  }

  ngOnInit() {

    function alphaNumericValidator(control: FormControl): ValidationErrors | null {
      return /^[a-zA-Z0-9_]*$/.test(control.value) ? null : { alphaNumeric: true };
    }

    this.registerForm = this.formBuilder.group({
      PublicInterface: ['',
        [
          Validators.minLength(4),
          Validators.maxLength(15),
        ]
      ],
      BackendPort: ['',
        [
          Validators.min(1500),
          Validators.max(65534),
        ]
      ],
      FrontendPort: ['',
        [
          Validators.min(1500),
          Validators.max(65534),
        ]
      ],
      WebSocketPort: ['',
        [
          Validators.min(1500),
          Validators.max(65534),
        ]
      ],
      StartContainers: ['',
        [
          Validators.min(0),
          Validators.max(65534),
        ]
      ],
      MaxContainers: ['',
        [
          Validators.min(0),
          Validators.max(65534),
        ]
      ],
      OperationMode: ['',[]],
      NodeMode: ['',[]],
      ClusterName: ['',
        [
          Validators.minLength(4),
          Validators.maxLength(20),
          alphaNumericValidator,
        ]
      ],
      ClusterPassword: ['',
        [
          Validators.minLength(4),
          Validators.maxLength(20),
        ]
      ],
      HostUser: ['',
        [
          Validators.minLength(4),
          Validators.maxLength(20),
        ]
      ],
      HostPassword: ['',
        [
          Validators.minLength(4),
          Validators.maxLength(20),
        ]
      ],
      SelfRegistration: ['',[]],
      CodeExecTimeout: ['',
        [
          Validators.min(10),
          Validators.max(1000),
        ]
      ],
      CodeMaxFileSize: ['',
        [
          Validators.min(1),
          Validators.max(10000000000),
        ]
      ],
      Queue: ['',[]],
      MaxConcurrency: ['',
        [
          Validators.min(1),
          Validators.max(1000),
        ]
      ],
      Debug: ['',[]],
      Error: ['',[]],
      SmtpServer: ['',[]],
      SmtpPort: ['',
        [
          Validators.min(1),
          Validators.max(65534),
        ]
      ],
      SmtpUser: ['',[]],
      SmtpPassword: ['',[]],
      DbHost: ['',[]],
      DbPort: ['',
        [
          Validators.min(1),
          Validators.max(65534),
        ]
      ],
      DbUser: ['',[]],
      DbPassword: ['',[]],
    }, {});

    this.getConfigs();
  }

  get fe() { return this.registerForm.controls; }

  getConfigs() {
    let params: ParamStr[] = [];

    let request: RequestStr = {
      Request: "settings",
      Param: params,
    };

    this.host.request(request, 'simpleRequest')
      .subscribe(data => {
        //console.log("Settings | getConfigs: ", data);
        this.registerForm.setValue(data);
      });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.config.PublicInterface = this.fe['PublicInterface'].value.toString();
    this.config.BackendPort = this.fe['BackendPort'].value.toString();
    this.config.FrontendPort = this.fe['FrontendPort'].value.toString();
    this.config.WebSocketPort = this.fe['WebSocketPort'].value.toString();
    this.config.ClusterName = this.fe['ClusterName'].value.toString();
    this.config.ClusterPassword = this.fe['ClusterPassword'].value.toString();
    this.config.NodeMode = this.fe['NodeMode'].value.toString();
    this.config.OperationMode = this.fe['OperationMode'].value.toString();
    this.config.MaxContainers = this.fe['MaxContainers'].value.toString();
    this.config.StartContainers = this.fe['StartContainers'].value.toString();
    this.config.HostUser = this.fe['HostUser'].value.toString();
    this.config.HostPassword = this.fe['HostPassword'].value.toString();
    this.config.SelfRegistration = this.fe['SelfRegistration'].value.toString();
    this.config.CodeExecTimeout = this.fe['CodeExecTimeout'].value.toString();
    this.config.CodeMaxFileSize = this.fe['CodeMaxFileSize'].value.toString();
    this.config.Queue = this.fe['Queue'].value.toString();
    this.config.MaxConcurrency = this.fe['MaxConcurrency'].value.toString();
    this.config.Debug = this.fe['Debug'].value.toString();
    this.config.Error = this.fe['Error'].value.toString();
    this.config.SmtpServer = this.fe['SmtpServer'].value.toString();
    this.config.SmtpPassword = this.fe['SmtpPassword'].value.toString();
    this.config.SmtpPort = this.fe['SmtpPort'].value.toString();
    this.config.SmtpUser = this.fe['SmtpUser'].value.toString();
    this.config.DbHost = this.fe['DbHost'].value.toString();
    this.config.DbUser = this.fe['DbUser'].value.toString();
    this.config.DbPort = this.fe['DbPort'].value.toString();
    this.config.DbPassword = this.fe['DbPassword'].value.toString();


    this.host.request(this.config, 'setConfigs')
      .subscribe( data => {
        this.response = data;
        //console.log("Users onSubmit | edit: ", this.registerForm.value);
      });
  }

  getInputMaxFileSize(input) {
    this.CodeMaxFileSize = this._util.formatBytes(input.path[0].value);
  }

}

