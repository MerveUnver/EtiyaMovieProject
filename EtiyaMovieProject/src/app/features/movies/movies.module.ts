import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { MyContentComponent } from './pages/my-content/my-content.component';
import { ContentComponent } from './pages/content/content.component';


@NgModule({
  declarations: [
    HomepageComponent,
    AddMovieComponent,
    MyContentComponent,
    ContentComponent
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
