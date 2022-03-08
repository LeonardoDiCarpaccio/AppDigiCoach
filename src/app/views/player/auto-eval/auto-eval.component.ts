import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AssocPlayerMarkAutoEvalService } from 'src/app/services/crud/assoc-player-mark-auto-eval.service';
import { HelpersService } from 'src/app/services/helpers.service';
import { PreviewPlayerService } from 'src/app/services/preview-player.service';

@Component({
  selector: 'app-auto-eval',
  templateUrl: './auto-eval.component.html',
  styleUrls: ['./auto-eval.component.scss'],
})
export class AutoEvalComponent implements OnInit {

autoEvalObject : any
id_auto_eval_adding_mark = null
markPlayer = ""
arrayTitle :any[] = []
  constructor(private previewPlayerServices : PreviewPlayerService,private auth : AuthService,private helpers : HelpersService,
    private assoc_mark_auto_eval_player : AssocPlayerMarkAutoEvalService) { }
arr = [0,1,2,3,4,5,6,7,8,9,10]
IsCurrentAutoEval = true
viewAll = false
slideOpts = {
  initialSlide: 0,
  speed: 400
};

isAddingMark = false
  async ngOnInit() {
this.autoEvalObject = await this.previewPlayerServices.getCurrentAndHistoAutoEval({id_player : this.auth.getId()}).toPromise()
this.initiateArrayTitle()
this.viewAll = true
  }

  async initPage(){
    this.autoEvalObject = await this.previewPlayerServices.getCurrentAndHistoAutoEval({id_player : this.auth.getId()}).toPromise()
  }

  reload(){
    this.id_auto_eval_adding_mark = null
    this.markPlayer = ""
    this.IsCurrentAutoEval = true
    this.isAddingMark = false

  }


  initiateArrayTitle(){
    for (const [key,value] of Object.entries(this.autoEvalObject.current)){
      this.arrayTitle.push('En cours')
    }

    for(const [key,value] of Object.entries(this.autoEvalObject.histo)){
      this.arrayTitle.push("Passées")
    }
  }

  returnActionToDo(arrAutoEval : any){
    const date = this.helpers.dateNow(true)
    console.log("date",date)
    let autoEvalToday = arrAutoEval.find((l)=>l.date == date)
    if(autoEvalToday.mark_player == null){
      return "Vous ne vous êtes pas noté aujourd'hui"
    }else{
      return "Ma note : " + autoEvalToday.mark_player
    }
  }

  ngIfMarkMyselfBtn(arrAutoEval : any){
    const date = this.helpers.dateNow(true)
    console.log("date",date)
    let autoEvalToday = arrAutoEval.find((l)=>l.date == date)
    if(autoEvalToday.mark_player == null){

return true
    }else{
      return false
    }
  }

  next(){

  }


  markMyself(id : any){
    this.id_auto_eval_adding_mark = id
    this.isAddingMark = !this.isAddingMark
  }


handleIsCurrentAutoEval(){
  this.IsCurrentAutoEval = !this.IsCurrentAutoEval
}


async validMark(){
  await this.assoc_mark_auto_eval_player.updateassoc_player_mark_auto_eval({where : {id_auto_eval :  parseInt(this.id_auto_eval_adding_mark),
    date : this.helpers.dateNow(true),id_player : this.auth.getId()},update : {mark_player : parseInt(this.markPlayer)}}).subscribe((res)=>{
      alert("Ok")
      this.initPage()
      this.reload()
  },err=>{
    alert("Erreur")
    this.initPage()
    this.reload()


  })
}



  previous(){

  }
}
