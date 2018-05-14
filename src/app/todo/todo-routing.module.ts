import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { TodoIndexComponent } from './todo-index/todo-index.component';


const routes: Routes = [
  {
    path: '',
    component: TodoIndexComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodoRoutingModule { }
