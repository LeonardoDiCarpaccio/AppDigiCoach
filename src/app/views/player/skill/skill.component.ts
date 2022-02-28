import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  arr = [1,1,1,1]
  arrTitle = ["Physique","Technique","Tactique","Mental"]

  currentIndex = 0
  constructor() { }
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  ngOnInit() {}

  goLeftSlide(){
    if(this.currentIndex != 0){
      this.currentIndex --
      console.log("this.currentIndex",this.currentIndex)
    }
  }

  goRightSlide(){
    if(this.currentIndex != (this.arrTitle.length - 1)){
      this.currentIndex ++
      console.log("this.currentIndex",this.currentIndex)

    }
  }
}
