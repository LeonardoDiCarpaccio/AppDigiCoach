import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/crud/user.service';
import { PreviewPlayerService } from 'src/app/services/preview-player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  infos : any
  averagePhy : any
  averageTac : any
  averageTec : any
  averageMen : any

  viewALL : boolean = false

  pathLogoClub= ''
  AltClub = ''
  constructor(private auth: AuthService, private user: UserService, private previewPlayer : PreviewPlayerService) { }

 async ngOnInit() {
    this.infos = await this.user.getUser({where:{id : this.auth.getId()}}).toPromise()
    console.log(this.infos,"this.infos")
    this.clubLogo()
    this.skillAverage()
    this.viewALL=true
  }

  clubLogo(){
    if(this.infos[0].id_club==1){
      this.pathLogoClub='ogcnice.png'

    }
  }
  // Meme principe mais avec le pays dorigine du joueur
async skillAverage(){
 await this.previewPlayer.getPlayerAverageMarkPerSkillType({id_user : this.auth.getId()}).subscribe((res)=>{
   console.log(res,"res")

this.averagePhy = res.find((name)=> name.name_type_skill=="physique") ? res.find((name)=> name.name_type_skill=="physique").average : "N/N"
this.averageTac = res.find((name)=> name.name_type_skill=="tactique") ? res.find((name)=> name.name_type_skill=="physique").average : "N/N"
this.averageTec = res.find((name)=> name.name_type_skill=="technique") ? res.find((name)=> name.name_type_skill=="physique").average : "N/N"
this.averageMen = res.find((name)=> name.name_type_skill=="mental") ? res.find((name)=> name.name_type_skill=="physique").average : "N/N"
// this
},err=>{
  // this.alert.error("Il y a un soucis")

})
  }


}
