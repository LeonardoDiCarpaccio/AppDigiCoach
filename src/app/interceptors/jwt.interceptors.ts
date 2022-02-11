import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router} from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthService,
        private router: Router) { }
        currentUserSubject : any
        currentUser : any

        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            // add authorization header with jwt token if available
              let a = localStorage.getItem("user")
          if(a != null){
let b = JSON.parse(a)
            request = request.clone({
              setHeaders: {
                  'x-access-token': `${b.token}`
              }
          });
          }


            return next.handle(request);
        }
}
