import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
// import { AuthService } from '../../auth/auth.service';

@Injectable()
export class Interceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // const authToken = this.authService.getAuthorizationToken();
    const authReq = req.clone({
      url: environment.server_url + req.url,
      // headers: req.headers.set('Authorization', authToken),
    });

    return next.handle(authReq).pipe(
      tap((result: any) => {
        // console.log(result.type); RESULT (0 = SEND)  (4 === NO_OK)

        if (!environment.production && result.type !== 0) {
          console.log(
            `[${req.method}] ${req.url}: `,
            JSON.stringify(req.body),
            JSON.stringify(result.body)
          );
        }
      }),
      catchError((error) => {
        if (error && error.error && error.error.message) {
          if (error.status !== 401) {
            // TODO: MOSTRAR
          } else {
            // this.authService.logout();
          }
        } else {
          // TODO: MOSTRAR
        }
        if (!environment.production) {
          console.log(
            `[${req.method}] ${req.url}: `,
            JSON.stringify(req.body),
            JSON.stringify(error.error)
          );
        }
        return throwError(error);
      })
    );
  }
}
