import { Component, OnInit, ViewChild } from '@angular/core';

import { MoviesService } from './movies.service';
import { MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'mf-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  movies: any;

  //spinner variables
  mode:String = "indeterminate";
  color:string = "warn";
  value:number = 50;
  loading:boolean = false

  //paginator variables
  pageIndex:number = 0;
  pageSize:number = 12;
  lowValue:number = 0;
  highValue:number = 12;


  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
    this.loading = true;
    this.moviesService.getMovies()
      .subscribe((movies) => {
        this.movies = movies.results;
        this.loading = false;
      });
  }

         

  getPaginatorData(event){
     console.log(event);
     if(event.pageIndex === this.pageIndex + 1){
        this.lowValue = this.lowValue + this.pageSize;
        this.highValue =  this.highValue + this.pageSize;
       }
    else if(event.pageIndex === this.pageIndex - 1){
       this.lowValue = this.lowValue - this.pageSize;
       this.highValue =  this.highValue - this.pageSize;
      }   
       this.pageIndex = event.pageIndex;
 }

}














/*

<mat-paginator #paginator [pageSize]="pageSize" [pageSizeOptions]="[5, 10]" [showFirstLastButtons]="true" [length]="totalSize"
      [pageIndex]="currentPage" (page)="pageEvent = handlePage($event)">
    </mat-paginator>

movies: any = []; 
  public displayedColumns = [''];
  public dataSource: any;    

  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies()
      .subscribe((movies) => {
        this.dataSource = new MatTableDataSource<any>(movies.results);
        this.dataSource.paginator = this.paginator;
        this.movies = movies.results;
        this.totalSize = this.movies.length;
        this.iterator();
      });
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.movies.slice(start, end);
    this.dataSource = part;
  }
*/
