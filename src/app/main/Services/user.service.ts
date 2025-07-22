import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';
// import { product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'https://localhost:7068/api/User';

  constructor(private http: HttpClient) { }

  // GetAllProducts(): Observable<product[]>{
  //   return this.http.get<product[]>(this.apiURL);
  // }

  GetAllUsers(): Observable<User[]>{

    return this.http.get<User[]>(this.apiURL)
  }

  AddUser(user: User): Observable<User> {
    
    return this.http.post<User>(this.apiURL, user);
  }

  DeleteUser(user_id: number): Observable<{message: string}> {
    console.log(user_id)
    return this.http.delete<{message: string}>(`${this.apiURL}/${user_id}`);
  }
}
