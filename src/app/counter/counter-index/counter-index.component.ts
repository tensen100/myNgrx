import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CounterTypes } from '../reducers/connter.reducer';

interface AppState {
  count: number;
}
@Component({
  selector: 'app-counter-index',
  templateUrl: './counter-index.component.html',
  styleUrls: ['./counter-index.component.css']
})
export class CounterIndexComponent {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch({ type: CounterTypes.INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: CounterTypes.DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: CounterTypes.RESET });
  }

}
