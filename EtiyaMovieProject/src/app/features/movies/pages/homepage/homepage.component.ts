import { AuthService } from './../../../../core/auth/services/auth/auth.service';
import { MoviesService } from './../../services/movies.service';
import { Component, Input, OnInit } from '@angular/core';
import Movie from '../../models/movie';
import Category from '../../models/category';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  movies!:Movie[]
  name!:String;
  @Input() roleId!:number;
  constructor(private moviesService:MoviesService, private authService:AuthService) { 
    this.name=authService.getUser.name+" "+authService.getUser.lastName;
    this.roleId = authService.getUser.roleId ?? 1
  
  }

  ngOnInit(): void {
  }
  selectedMovie(category:Category){
    this.moviesService.getMoviesByCategory(category.id).subscribe(response=>{
      //console.warn(response)
      this.movies = response
    })
  }

}
