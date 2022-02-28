import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssocUserPositionService {

  constructor(private http : HttpClient) { }


getPositionUser(data : any){
  return this.http.post<any>(`${environment.apiUrl}/assoc_user_position/`,data)
}

}



