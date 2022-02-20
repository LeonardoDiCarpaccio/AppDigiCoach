import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http : HttpClient) { }


  getTeam(data : any){
    return this.http.post<any>(`${environment.apiUrl}/team`,data)
  }

  updateTeam(data : any){
    return this.http.post<any>(`${environment.apiUrl}/team/update`,data)
  }

  insertTeam(data : any){
    return this.http.post<any>(`${environment.apiUrl}/team/insert`,data)
  }

  deleteTeam(data : any){
    return this.http.post<any>(`${environment.apiUrl}/team/delete`,data)
  }}
