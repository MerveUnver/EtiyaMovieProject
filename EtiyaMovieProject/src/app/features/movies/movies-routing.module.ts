import { IsRole3Guard } from './../../core/auth/role-3.guard';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyContentComponent } from './pages/my-content/my-content.component';
import { IsAuthenticatedGuard } from 'src/app/core/auth/is-authenticated.guard';


const routes: Routes = [
 
  { path: 'homepage', component: HomepageComponent,canActivate:[IsAuthenticatedGuard] },
  { path: 'add-movie', component: AddMovieComponent,canActivate:[IsAuthenticatedGuard,IsRole3Guard] },
  { path: 'my-content', component: MyContentComponent,canActivate:[IsAuthenticatedGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
