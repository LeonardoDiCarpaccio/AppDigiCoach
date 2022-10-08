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
  autoEvalObject: any;
  id_auto_eval_adding_mark = null;
  markPlayer = '';
  arrayTitle: any[] = [];
  arrayTitleKey: any[] = [];
  displayComment: boolean = false;
  idSelected: any;
  IsCurrentAutoEval = 'current';

  constructor(
    private previewPlayerServices: PreviewPlayerService,
    private auth: AuthService,
    private helpers: HelpersService,
    private assoc_mark_auto_eval_player: AssocPlayerMarkAutoEvalService
  ) {}
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  viewAll = false;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  alreadyMarked = false;
  arrayDisplayPreviousMark: any = [];
  isAddingMark = false;
  async ngOnInit() {
    this.autoEvalObject = await this.previewPlayerServices
      .getCurrentAndHistoAutoEval({ id_player: this.auth.getId() })
      .toPromise();
    this.autoEvalObject.hasPendingAutoEval ? this.initiateArrayTitle() : null;
    const date = this.helpers.dateNow(true);
    console.log('this.autoEvalObject', this.autoEvalObject);
    this.IsCurrentAutoEval = 'current';

    this.viewAll = true;
  }

  async initPage() {
    this.autoEvalObject = await this.previewPlayerServices
      .getCurrentAndHistoAutoEval({ id_player: this.auth.getId() })
      .toPromise();
  }

  reload() {
    this.id_auto_eval_adding_mark = null;
    this.markPlayer = '';
    this.isAddingMark = false;
    this.IsCurrentAutoEval = 'current';
  }

  seePreviousMark(key: any) {
    let arr = this.autoEvalObject.current[key].array;
    let date = new Date(this.helpers.dateNow(true));
    this.arrayDisplayPreviousMark = arr.filter(
      (autoeval: any) => new Date(autoeval.date) < date
    );
    console.log(this.arrayDisplayPreviousMark, 'arrayDisplayPreviousMark');
  }

  initiateArrayTitle() {
    for (const [key, value] of Object.entries(this.autoEvalObject.current)) {
      if (!this.arrayTitle.find((el) => el == 'current')) {
        this.arrayTitle.push('current');
      }
      this.arrayTitleKey.push(key);
    }

    for (const [key, value] of Object.entries(this.autoEvalObject.histo)) {
      if (!this.arrayTitle.find((el) => el == 'histo')) {
        this.arrayTitle.push('histo');
      }
      this.arrayTitleKey.push(key);
    }
    console.log(this.arrayTitle, 'arrayTitle');
    console.log(this.arrayTitleKey, 'arrayTitleKey');
  }

  returnActionToDo(arrAutoEval: any) {
    const date = this.helpers.dateNow(true);
    let autoEvalToday = arrAutoEval.find((l) => l.date == date);
    if (autoEvalToday.mark_player == null) {
      return "Vous ne vous êtes pas noté aujourd'hui";
    } else {
      this.alreadyMarked = true;
      return 'Ma note : ' + autoEvalToday.mark_player;
    }
  }

  ngIfMarkMyselfBtn(arrAutoEval: any) {
    const date = this.helpers.dateNow(true);
    let autoEvalToday = arrAutoEval.find((l) => l.date == date);
    if (autoEvalToday.mark_player == null) {
      return true;
    } else {
      return false;
    }
  }

  returnToList() {
    this.arrayDisplayPreviousMark = [];
  }

  markMyself(id: any) {
    this.id_auto_eval_adding_mark = id;
    this.isAddingMark = !this.isAddingMark;
  }

  handleIsCurrentAutoEval(position: any) {
    console.log(position, 'position');
    this.IsCurrentAutoEval = position;
  }

  async validMark() {
    await this.assoc_mark_auto_eval_player
      .updateassoc_player_mark_auto_eval({
        where: {
          id_auto_eval: parseInt(this.id_auto_eval_adding_mark),
          date: this.helpers.dateNow(true),
          id_player: this.auth.getId(),
        },
        update: { mark_player: parseInt(this.markPlayer) },
      })
      .subscribe(
        (res) => {
          this.initPage();
          this.reload();
        },
        (err) => {
          alert('Erreur');
          this.initPage();
          this.reload();
        }
      );
  }

  deleteMark() {
    this.markPlayer = '';
    this.reload();
  }
  commentDisplayTest(id: any) {
    if (this.idSelected == id) {
      this.displayComment = !this.displayComment;
      this.idSelected = null;
    } else {
      console.log(id, 'ididid');
      this.displayComment = !this.displayComment;
      this.idSelected = id;
      console.log(this.idSelected, ' this.idSelected');
      console.log(this.displayComment, 'this.displayComment');
    }
  }
  previous() {}
}
