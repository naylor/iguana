import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {catchError, map, retry} from "rxjs/internal/operators";
import {HttpClient, HttpErrorResponse, HttpEvent, HttpParams, HttpRequest,} from "@angular/common/http";
import {AuthStr} from "../_model/service";
import * as CryptoJS from 'crypto-js';
import {empty} from "rxjs/internal/Observer";
import {Router} from "@angular/router";
import {SettingsComponent} from "../menu-management/settings/settings.component";

@Injectable({
  providedIn: 'root'
})

export class HostService {

  constructor(private http: HttpClient,
              private router: Router,
  ) {
  }

  ///////////// BACKEND CALL API /////////////////////////////////
  request(data, call): Observable<any> {

    //console.log("Host-Service | data, call", data, call);

    //CALLs ///////////////
    // simpleRequest
    // dbRequest
    // dbUpdate
    // setLogin
    // runExecCode
    // setOpMode
    // setConfigs

    return this.http.post<any>('/api/' + call,
        this.encrypt(JSON.stringify(data)),
        {responseType: 'text' as 'json'})
        .pipe(
            map(response => {
              return JSON.parse(response);
            }),
            retry(1),
            catchError((err: HttpErrorResponse) => {
              if (data['Request'] == "hostInfo")
                return '-';
              else
                return throwError(empty);
            })
        )
  }

  uploadFileData(file: File, metadata): Observable<HttpEvent<any>> {

    let formData = new FormData();

    formData.append('metadata', new Blob([JSON.stringify(metadata)], {type: 'application/json'}));
    formData.append('media', file);

    let params = new HttpParams();

    const options = {
      params: params,
      reportProgress: true,
    };

    const req = new HttpRequest('POST', '/api/fileRequest', formData, options);
    return this.http.request(req);
  }

  downloadFileData(data, option) {
    let auth = this.getSessionID();
    data = this.encrypt(JSON.stringify(data));
    option = this.encrypt(option);

    location.href = '/api/fileResponse?user=' + encodeURIComponent(auth.Owner) +
        '&option=' + encodeURIComponent(option) +
        '&data=' + encodeURIComponent(data);
  }

  /////////// FRONTEND FUNCTIONS //////////////
  CodeExample(example) {
    //console.log("CodeExample: ", example);
    return this.http.get('assets/' + example + '.c', {responseType: 'text'})
        .toPromise();
  }

  killSessionID() {
    localStorage.clear();
  }

  setSessionID(owner, module, params) {
    localStorage.setItem('OWNER', owner);
    localStorage.setItem('MODULE', module);

    let param = params.split("|");

    localStorage.setItem('ID', param[0]);
    localStorage.setItem('PASS', param[1]);
    localStorage.setItem('TOKEN', param[2]);
    localStorage.setItem('NAME', param[3]);
  }

  getSessionID() {
    let auth = {} as AuthStr;

    auth.Owner = localStorage.getItem('OWNER');
    auth.Password = localStorage.getItem('PASS');
    auth.Name = localStorage.getItem('NAME');
    auth.Module = localStorage.getItem('MODULE');
    auth.Id = Number(localStorage.getItem('ID'));
    auth.Token = localStorage.getItem('TOKEN');

    if ((auth.Owner == "" || auth.Owner == "undefined" || auth.Owner == null)
        && auth.Module != "SelfRegistration")
      return auth = {Owner: "", Password: "", Name: "", Module: "", Id: null, Token: ""};

    return auth
  }

  checkSessionID(service) {
    let admin = [
        'ClusterAvailableComponent',
        'SettingsComponent',
        'CurrentNodesComponent',
        'ClassroomManagerComponent',
    ];

    if (this.getSessionID().Module == 'SelfRegistration')
      return

    if (this.getSessionID().Id == null || !this.getSessionID()) {
      this.router.navigate(['welcome']);
    }

    if (this.getSessionID().Module != 'Admin' && admin.includes(service)) {
      this.router.navigate(['welcome']);
    }

  }

  encrypt(value: string): string {
    let token = "NPZ8fvABP5pKSwU3";
    if (localStorage.getItem('OWNER'))
      token = localStorage.getItem('TOKEN');

    return CryptoJS.AES.encrypt(value, token.trim()).toString();
  }

  decrypt(textToDecrypt) {
    let token = "NPZ8fvABP5pKSwU3";
    if (localStorage.getItem('OWNER'))
      token = localStorage.getItem('TOKEN');

    let d = CryptoJS.AES.decrypt(textToDecrypt, token.trim()).toString(CryptoJS.enc.Utf8);

    if (d) {
      try {
        let o = JSON.parse(d);
        if (o["Name"] == "error" && o["Status"] == "token") {
          localStorage.setItem('TOKEN', 'error');
        }
      } catch (e) {
      }
    }

    return d;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, result);

      return of(result as T);
    };
  }
}
