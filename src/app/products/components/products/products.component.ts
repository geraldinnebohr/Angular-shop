import { Component, OnInit } from '@angular/core';

import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];


  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    })
  }

  productOnCart(id: number) {
    console.log(id);
  }

}
