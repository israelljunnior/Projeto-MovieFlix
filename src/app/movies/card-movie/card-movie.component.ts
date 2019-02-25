import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'mf-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

 @Input() movie: any;

  constructor() { }

  ngOnInit() {
    //check if base urlImage  was already added in property poster_path
    let urlImage = 'https://image.tmdb.org/t/p/original';
    let regexpUrlImage = new RegExp("\\b"+urlImage+"\\b", 'g');
    if(this.movie.poster_path.match(regexpUrlImage)) {
      console.log('done already')
    } else {
    this.movie.poster_path = urlImage+this.movie.poster_path;
    }
  }
}
