import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent {
  @Input() itemCount: number;
  @Output() Clear = new EventEmitter<boolean>();
  @Output() ToggleAll = new EventEmitter<boolean>();
  onClearCompleted() {
    this.Clear.emit(true);
  }
  onToggleAllTriggered() {
    this.ToggleAll.emit(true);
  }
}
