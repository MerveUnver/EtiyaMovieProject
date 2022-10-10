import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Movie from '../models/movie';

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

  update(movies:Movie):Observable<Movie>{
    return this.httpClient.put<Movie>(`${this.apiControllerUrl}/${movies.id}`,movies)
  }


}

