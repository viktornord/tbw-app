import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import {AuthService} from './auth/auth.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  private authService: AuthService;
  private router: Router;

  constructor(private injector: Injector) {
    // this is done due to the known issue
    // @see https://github.com/angular/angular/issues/18224 - Cyclic dependency error with HttpInterceptor
    setTimeout(() => {
      this.router = injector.get(Router);
      this.authService = injector.get(AuthService);
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req)
      .do(
        (event: HttpEvent<any>) => {
        },
        (err: any) => {
          console.error(err);
          alert(err.error.message);
          if (err.status === 401) {
            this.authService.logout();
            !this.router.isActive('/login', true) && this.router.navigate(['/login']);
          }
        });
  }
}
