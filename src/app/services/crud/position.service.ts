import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  constructor(private http : HttpClient) { }


  getposition(data : any){
    return this.http.post<any>(`${environment.apiUrl}/position`,data)
  }

  updateposition(data : any){
    return this.http.post<any>(`${environment.apiUrl}/position/update`,data)
  }

  insertposition(data : any){
    return this.http.post<any>(`${environment.apiUrl}/position/insert`,data)
  }

  deleteposition(data : any){
    return this.http.post<any>(`${environment.apiUrl}/position/delete`,data)
  }

}
