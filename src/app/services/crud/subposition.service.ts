import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubpositionService {
  constructor(private http : HttpClient) { }


  getsub_position(data : any){
    return this.http.post<any>(`${environment.apiUrl}/sub_position`,data)
  }

  updatesub_position(data : any){
    return this.http.post<any>(`${environment.apiUrl}/sub_position/update`,data)
  }

  insertsub_position(data : any){
    return this.http.post<any>(`${environment.apiUrl}/sub_position/insert`,data)
  }

  deletesub_position(data : any){
    return this.http.post<any>(`${environment.apiUrl}/sub_position/delete`,data)
  }
}
