import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import * as fromBooks from '../../reducers';
import * as collection from '../../actions/collection.action';
import { Book } from '../../models/book';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionComponent implements OnInit {
  books$: Observable<Book[]>;
  constructor(private store: Store<fromBooks.State>) {
    this.books$ = store.pipe(select(fromBooks.getBookCollection));
  }

  ngOnInit() {
    this.store.dispatch(new collection.Load());
  }

}
