import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../products.service';
import { Product } from '../product.model';

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
      this.product = this.productsService.getProduct(id);
      /* llama el método getProduct del servicio y le
      pasa el id para buscar el objeto que haga match */
    });
  }

}
