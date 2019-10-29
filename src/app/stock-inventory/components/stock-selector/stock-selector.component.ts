import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';


@Component({
  selector: 'stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() products: Product[];

  @Output() addItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    this.addItem.emit(this.parent.get('selector').value);
  }
}
