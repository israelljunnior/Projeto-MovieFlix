import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mf-card-movie-detail',
  templateUrl: './card-movie-detail.component.html',
  styleUrls: ['./card-movie-detail.component.css']
})
export class CardMovieDetailComponent implements OnInit {

  @Input() movie: any;

  constructor() { }

  ngOnInit() {
    this.movie.poster_path = "https://image.tmdb.org/t/p/original"+this.movie.poster_path;
    console.log(this.movie);
  }

}
