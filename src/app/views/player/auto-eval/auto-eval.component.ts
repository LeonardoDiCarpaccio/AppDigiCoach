import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HelpersService } from 'src/app/services/helpers.service';
import { PreviewPlayerService } from 'src/app/services/preview-player.service';

@Component({
  selector: 'app-auto-eval',
  templateUrl: './auto-eval.component.html',
  styleUrls: ['./auto-eval.component.scss'],
})
export class AutoEvalComponent implements OnInit {

autoEvalObject : any
arrayTitle :any[] = []
  constructor(private previewPlayerServices : PreviewPlayerService,private auth : AuthService,private helpers : HelpersService) { }
arr = [0,0,0,0,0,0,0,0,0,0,0,0,0]
IsCurrentAutoEval = true
viewAll = false
slideOpts = {
  initialSlide: 0,
  speed: 400
};

  async ngOnInit() {
this.autoEvalObject = await this.previewPlayerServices.getCurrentAndHistoAutoEval({id_player : this.auth.getId()}).toPromise()
this.initiateArrayTitle()
this.viewAll = true
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
      return autoEvalToday.mark_player
    }


  }

  next(){

  }


handleIsCurrentAutoEval(){
  this.IsCurrentAutoEval = !this.IsCurrentAutoEval
}

  previous(){

  }
}
