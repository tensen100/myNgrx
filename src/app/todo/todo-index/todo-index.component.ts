import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {select, Store} from '@ngrx/store';
import {Todo} from '../model/Todo';
import {
  TodoAddTodoAction, TodoClearCompletedAction, TodoRemoveTodoAction, TodoToggleAllAction,
  TodoToggleTodoAction
} from '../actions/todo.action';
import { UUID} from 'angular2-uuid';

@Component({
  selector: 'app-todo-index',
  templateUrl: './todo-index.component.html',
  styleUrls: ['./todo-index.component.css']
})
export class TodoIndexComponent {

  todo$: Observable<Todo[]>;
  constructor(private store$: Store<Todo[]>) {
    this.todo$ = this.store$.pipe(select('todos'));
  }
  add(desc: string) {
    const todo: Todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    };
    this.store$.dispatch(new TodoAddTodoAction(todo));
  }
  toggleTodo(todo: Todo) {
    this.store$.dispatch(new TodoToggleTodoAction(todo));
  }
  toggleAll() {
    this.store$.dispatch(new TodoToggleAllAction(null));
  }
  removeTodo(todo: Todo) {
    this.store$.dispatch(new TodoRemoveTodoAction(todo));
  }
  clearCompleted() {
    this.store$.dispatch(new TodoClearCompletedAction(null));
  }
}
