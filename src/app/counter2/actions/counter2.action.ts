import { Action } from '@ngrx/store';

export enum Counter2ActionTypes {
  INCREMENT = '[Counter] Increment',
  DECREMENT = '[Counter] Decrement',
  RESET = '[Counter] Reset'
}

export class Increment implements Action {
  readonly type = Counter2ActionTypes.INCREMENT;
}

export class Decrement implements Action {
  readonly type = Counter2ActionTypes.DECREMENT;
}

export class Reset implements Action {
  readonly type = Counter2ActionTypes.RESET;

  constructor(public payload: number) {}
}

export type CounterActions = Increment | Decrement | Reset;
