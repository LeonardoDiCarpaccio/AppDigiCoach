import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  constructor(private http : HttpClient) { }


  getMark(data : any){
    return this.http.post<any>(`${environment.apiUrl}/mark`,data)
  }

  updateMark(data : any){
    return this.http.post<any>(`${environment.apiUrl}/mark/update`,data)
  }

  insertMark(data : any){
    return this.http.post<any>(`${environment.apiUrl}/mark/insert`,data)
  }

  deleteMark(data : any){
    return this.http.post<any>(`${environment.apiUrl}/mark/delete`,data)
  }

}
