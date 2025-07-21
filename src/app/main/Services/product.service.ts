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

  // In case backend response isn't in JSON then we have to tell the "responseType"  
  // deleteProduct(product_id: number): Observable<string> {
  //   return this.http.delete(`${this.apiURL}/${product_id}`,  { responseType: 'text' });
  // }

  deleteProduct(product_id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiURL}/${product_id}`);
  }
}
