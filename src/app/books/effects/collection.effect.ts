import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import {
  AddBook, AddBookFail, AddBookSuccess, CollectionActions, CollectionActionTypes, LoadFail,
  LoadSuccess, RemoveBook, RemoveBookFail, RemoveBookSuccess
} from '../actions/collection.action';
import {catchError, switchMap, toArray, map, mergeMap} from 'rxjs/operators';
import { Book} from '../models/book';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CollectionEffects {
  @Effect({dispatch: false})
  openDB$: Observable<any> = defer(() => {
    return this.db.open('books_app');
  });

  @Effect()
  loadCollection$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.Load),
    switchMap(() =>
    this.db
      .query('books')
      .pipe(
        toArray(),
        map((books: Book[]) => new LoadSuccess(books)),
        catchError(error => of(new LoadFail(error)))
      ))
  );

  @Effect()
  addBookToCollection$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.AddBook),
    map((action: AddBook) => action.payload),
    mergeMap(book =>
    this.db
      .insert('books', [book])
      .pipe(
        map(() => new AddBookSuccess(book)),
        catchError(() => of(new AddBookFail(book)))
        )
      ),
  );

  @Effect()
  removeBookFromCollection$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.RemoveBook),
    map((action: RemoveBook) => action.payload),
    mergeMap(book =>
    this.db
      .executeWrite('books', 'delete', [book.id])
      .pipe(
        map(() => new RemoveBookSuccess(book)),
        catchError(() => of(new RemoveBookFail(book)))
      )
    )
  );
  constructor(private actions$: Actions, private db: Database) {}
}
