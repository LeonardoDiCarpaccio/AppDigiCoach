import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            if (err.status === 500) {

            }
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                localStorage.removeItem('user');
            }
            if (err.status === 404) {

                this.router.navigate(['/']);
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
