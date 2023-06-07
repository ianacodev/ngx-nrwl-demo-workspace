import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// models
import { Product } from '@demo-app/data-models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(category: string | null = null): Observable<Product[]> {
    const url =
      category !== null
        ? `http://localhost:3000/products?category=${category}`
        : `http://localhost:3000/products`;
    return this.http.get<Product[]>(url).pipe(
      map((products) => products),
      catchError((error) => throwError(() => new Error(error)))
    );
  }
}
