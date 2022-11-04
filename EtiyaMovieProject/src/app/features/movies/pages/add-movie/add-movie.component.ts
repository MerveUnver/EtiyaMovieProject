import { ToastrService } from 'ngx-toastr';
import { MoviesService } from './../../services/movies.service';
import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import Movie from '../../models/movie';
import { AuthService } from 'src/app/core/auth/services/auth/auth.service';


@Component({
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  movieForm!: FormGroup;
  movie!: Movie;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private moviesService: MoviesService,
    private toastr: ToastrService,
    private  authService:AuthService
  ) {}

  ngOnInit(): void {
   this.createFormAddMovie();
  }

  createFormAddMovie() {
    this.movieForm = this.formBuilder.group({
      name: [this.movie?.name, Validators.required],
      runtime: [this.movie?.runtime,Validators.required],
      categories: [this.movie?.category, Validators.required],
      poster: [this.movie?.poster],
      year: [this.movie?.year, Validators.required],
      imdbRating: [this.movie?.imdbRating],
      plot: [this.movie?.plot],
      
    });
  }
 
  save(){
    if (this.movieForm.invalid) {
      this.toastr.warning("Please fill the required areas!!!","Add")
      return;
    }

    const movie:Movie = {

      ...this.movieForm.value,
      userId:this.authService.getUser.id
    }

    this.moviesService.add(movie).subscribe(() =>{
      setTimeout(() => {
        this.toastr.success("Movie succesfully add!","Add")
        this.router.navigateByUrl("/my-content");
      }, 1000);
    })
  }
}
