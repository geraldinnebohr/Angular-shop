import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      /* console.log(param); param devuelve un objeto
      con la key que se especificó en la ruta y el value
      es el que se pasó en el browser /products/value */
      const id = param.id; // guarda sólo el valor del id
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '22',
      title: 'Nuevo producto desde angular',
      image: 'assets/images/camiseta.png',
      price: 30000,
      description: 'Nuevo producto en la tienda'
    }
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    })
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 555
    };
    this.productsService.updateProduct('2', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('22')
    .subscribe(response => {
      console.log(response);
    });
  }

}
