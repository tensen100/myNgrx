import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Counter2IndexComponent } from './counter2-index/counter2-index.component';
import { Counter2RoutingModule } from './counter2-routing.module';
import { StoreModule } from '@ngrx/store';
import { counter2Reducer } from './reducers/connter2.reducer';

@NgModule({
  imports: [
    CommonModule,
    Counter2RoutingModule,
    StoreModule.forRoot({ counter: counter2Reducer })
  ],
  declarations: [
    Counter2IndexComponent
  ]
})
export class Counter2Module { }
