import { Action } from '@ngrx/store';

export const CounterTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};


export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case CounterTypes.INCREMENT:
      return state + 1;

    case CounterTypes.DECREMENT:
      return state - 1;

    case CounterTypes.RESET:
      return 0;

    default:
      return state;
  }
}
