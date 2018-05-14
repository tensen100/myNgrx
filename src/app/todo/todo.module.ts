import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoIndexComponent } from './todo-index/todo-index.component';
import { TodoRoutingModule } from './todo-routing.module';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './reducers/todo.reducer';
import { TodoHeaderComponent } from './todo-index/todo-header/todo-header.component';
import { TodoFooterComponent } from './todo-index/todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-index/todo-item/todo-item.component';
import { TodoListComponent } from './todo-index/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import {TodoFilterReducer} from './reducers/todoFilter.reducer';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    StoreModule.forRoot({todos: TodoReducer, todoFilter: TodoFilterReducer})
  ],
  declarations: [
    TodoIndexComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent
  ]
})
export class TodoModule { }
