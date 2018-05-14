import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Output() RemoveTodo = new EventEmitter<Todo>();
  @Output() ToggleTodo = new EventEmitter<Todo>();
  @Input()
  set todos(todos: Todo[]) {
    if (todos !== null) {
      this._todos = [...todos];
    }
  }
  _todos: Todo[] = [];
  get todos() {
    return this._todos;
  }

  onRemoveTriggered(todo: Todo) {
    this.RemoveTodo.emit(todo);
  }
  onToggleTriggered(todo: Todo) {
    this.ToggleTodo.emit(todo);
  }


}
