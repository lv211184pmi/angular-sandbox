import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent {
  products: Product[] =  [
    {id: 1, price: 200, name: 'allpeWatch'},
    {id: 2, price: 2200, name: 'McBook'},
    {id: 3, price: 1200, name: 'iPhone'}
];
  form = this.fb.group({
    store: this.fb.group({
        branch: '',
        code: ''
    }),
    selector: this.createStock({}),
    stock: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {}

  createStock(stock) {
    return this.fb.group({
      product_id: stock.product_id || 1,
      quantity: stock.quantity || 8
    });
  }

  addStock(item) {
    const stocks = this.form.get('stock') as FormArray;
    return stocks.push(this.createStock(item));
  }

  removeStock(index) {
    const stocks = this.form.get('stock') as FormArray;
    stocks.removeAt(index);
  }

  onSubmit() {
    console.log('Submit', this.form.value);
  }
}
