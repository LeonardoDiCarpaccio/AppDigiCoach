import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AssocUserPositionService } from 'src/app/services/crud/assoc-user-position.service';
import { AssocPlayerTeam } from 'src/app/services/crud/assoc_player_team.service';
import { UserService } from 'src/app/services/crud/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],

})
export class ProfileComponent implements OnInit {

  constructor(private auth : AuthService,private assocPlayerTeamServices : AssocPlayerTeam,private router : Router,
    private assocPlayerPositionServices : AssocUserPositionService,private userServices : UserService,
    ) { }
  arr_position : any = []
  arr_team : any = []
  usObject : any
  editingMode = false
  update : any

  viewAll = false
 async ngOnInit() {
    this.arr_position = await this.assocPlayerPositionServices.getPositionUser({where : {id_user : this.auth.getId()},join : {type : "INNER JOIN",tableJoin : "poste",keyFrom : "id_position",keyJoin : "id"}}).toPromise()
    this.arr_team = await this.assocPlayerTeamServices.getTeamUser({where : {id_user : this.auth.getId()},join : {type : "INNER JOIN",tableJoin : "team",keyFrom : "id_team",keyJoin : "id"}}).toPromise()
    this.getUser()
  }

async getUser(){
  this.viewAll = false
  let us = await this.userServices.getUser({where : {id : this.auth.getId()}}).toPromise()
  this.usObject = us[0]
  this.update = {firstname_user : this.usObject.firstname_user,
    name_user : this.usObject.name_user,
    date_birth_user : this.usObject.date_birth_user
  }
this.viewAll = true
}


async updateUser(){

  if(this.checkForUpdate()){
        this.checkIfNeedToFormatDate()
        await this.userServices.updateUser({where : {id : this.auth.getId()},update : this.update}).subscribe((res)=>{
            this.getUser()
            this.startEditingMode()
        },err=>{
          alert("Il y a eu une erreur")
        })

  }
}

checkForUpdate(){
    if(this.usObject.firstname_user == this.update.firstname_user && this.usObject.name_user == this.update.name_user && this.usObject.date_birth_user == this.update.date_birth_user.substring(0,10)){
      return false
    }else{
      return true
    }
}

checkIfNeedToFormatDate(){
  if(this.usObject.date_birth_user != this.update.date_birth_user.substring(0,10)){
      this.update.date_birth_user = this.update.date_birth_user.substring(0,10)
  }
}


startEditingMode(){
  this.editingMode = !this.editingMode
}


goToUpdatePassword(){
  this.router.navigate(['/update-password',"profile"])
}

  disconnect(){
    this.auth.disconnect()
  }

}
