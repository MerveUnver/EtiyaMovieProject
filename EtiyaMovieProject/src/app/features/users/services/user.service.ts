import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import User from '../models/user';
import RegisterUser from '../models/registerUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  apiControllerUrl: string = `${environment.apiUrl}`

  constructor(private httpClient:HttpClient) { }

  getList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiControllerUrl}/users`)
  }

  delete(id:number):Observable<User>{
    return this.httpClient.delete<User>(`${this.apiControllerUrl}/users/${id}`)
  }

  add(user:User): Observable<User>{
    return this.httpClient.post<User>(`${this.apiControllerUrl}/users`,user);
  }
///////////////denemeeeeeee
  addRegisterUser(registerUser:RegisterUser): Observable<RegisterUser>{
    return this.httpClient.post<RegisterUser>(`${this.apiControllerUrl}/registerUsers`,registerUser);
  }
  getRegisterList():Observable<RegisterUser[]>{
   
    return this.httpClient.get<RegisterUser[]>(`${this.apiControllerUrl}/registerUsers`)
  }
  deleteWaitingusers(id:number):Observable<RegisterUser>{
    return this.httpClient.delete<RegisterUser>(`${this.apiControllerUrl}/registerUsers/${id}`)
  }

}
