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
import { MainLayoutComponent } from './components/main-layout/main-layout/main-layout.component';
import { UserInfoComponent } from './components/user-info/user-info/user-info.component';
import { InfoTitleComponent } from './components/info-title/info-title/info-title.component';
import { TableInfoComponent } from './components/table-info/table-info.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ShowcaseComponent,
    OverlayTitleComponent,
    CategoryListComponent,
    MovieListComponent,
    MovieCardComponent,
    FilterMoviePipe,
    MainLayoutComponent,
    UserInfoComponent,
    InfoTitleComponent,
    TableInfoComponent
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
    FilterMoviePipe,
    MainLayoutComponent,
    UserInfoComponent,
    InfoTitleComponent,
    TableInfoComponent
  ]
})
export class SharedModule { }
