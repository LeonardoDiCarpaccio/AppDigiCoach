import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PreviewPlayerService } from 'src/app/services/preview-player.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  skillsObj: any;
  arrTitle: any = [];
  idSelected: any;

  viewAll = false;
  displayComment: boolean = false;

  currentIndex = 0;

  constructor(
    private previewPlayer: PreviewPlayerService,
    private auth: AuthService
  ) {}
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  ngOnInit() {
    this.getSkillsListPlayer();
  }

  // we copy res on skillsObj
  // we push every key of skillObj in array title, we ngFor on arrTitle, we've one slide per title (mental,physique)
  async getSkillsListPlayer() {
    await this.previewPlayer
      .getSkillByPlayer({ id_player: this.auth.getId() })
      .subscribe((res) => {
        console.log(res, 'res');
        this.skillsObj = res;
        for (const [key, value] of Object.entries(res)) {
          this.arrTitle.push(key);
        }
        console.log(this.arrTitle, 'arrTitle');
        this.viewAll = true;
      });
  }
  goLeftSlide() {
    if (this.currentIndex != 0) {
      this.currentIndex--;
    }
  }

  goRightSlide() {
    if (this.currentIndex != this.arrTitle.length - 1) {
      this.currentIndex++;
    }
  }
  commentDisplayTest(id: any) {
    if (this.idSelected == id) {
      this.displayComment = !this.displayComment;
      this.idSelected = null;
    } else {
      this.displayComment = !this.displayComment;
      this.idSelected = id;
    }
  }
}
