import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
