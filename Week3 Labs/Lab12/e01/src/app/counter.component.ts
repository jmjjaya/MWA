import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<button (click)="increase()">+</button>{{counterValue}}<button (click)="decrease()">-</button>`,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() counter: number;
  @Output() counterChange = new EventEmitter();
  counterValue: number;

  constructor() { }

  ngOnInit() {
    this.counterValue = 0;
    if (this.counter) { this.counterValue = this.counter; }

    this.counterChange.emit(this.counterValue);
  }

  increase() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }

  decrease() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }
}
