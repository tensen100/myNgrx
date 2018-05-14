import { TodoFilterActionTypes } from '../actions/todoFilter.action';
import { Action } from '@ngrx/store';
import { Todo } from '../model/Todo';

export const TodoFilterReducer = (state = (todo: Todo) => todo, action: Action) => {
  switch (action.type) {
    case TodoFilterActionTypes.SHOW_ALL:
      return todo => todo;
    case TodoFilterActionTypes.SHOW_ACTIVE:
      return todo => !todo.completed;
    case TodoFilterActionTypes.SHOW_COMPLETED:
      return todo => todo.completed;
    default:
      return state;
  }
};
