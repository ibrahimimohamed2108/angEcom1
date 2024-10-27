import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {}
 
  getProductCategoryList(){
    return this.http.get('https://dummyjson.com/products/categories');
  }
  getAllProducts(){
    return this.http.get('https://dummyjson.com/products');
  }
  getProductByCategory(category: string){
    return this.http.get(`https://dummyjson.com/products/category/${category}`);
  }

  getProductByKey(key: string){
    return this.http.get(`https://dummyjson.com/products/search?q=${key}`);
  }
}

/*
  getProductCategoryList(): Observable<string[]> {
    return this.http.get<string[]>('https://dummyjson.com/products/categories');
  }

  getAllProducts(): Observable<{ products: Product[] }> {
    return this.http.get<{ products: Product[] }>('https://dummyjson.com/products');
  }

  getProductByCategory(category: string): Observable<{ products: Product[] }> {
    return this.http.get<{ products: Product[] }>(`https://dummyjson.com/products/category/${category}`);
  }

  getProductByKey(key: string): Observable<{ products: Product[] }> {
    return this.http.get<{ products: Product[] }>(`https://dummyjson.com/products/search?q=${key}`);
  }
}*/