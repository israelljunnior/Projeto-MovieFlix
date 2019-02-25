import { Observable } from "rxjs";

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map, tap} from 'rxjs/operators';

import { MOVIELIST_API, MOVIE_API } from '../movie.api';



@Injectable()
export class MoviesService {

  public API_TOKEN = "eyJ0eXAiOiJKV1AzNjRhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bfB9pSr_iGJa1PNpLC55Q6SYAohK5OGujZXGQAtJn0Q";
  public API_KEY = "8e123f5c1e509cd9654bd2b127e31455";
  
  constructor(private http: HttpClient) {}

   getMovies(listID:number = 1, page:number = 1): Observable<any> {

    return this.http.get(`${MOVIELIST_API}/${listID}?page=${page}&api_key=${this.API_KEY}&language=pt_BR`, { headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
    })}).pipe(
            tap(response => JSON.stringify(response))
          )
  };

  getMoiveByID(id:number): Observable<any> {
    return this.http.get(`${MOVIE_API}/${id}?api_key=${this.API_KEY}&language=pt_BR`, { headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })}).pipe(
            tap(response => JSON.stringify(response))
          )
  };
}