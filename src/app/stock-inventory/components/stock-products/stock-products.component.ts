import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {
  @Input() parent: FormGroup;
  @Output() removeItem = new EventEmitter<any>();

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }
  constructor() { }

  ngOnInit() {
  }

  onRemove(index) {
    this.removeItem.emit(index);
  }

}
