import { CounterActions, Counter2ActionTypes} from '../actions/counter2.action';

/*export const Counter2Types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};*/


/*export function counter2Reducer(state: number = 0, action: Action) {
  switch (action.type) {
    case Counter2Types.INCREMENT:
      return state + 1;

    case Counter2Types.DECREMENT:
      return state - 1;

    case Counter2Types.RESET:
      return 0;

    default:
      return state;
  }
}*/


export function counter2Reducer(state: number = 0, action: CounterActions) {
  switch (action.type) {
    case Counter2ActionTypes.INCREMENT: {
      return state + 1;
    }

    case Counter2ActionTypes.DECREMENT: {
      return state - 1;
    }

    case Counter2ActionTypes.RESET: {
      return action.payload; // typed to number
    }

    default: {
      return state;
    }
  }
}
