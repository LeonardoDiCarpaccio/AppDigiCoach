import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  id_user : any

  constructor(private http : HttpClient,private router : Router) { }

  login(data: any) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, data)
      .pipe(map(user => {
        this.id_user = user.id
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/home'])

      }));
  }


  async getMe() {
    await this.http.post<any>(`${environment.apiUrl}/auth/check`, {}).subscribe(res => {

      this.router.navigate(['/home'])

    }, err => {
      alert("Reconnexion")
    })
  }
}
