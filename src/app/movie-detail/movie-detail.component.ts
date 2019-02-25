import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: any;

  //spinner variables
  mode:String = "indeterminate";
  color:string = "warn";
  value:number = 50;
  loading:boolean = false

  constructor(public moviesService: MoviesService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true
    this.moviesService.getMoiveByID(this.route.snapshot.params['id'])
      .subscribe(movie => {
        this.movie = movie;
        this.loading = false;
      });
  }

  ngAfterViewInit(): void {
  }

}
