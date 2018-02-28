import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Counter from './../actions/counter2.action';

interface AppState {
  count: number;
}
@Component({
  selector: 'app-counter2-index',
  templateUrl: './counter2-index.component.html',
  styleUrls: ['./counter2-index.component.css']
})
export class Counter2IndexComponent {
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.pipe(select('counter'));
  }

  increment() {
    this.store.dispatch(new Counter.Increment());
  }

  decrement() {
    this.store.dispatch(new Counter.Decrement());
  }

  reset() {
    this.store.dispatch(new Counter.Reset(3));
  }
}
