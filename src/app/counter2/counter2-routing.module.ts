import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Counter2IndexComponent } from './counter2-index/counter2-index.component';

const routes: Routes = [
  {
    path: '',
    component: Counter2IndexComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Counter2RoutingModule { }
