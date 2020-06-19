import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';

import { Product } from '../../../product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

	today = new Date();

  constructor(
    private cartService: CartService
  ) {
    console.log('1. este es el constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //     console.log('2. este es ngOnChanges');
  //     console.log(changes);
  // } OJO se quitó la implementación de esta interfaz OnChanges

  ngOnInit() {
    console.log('3. es ngOnInit');
  }

  ngDoCheck() {
    console.log('4. es docheck');
  }

  ngOnDestroy() {
    console.log('5. es destroy');
  }

  addCart() {
    console.log('producto añadido al carrito');
    this.cartService.addCart(this.product);
	}
}