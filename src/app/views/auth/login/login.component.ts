import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
email= ""
password = ""

  constructor(private auth : AuthService,private router : Router) { }

  async ngOnInit(){
    await this.auth.getMe()
  }

  async login(){
    await this.auth.login({email_user : this.email,password_user : this.password }).subscribe((res)=>{
    },err=>{
    alert("email ou mot de passe incorrect")
    })
    }

  // login(){
  //   this.router.navigate(['/home'])
  // }

}
