import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//COMPONETS IMPORT
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'movies', component: MoviesComponent},
    {path:'movie/:id', component: MovieDetailComponent},
    {path:'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
