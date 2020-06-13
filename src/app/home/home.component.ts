import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message;
  favoriteTVshow = '';

  constructor() { }

  ngOnInit(): void {
  }

  saveTVshow(tvShow) {
    console.log(tvShow);
    this.favoriteTVshow = tvShow;
  }

  cancelTVshowAlert(e) {
    console.log(e); 
    switch (e) {
      case 'esc':
        this.message = 'Echap bien pris en compte'
        this.hideMessage(1500);
        break;
      case 'backdrop':
          this.message = `Vous avez cliqué sur l'arrière-plan`;
          this.hideMessage(1500);
          break;
      default:
        this.message = 'bye'
        break;
    }   
  }

  hideMessage(ms: number) {
    setTimeout(() => this.message = '', ms);
  }

}
