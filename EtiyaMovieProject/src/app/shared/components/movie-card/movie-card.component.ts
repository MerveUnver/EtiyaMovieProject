import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Movie from 'src/app/features/movies/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!:Movie;
  constructor() { }

  ngOnInit(): void {
  }
}
