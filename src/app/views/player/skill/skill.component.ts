import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PreviewPlayerService } from 'src/app/services/preview-player.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  arr = [1,1,1,1]
  arrTitle = ["Physique","Technique","Tactique","Mental"]

  skillsList : any
  arraySkillsPhy : any
  arraySkillsTac : any
  arraySkillsTec : any
  arraySkillsMen : any

  currentIndex = 0
  
  constructor(private previewPlayer : PreviewPlayerService,private auth: AuthService) { }
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  ngOnInit() {
  this.getSkillsListPlayer()
  
    console.log(  this.skillsList,"  this.skillsList")
  }

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

  async getSkillsListPlayer(){
    await this.previewPlayer.getSkillByPlayer({id_player : this.auth.getId()}).subscribe((res)=>{
      console.log(res,"res")
      this.arraySkillsPhy = res["physique"] != undefined ?res["physique"]  : null
this.arraySkillsTac = res["tactique"] != undefined ? res["tactique"] : null
this.arraySkillsTec = res["technique"] != undefined ? res["technique"] : null
this.arraySkillsMen = res["mental"] != undefined ? res["mental"]  : null
console.log(this.arraySkillsTac,"arraySkillsTac")

console.log(this.arraySkillsTec,"arraySkillsTec")

console.log(this.arraySkillsMen,"this.arraySkillsMen")

console.log( this.arraySkillsPhy," this.arraySkillsPhy")

     })
  }
}
