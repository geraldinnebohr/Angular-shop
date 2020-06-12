import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

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

  ngOnInit(): void {
  }

  productOnCart(id: number) {
    console.log(id);
  }

}
