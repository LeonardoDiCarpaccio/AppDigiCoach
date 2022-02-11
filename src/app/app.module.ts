import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptors';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/auth/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { PasswordForgetComponent } from './views/auth/password-forget/password-forget.component';
import { SkillComponent } from './views/player/skill/skill.component';
import { HomeComponent } from './views/player/home/home.component';
import { ProfileComponent } from './views/player/profile/profile.component';
import { StatComponent } from './views/player/stat/stat.component';
import { FormsModule } from '@angular/forms';
import { AutoEvalComponent } from './views/player/auto-eval/auto-eval.component';

@NgModule({
  declarations: [AppComponent,LoginComponent,FooterComponent,PasswordForgetComponent,SkillComponent,HomeComponent,ProfileComponent,StatComponent,AutoEvalComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
