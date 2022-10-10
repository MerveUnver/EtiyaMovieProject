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


@Component({
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  profileForm!: FormGroup;
  addMovieModel$!: Observable<Movie>;
  movie!: Movie;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private moviesService: MoviesService,
  ) {}

  ngOnInit(): void {
    this.addMovieModel$.subscribe((state) => {
      this.movie = state;
      this.createFormAddMovie();
    });
  }

  createFormAddMovie() {
    this.profileForm = this.formBuilder.group({
      name: [this.movie.name, Validators.required],
      runtime: [this.movie.runtime,Validators.required],
      categories: [this.movie.categories, Validators.required],
      posterUrl: [this.movie.poster, Validators.required],
      year: [this.movie.year, Validators.required],
      imdbRatings: [this.movie.imdbRating],
      plot: [this.movie.plot],
      
    });
  }
  save() {
    
    this.router.navigateByUrl('');
  }
}
