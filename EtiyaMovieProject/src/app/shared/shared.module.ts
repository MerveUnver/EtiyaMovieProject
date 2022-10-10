import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { FilterMoviePipe } from './pipes/filter-movie.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    ShowcaseComponent,
    OverlayTitleComponent,
    CategoryListComponent,
    MovieListComponent,
    MovieCardComponent,
    FilterMoviePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports:[
    NavbarComponent,
    OverlayTitleComponent,
    CategoryListComponent,
    MovieCardComponent,
    MovieListComponent,
    FilterMoviePipe
  ]
})
export class SharedModule { }
