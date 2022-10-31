import { AuthService } from './../../../../core/auth/services/auth/auth.service';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import Movie from '../../models/movie';

@Component({
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.css']
})
export class MyContentComponent implements OnInit {
myMovieList!:Movie[];
  constructor(private moviesService:MoviesService,
    private  authService:AuthService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(){
    this.moviesService.getList().subscribe((response) =>{
      this.myMovieList = response.filter(p=>p.userId==this.authService.getUser.id);
      console.log(this.myMovieList)
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
