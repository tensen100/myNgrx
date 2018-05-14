import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'counter',
    loadChildren: './counter/counter.module#CounterModule'
  },
  {
    path: 'counter2',
    loadChildren: './counter2/counter2.module#Counter2Module'
  },
  {
    path: 'pet',
    loadChildren: './pet/pet.module#PetModule'
  },
  {
    path: 'todo',
    loadChildren: './todo/todo.module#TodoModule'
  }
  // {
  //   path: 'books',
  //   loadChildren: './books/books.module#BooksModule'
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
