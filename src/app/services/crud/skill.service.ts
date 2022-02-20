import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(private http : HttpClient) { }


  getskill(data : any){
    return this.http.post<any>(`${environment.apiUrl}/skill`,data)
  }

  updateskill(data : any){
    return this.http.post<any>(`${environment.apiUrl}/skill/update`,data)
  }

  insertskill(data : any){
    return this.http.post<any>(`${environment.apiUrl}/skill/insert`,data)
  }

  deleteskill(data : any){
    return this.http.post<any>(`${environment.apiUrl}/skill/delete`,data)
  }
}
