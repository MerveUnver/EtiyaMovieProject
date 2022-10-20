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
import { UserInfoComponent } from './components/user-info/user-info/user-info.component';
import { InfoTitleComponent } from './components/info-title/info-title/info-title.component';
import { TableInfoComponent } from './components/table-info/table-info.component';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { WarningMessageComponent } from './components/warning-message/warning-message.component';
import { CustomToastComponent } from './components/custom-toast/custom-toast.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    NavbarComponent,
    ShowcaseComponent,
    OverlayTitleComponent,
    CategoryListComponent,
    MovieListComponent,
    MovieCardComponent,
    FilterMoviePipe,
    UserInfoComponent,
    InfoTitleComponent,
    TableInfoComponent,
    TabMenuComponent,
    WarningMessageComponent,
    CustomToastComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule
    
  ],
  exports:[
    NavbarComponent,
    OverlayTitleComponent,
    CategoryListComponent,
    MovieCardComponent,
    MovieListComponent,
    FilterMoviePipe,
    UserInfoComponent,
    InfoTitleComponent,
    TableInfoComponent,
    TabMenuComponent
  ]
})
export class SharedModule { }
