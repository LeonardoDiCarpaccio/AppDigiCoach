import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssocPlayerTeam {

  constructor(private http : HttpClient) { }


  getIdTeamUser(data : any){
  return this.http.post<any>(`${environment.apiUrl}/assoc_player_team/`,data)
}

}

