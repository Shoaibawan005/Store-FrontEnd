import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'https://localhost:7068/api/Product';

  constructor(private http: HttpClient) { }

  // GetAllProducts(): Observable<product[]>{
  //   return this.http.get<product[]>(this.apiURL);
  // }
}
