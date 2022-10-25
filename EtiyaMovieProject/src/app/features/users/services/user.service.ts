import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import User from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiControllerUrl: string = `${environment.apiUrl}/users`

  constructor(private httpClient:HttpClient) { }

  getList():Observable<User[]>{
   
    return this.httpClient.get<User[]>(this.apiControllerUrl)
  }

  delete(id:number):Observable<User>{
    return this.httpClient.delete<User>(`${this.apiControllerUrl}/${id}`)
  }
  add(user:User): Observable<User>{
    return this.httpClient.post<User>(this.apiControllerUrl,user);
  }
}
