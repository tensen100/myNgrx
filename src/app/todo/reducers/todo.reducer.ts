import {TodoActions, TodoActionTypes} from '../actions/todo.action';
import {Todo} from '../model/Todo';

export const initialState: Todo[] = [
  {
    id: '1',
    desc: '今天天气超级好！！！',
    completed: false
  }
];

export const TodoReducer = (state = initialState, action: TodoActions) => {
  console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      return [...state, action.payload];
    }
    case TodoActionTypes.REMOVE_TODO: {
      return state.filter(todo => todo.id !== action.payload.id);
    }
    case TodoActionTypes.TOGGLE_TODO: {
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {...todo, completed: !todo.completed};
      });
    }
    case TodoActionTypes.TOGGLE_ALL: {
      return state.map(todo => {
        return {...todo, completed: !todo.completed};
      });
    }
    case TodoActionTypes.CLEAR_COMPLETED: {
      return state.filter(todo => !todo.completed);
    }
    case TodoActionTypes.FETCH_FROM_API: {
      return {...action.payload};
    }
    default: {
      return state;
    }
  }
};
