import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { PasswordForgetComponent } from './views/auth/password-forget/password-forget.component';
import { AutoEvalComponent } from './views/player/auto-eval/auto-eval.component';
import { HomeComponent } from './views/player/home/home.component';
import { ProfileComponent } from './views/player/profile/profile.component';
import { SkillComponent } from './views/player/skill/skill.component';
import { StatComponent } from './views/player/stat/stat.component';

const routes: Routes = [

{
  path : "login",
  component : LoginComponent
 },
 {
  path : "home",
  component : HomeComponent
 },
{
  path : "stat",
  component : StatComponent
},
{
  path : "skill",
  component : SkillComponent
},
{
  path : "profile",
  component : ProfileComponent
},
{
  path : "auto-eval",
  component : AutoEvalComponent
},
{
  path : "password-forget",
  component : PasswordForgetComponent
},
{
  path : "**",
  redirectTo : "login"
}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
