import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ShowcaseComponent,
    OverlayTitleComponent,
    CategoryListComponent,
    MovieListComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    OverlayTitleComponent,
    CategoryListComponent,
    MovieCardComponent,
    MovieListComponent
  ]
})
export class SharedModule { }
