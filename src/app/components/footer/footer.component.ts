import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  route=""
  ios:any
  android:any
  constructor(private router : Router, public platform : Platform) { 
    this.ios = platform.is('ios');
    this.android = platform.is('android');
  }
  ngOnInit() {
    this.route = this.router.url
  }

}
