import { IsRole3Guard } from './../../core/auth/role-3.guard';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyContentComponent } from './pages/my-content/my-content.component';
import { IsAuthenticatedGuard } from 'src/app/core/auth/is-authenticated.guard';
import { Role2Guard } from 'src/app/core/auth/role-2.guard';
import { ContentComponent } from './pages/content/content.component';


const routes: Routes = [
 
  { path: 'homepage', component: HomepageComponent,canActivate:[IsAuthenticatedGuard] },
  { path: 'add-movie', component: AddMovieComponent,canActivate:[IsAuthenticatedGuard,IsRole3Guard] },
  { path: 'my-content', component: MyContentComponent,canActivate:[IsAuthenticatedGuard,Role2Guard]},
  { path: 'content', component: ContentComponent,canActivate:[IsAuthenticatedGuard,IsRole3Guard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
