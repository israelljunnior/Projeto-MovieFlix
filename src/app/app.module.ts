import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//IMPORTS Material Angular
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
  MatGridListModule,
  MatPaginatorModule,
  MatTabsModule,
  MatTableModule,
  MatProgressSpinnerModule } from '@angular/material';
//COMPORNENTS
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { CardMovieComponent } from './movies/card-movie/card-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesService } from "./movies/movies.service";
import { CardMovieDetailComponent } from './movie-detail/card-movie-detail/card-movie-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    CardMovieComponent,
    MovieDetailComponent,
    CardMovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatProgressSpinnerModule

  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
