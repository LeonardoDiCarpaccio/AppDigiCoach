import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssocPlayerMarkAutoEvalService {

  constructor(private http : HttpClient) { }


  getassoc_player_mark_auto_eval(data : any){
    return this.http.post<any>(`${environment.apiUrl}/assoc_player_mark_auto_eval`,data)
  }

  updateassoc_player_mark_auto_eval(data : any){
    return this.http.post<any>(`${environment.apiUrl}/assoc_player_mark_auto_eval/update`,data)
  }

  insertassoc_player_mark_auto_eval(data : any){
    return this.http.post<any>(`${environment.apiUrl}/assoc_player_mark_auto_eval/insert`,data)
  }

  deleteassoc_player_mark_auto_eval(data : any){
    return this.http.post<any>(`${environment.apiUrl}/assoc_player_mark_auto_eval/delete`,data)
  }
}
