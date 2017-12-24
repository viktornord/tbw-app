import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';
import {AuthTokenService} from './auth/auth-token.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private authTokenService: AuthTokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modifiedRequest = req.clone({url: `${environment.apiBaseURL}${req.url}`});

    return next.handle(this.authTokenService.hasAccessToken() ? this.signRequest(modifiedRequest) : modifiedRequest);
  }

  signRequest(req) {
    const accessToken = this.authTokenService.getAccessToken();

    return req.clone({headers: req.headers.set('Authorization', `Bearer ${accessToken}`)});
  }
}
