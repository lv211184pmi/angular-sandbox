import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true
};

@Component({
  selector: 'stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss'],
  providers: [COUNTER_CONTROL_ACCESSOR]
})
export class StockCounterComponent implements OnInit, ControlValueAccessor {
  @Input() step = 10;
  @Input() min = 2;
  @Input() max = 10;
  value = 10;
  focus: boolean;

  private onTouch: () => void;
  private onModelChange: (_: any) => void;

  registerOnChange(fn: (_: any) => void): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
  writeValue(value: any): void {
    this.value = value || 0;
  }

  constructor() { }

  ngOnInit() {
  }

  onKeydown(event: KeyboardEvent) {
    const handlers = {
      ArrowUp: () => this.increment(),
      ArrowDown: () => this.decrement()
    };

    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
    this.onTouch();
  }

  onBlur(event: FocusEvent) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  onFocus(event: FocusEvent) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  increment() {
    if (this.value < this.max) {
      this.value += this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }

  decrement() {
    if (this.value > this.min) {
      this.value -= this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
}
