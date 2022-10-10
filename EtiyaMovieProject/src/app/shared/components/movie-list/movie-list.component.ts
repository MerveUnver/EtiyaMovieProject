import { MoviesService } from './../../../features/movies/services/movies.service';
import { Component, OnInit } from '@angular/core';
import Movie from 'src/app/features/movies/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList!:Movie[];
  cartItems: any[] =[];
  filterText:string="";
  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    
      this.getMovies();
    };
  getMovies(){
    this.moviesService.getList().subscribe((response) =>{
      console.log(response);
     
      this.movieList = response;  
    })
  }
}
