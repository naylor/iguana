import {map} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {HostService} from "../_services/host.service";
import {Router} from "@angular/router";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
      private host: HostService,
      private router: Router,
  ){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log(request);

    if (window.localStorage.getItem("ForceChangePass") == "1")
      this.router.navigate(['edit-user']);

    let session = JSON.stringify(this.host.getSessionID());
    let auth = [];
    auth[0] = this.host.encrypt(session);
    auth[1] = localStorage.getItem('OWNER');

    request = request.clone({
      setHeaders: {
        Authorization: auth,
      }
    });

    return next.handle(request).pipe(
        // We use the map operator to change the data from the response
        map(resp => {

          //Exceptions
          if (request.url.indexOf('assets') != -1 ||
              request.url == "/api/fileRequest" ||
            request.url == "/api/fileResponse")
            return resp;

          if (resp instanceof HttpResponse) {
            // and make changes to it, then return that clone
            return  resp.clone({ body: this.host.decrypt(resp.body) });
          }
        })
    );
  }
}
