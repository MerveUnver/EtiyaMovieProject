import { AuthService } from 'src/app/core/auth/services/auth/auth.service';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import Movie from '../../models/movie';

@Component({
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  movieList!:Movie[];
  constructor(private moviesService:MoviesService,
    private  authService:AuthService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(){
    this.moviesService.getList().subscribe((response) =>{
      this.movieList = response;
      console.log(this.movieList)
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
