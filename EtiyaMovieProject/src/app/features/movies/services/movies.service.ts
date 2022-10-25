
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import Movie from '../models/movie';

import SearchMovie from '../models/searchMovie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
  apiControllerUrl: string = `${environment.apiUrl}/movies`
  constructor(private httpClient:HttpClient) { }

  getList():Observable<Movie[]>{
   
    return this.httpClient.get<Movie[]>(this.apiControllerUrl)
  }

  getById(id:number):Observable<Movie>{
    return this.httpClient.get<Movie>(`${this.apiControllerUrl}/${id}`)
  }

  add(movies:Movie): Observable<Movie>{
    return this.httpClient.post<Movie>(this.apiControllerUrl,movies);
  }
  

  delete(id:number):Observable<Movie>{
    return this.httpClient.delete<Movie>(`${this.apiControllerUrl}/${id}`)
  }

  // getListByFilter(searchMovie: SearchMovie): Observable<Movie[]>{
  //   const subject = new Subject<Movie[]>();
  //   this.httpClient.get<Movie[]>(this.apiControllerUrl).subscribe({
  //     next: (response) => {
  //       let filteredMovie = response;
  //       if (searchMovie.name) {
  //         filteredMovie = filteredMovie.filter(
  //           (item) => item.name == searchMovie.name
  //         );
  //       }
  //       subject.next(filteredMovie);
  //     },
  //     error: (err) => {
  //       subject.error(err);
  //     },
  //     complete: () => {
  //       //en son calısan yer
  //       subject.complete();
  //     },
  //   });
  //   return subject.asObservable();
  //     }

  getMoviesByCategory(categoryId:number):Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.apiControllerUrl+'?categoryId='+categoryId)
  }
  
}

