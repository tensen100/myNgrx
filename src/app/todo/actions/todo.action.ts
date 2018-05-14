import {Action} from '@ngrx/store';
import {Todo} from '../model/Todo';


export const TodoActionTypes = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  TOGGLE_ALL: 'TOGGLE_ALL',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED',
  FETCH_FROM_API: 'FETCH_FROM_API',
};

export class TodoAddTodoAction implements Action {
  type = TodoActionTypes.ADD_TODO;
  constructor(public payload: Todo) {}
}
export class TodoRemoveTodoAction implements Action {
  type = TodoActionTypes.REMOVE_TODO;
  constructor(public payload: Todo) {}
}
export class TodoToggleTodoAction implements Action {
  type = TodoActionTypes.TOGGLE_TODO;
  constructor(public payload: Todo) {}
}
export class TodoToggleAllAction implements Action {
  type = TodoActionTypes.TOGGLE_ALL;
  constructor(public payload: null) {}
}
export class TodoClearCompletedAction implements Action {
  type = TodoActionTypes.CLEAR_COMPLETED;
  constructor(public payload: null) {}
}
export class TodoFetchFromApiAction implements Action {
  type = TodoActionTypes.FETCH_FROM_API;
  constructor(public payload: Todo) {}
}

export type TodoActions =
  TodoAddTodoAction |
  TodoRemoveTodoAction |
  TodoToggleTodoAction |
  TodoToggleAllAction |
  TodoClearCompletedAction |
  TodoFetchFromApiAction;
