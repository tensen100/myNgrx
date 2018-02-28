import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterIndexComponent } from './counter-index/counter-index.component';
import { CounterRoutingModule } from './counter-routing.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/connter.reducer';

@NgModule({
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  declarations: [CounterIndexComponent]
})
export class CounterModule { }
