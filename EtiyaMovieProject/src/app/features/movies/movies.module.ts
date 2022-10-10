import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';


@NgModule({
  declarations: [
    HomepageComponent,
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
