import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../../product.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(environment.urlApi);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.urlApi}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(environment.urlApi, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.urlApi}/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.urlApi}/${id}`);
  }
}
