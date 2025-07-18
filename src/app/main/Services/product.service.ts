import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'https://localhost:7068/api/Product';

  constructor(private http: HttpClient) { }

  GetAllProducts(): Observable<product[]>{
    return this.http.get<product[]>(this.apiURL);
  }

  AddProduct(product:product): Observable<product[]>{
    return this.http.post<product[]>(this.apiURL, product);
  }
}
