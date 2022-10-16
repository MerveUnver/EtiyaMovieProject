import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import Movie from '../../models/movie';

@Component({
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.css']
})
export class MyContentComponent implements OnInit {
myMovieList!:Movie[];
  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
  }
  getMovies(){
    this.moviesService.getList().subscribe((response) =>{
      this.myMovieList = response;
    })
  }
  deleteMovie(id:number){
    if(confirm("Are you sure want to delete?")){
      this.moviesService.delete(id).subscribe(()=>{
        setTimeout(() => {
          this.getMovies();
        }, 1000);
      })
    } 
  }
}
