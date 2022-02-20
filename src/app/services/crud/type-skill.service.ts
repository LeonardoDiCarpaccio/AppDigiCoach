import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeSkillService {

  constructor(private http : HttpClient) { }


  gettype_skill(data : any){
    return this.http.post<any>(`${environment.apiUrl}/type_skill`,data)
  }

  updatetype_skill(data : any){
    return this.http.post<any>(`${environment.apiUrl}/type_skill/update`,data)
  }

  inserttype_skill(data : any){
    return this.http.post<any>(`${environment.apiUrl}/type_skill/insert`,data)
  }

  deletetype_skill(data : any){
    return this.http.post<any>(`${environment.apiUrl}/type_skill/delete`,data)
  }}
