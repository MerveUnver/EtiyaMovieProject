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
  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
  }
  selectedMovie(category:Category){
    this.moviesService.getMoviesByCategory(category.id).subscribe(response=>{
      //console.warn(response)
      this.movies = response
    })
  }

}
