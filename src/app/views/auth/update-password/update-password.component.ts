import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
})
export class UpdatePasswordComponent implements OnInit {

  oldpassword =""
  confirmpassword = ""
  newpassword = ""
  pathToReturn : any
  constructor(private auth : AuthService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
      this.pathToReturn = this.route.snapshot.paramMap.get("route")
  }


  async confirm(){
      if(this.checkIfOk()){
        await this.auth.updatePassword({id_user : this.auth.getId(),new_password : this.newpassword,old_password : this.oldpassword}).subscribe((res)=>{
          this.auth.disconnect()
        },err=>{
          alert("Il y a eu une erreur")
        })
      }else{
        alert("Des conditions n'ont pas été respectés")
      }
  }

  checkIfOk(){
    if(this.oldpassword != "" && this.confirmpassword != "" && this.newpassword != "" &&this.confirmpassword == this.newpassword ){
      return true
    }else{
      return false
    }
  }


  returnPreviousPage(){
    this.router.navigate([`/${this.pathToReturn}`])
  }

  reset(){
    this.oldpassword =""
    this.confirmpassword = ""
    this.newpassword =""
  }


}
