import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {HostService} from "../../_services/host.service";
import {HostInfoStr} from "../../_model/hostInfo";
import {AuthStr, ParamStr, RequestStr, ResponseStr, UniversalDTOStr} from "../../_model/service";
import {EventEmitterService} from "../../_services/event-emitter.service";
import {Router} from "@angular/router";
import {dialogStr} from "../../_model/dialog";
import {Subscription} from "rxjs";
import {UtilControl} from "../../_control/util.control";

@Component({
  selector: 'app-host-login',
  templateUrl: './host-login.component.html',
  styleUrls: ['./host-login.component.css']
})

export class HostLoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  userSession = {} as AuthStr;

  hostInfo = {} as HostInfoStr;
  subHostInfo: Subscription;
  response = {} as ResponseStr;

  constructor(
      private formBuilder: FormBuilder,
      private host: HostService,
      private _eventEmitter: EventEmitterService,
      private router: Router,
      public _util: UtilControl,
  ){ }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      owner: ['',
        [Validators.required,
          Validators.minLength(3),
        ]
      ],
      password: ['',
        [Validators.required,
          Validators.minLength(3),
        ]
      ],
    }, {});

    this.userSession = this.host.getSessionID();

    this.subHostInfo = this._eventEmitter.hostInfo.subscribe(
        data => {
          this.hostInfo = data;
        },
    );

  }

  ngOnDestroy() {
    this.subHostInfo.unsubscribe();
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  checkChangePass(): void {
    let filter: ParamStr[] = [];
    filter.push({Name: "Email", Value: this.userSession.Owner});

    let requestDB: UniversalDTOStr = {
      Operation: "view",
      TableData: null,
      Custom: "host-credentials",
      Filter : filter,
    };
    window.localStorage.setItem("ForceChangePass", "0");

    this.host.request(requestDB, 'FDBRequest')
        .subscribe( data => {
          if (data && data[0]['ForceChangePass'] == "1") {
            window.localStorage.setItem("ForceChangePass", "1");
            this.router.navigate(['edit-user']);
            //console.log(data, window.localStorage.getItem("ForceChangePass"));
          }
        });
  };

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this._util.setResponse(this.response['Status'], this.response['Name'], null, null);

    let hostInfoTemp = this.hostInfo;

    hostInfoTemp['Owner'] = this.registerForm.get('owner').value;
    hostInfoTemp['Password'] = this.registerForm.get('password').value;

    this.host.request(hostInfoTemp, 'setLogin')
        .subscribe(data => {
          this.response = data;
          if (this.response['Name'] == "Admin" || this.response['Name'] == "User") {
            this.host.setSessionID(hostInfoTemp['Owner'], this.response['Name'], this.response['Status']);
            this.userSession = this.host.getSessionID();

            //console.log("App Host-Credential | userSession: ", data);
            this._util.setResponse("Login successfully!", "ok", null, null);

            // We will notify the root app about new login
            this._eventEmitter.setLoginChange({Name: "startSession", Status: ""});
            this.checkChangePass();
            this.router.navigate(['welcome']);

          } else {
            this._util.setResponse(this.response['Status'], this.response['Name'], null, null);

            //this.registerForm.reset();
            //this.f['owner'].clearValidators();
            //this.f['owner'].setErrors({ 'generic': this.response['Status'] });
            return;
          }
        });
  }

  recoverPassword() {
    this.response = {} as ResponseStr;

    let input: dialogStr[] = [];

    input.push({Model: "", Name: "email", Type: "text",  Title: "email account"});

    let ret = this._util.openModal('Recover Password',
        'Please enter your login email. \n' +
        'If the account exists in our database, we will send you an email for password recovery.',
        'Yes', 'No', input);

    ret.afterClosed().subscribe(data => {

      if (data && data['button'] == 'YES') {
        if (!data['input'][0]['Model'] ||
            data['input'][0]['Model'] == "") {
          this.response['Name'] = "error";
          this.response['Status'] = "Please, type a email account...";
          return;
        }

        let email;

        if (data['input'][0] && data['input'][0]['Model'] != "")
          email = data['input'][0]['Model'];

        let params: ParamStr[] = [];
        params.push({Name:"email", Value: email});

        let request: RequestStr = {
          Request: "recoverPassword",
          Param: params,
        };

        this._util.setResponse("Sending request for password recovery...", "info", null, null);

        this.host.request(request, 'simpleRequest')
            .subscribe(data => {
              this.response = data;
              //console.log('Host-Credentials: data ', data);
              this._util.setResponse(this.response['Status'], this.response['Name'], null, null);
            });
      }
    });

  }

}
