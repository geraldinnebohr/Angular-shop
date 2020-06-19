import { AbstractControl } from '@angular/forms';

export class MyValidators {
  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    if (value > 1000) {
      return {priceInvalid: true};
    } else {
      return null;
    }
  }
}