import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/components/footer/snackbar/snackbar.component';
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
  autoEvalNotif : any

  viewALL : boolean = false
  Notif : boolean = true

  pathLogoClub= ''
  AltClub = ''
  constructor(private auth: AuthService, private user: UserService, private previewPlayer : PreviewPlayerService,
     private _snackbar : MatSnackBar,
     private snackBarRef : MatSnackBar,
     private router : Router) { }

 async ngOnInit() {
    this.infos = await this.user.getUser({where:{id : this.auth.getId()}}).toPromise()
    this.autoEvalNotif = await this.previewPlayer.getHasPendingAutoEval({id_player : this.auth.getId()}).toPromise()

    this.clubLogo()
    this.skillAverage()
    this.openSnackBarOn()

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

this.averagePhy = res.find((name)=> name.name_type_skill=="physique") ? res.find((name)=> name.name_type_skill=="physique").average + "/4" : "N/N"
this.averageTac = res.find((name)=> name.name_type_skill=="tactique") ? res.find((name)=> name.name_type_skill=="tactique").average + "/4": "N/N"
this.averageTec = res.find((name)=> name.name_type_skill=="technique") ? res.find((name)=> name.name_type_skill=="technique").average + "/4" : "N/N"
this.averageMen = res.find((name)=> name.name_type_skill=="mental") ? res.find((name)=> name.name_type_skill=="mental").average + "/4" : "N/N"


},err=>{
  // this.alert.error("Il y a un soucis")

})
  }

  openSnackBarOn() {

    if(this.autoEvalNotif){

      this._snackbar.open("Auto eval en cour", 'GO', {panelClass: 'my-custom-snackbar'}).afterDismissed().subscribe(info => {
        if (info.dismissedByAction === true) {
          // your code for handling this goes here
          this.router.navigate(['/auto-eval'])
        }
      })

    }

  }

}
