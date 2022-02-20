import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoEvalService {

  constructor(private http : HttpClient) { }

  getauto_eval(data : any){
    return this.http.post<any>(`${environment.apiUrl}/auto_eval`,data)
  }

  updateauto_eval(data : any){
    return this.http.post<any>(`${environment.apiUrl}/auto_eval/update`,data)
  }

  insertauto_eval(data : any){
    return this.http.post<any>(`${environment.apiUrl}/auto_eval/insert`,data)
  }

  deleteauto_eval(data : any){
    return this.http.post<any>(`${environment.apiUrl}/auto_eval/delete`,data)
  }

}
