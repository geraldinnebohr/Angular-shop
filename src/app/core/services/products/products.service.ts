import { Injectable } from '@angular/core';

import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 30000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 20000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
  ];

  constructor() { }

  getAllProducts() {
    return this.products; // return the array completed
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
