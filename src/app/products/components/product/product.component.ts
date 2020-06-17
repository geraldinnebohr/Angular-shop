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

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

	today = new Date();

  constructor() {
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
    console.log('method addCart in product component');
    this.productClicked.emit(this.product.id);
	}
}