import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http : HttpClient) { }

  
  getClub(data : any){
    return this.http.post<any>(`${environment.apiUrl}/club`,data)
  }

  updateClub(data : any){
    return this.http.post<any>(`${environment.apiUrl}/club/update`,data)
  }

  insertClub(data : any){
    return this.http.post<any>(`${environment.apiUrl}/club/insert`,data)
  }

  deleteClub(data : any){
    return this.http.post<any>(`${environment.apiUrl}/club/delete`,data)
  }

}
