import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-eval',
  templateUrl: './auto-eval.component.html',
  styleUrls: ['./auto-eval.component.scss'],
})
export class AutoEvalComponent implements OnInit {

  constructor() { }
arr = [0,0,0,0,0,0,0,0,0,0,0,0,0]
IsCurrentAutoEval = true
// arr = [0,0,0,0,0]

  ngOnInit() {}
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };



  next(){

  }


handleIsCurrentAutoEval(){
  this.IsCurrentAutoEval = !this.IsCurrentAutoEval
}

  previous(){

  }
}
