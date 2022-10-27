import { MessageService } from 'primeng/api';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MoviesModule } from './features/movies/movies.module';
import { UsersModule } from './features/users/users.module';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    MoviesModule,
    UsersModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
