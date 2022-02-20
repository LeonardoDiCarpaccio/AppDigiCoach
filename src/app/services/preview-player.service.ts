import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreviewPlayerService {

  constructor(private http : HttpClient) { }

  getPlayerAverageMarkPerSkillType(data : any){
    return this.http.post<any>(`${environment.apiUrl}/preview/previewPlayer/getAverageByTypeSkillAndPlayer`,data)
  }

}
