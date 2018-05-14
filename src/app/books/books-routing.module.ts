import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FindBookComponent } from './pages/find-book/find-book.component';
import { ViewBookComponent } from './pages/view-book/view-book.component';
import { CollectionComponent } from './pages/collection/collection.component';

const routes: Routes = [
  { path: 'find', component: FindBookComponent },
  {
    path: ':id',
    component: ViewBookComponent,
  },
  { path: '', component: CollectionComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BooksRoutingModule { }
