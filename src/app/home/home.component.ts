import { Component, OnInit } from '@angular/core';
import { keys } from 'my-keys';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message;
  favoriteTVshow = '';
  URL=`https://api.themoviedb.org/3/search/movie?api_key=`;
  imgURL = 'https://image.tmdb.org/t/p/w500';
  imgSrc;
  results;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  saveTVshow(tvShow) {
    console.log(tvShow);
    this.favoriteTVshow = tvShow;
    console.log( keys );
    this.getMovie(this.favoriteTVshow);
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

  getMovie(movieName) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${keys.theMovieDB}`
    };
    this.http.get<Movie>(`${this.URL}${keys.theMovieDB}&query=${movieName}`, { headers})
      .subscribe(data => {
        console.log(data);
        if (data.results.length > 0) {
          this.results = data.results;
          this.imgSrc = `${this.imgURL}${(data.results[0] as any).poster_path}`
        }
        
      }, err => {
        console.error(err);
        
      })
  }

}
