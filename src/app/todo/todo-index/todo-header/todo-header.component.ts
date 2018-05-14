import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent {
  inputValue = '';
  @Input() placeholder = 'What needs to be done?';
  // @Input() delay = 300;
  // @Output() textChanges = new EventEmitter<string>();
  @Output() EnterUp = new EventEmitter<string>();
  constructor(private ref: ElementRef) {
/*    const event$ = Observable.fromEvent(ref.nativeElement, 'input')
      .map(() => this.inputValue)
      .filter(input => input.trim().length > 0)
      .debounceTime(this.delay)
      .distinctUntilChanged();
    event$.subscribe(input => {});*/
  }
  enterUp() {
    if (this.inputValue.trim().length === 0) {
      return;
    }
    this.EnterUp.emit(this.inputValue);
    this.inputValue = '';
  }

}
