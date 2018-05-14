import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { BookActionTypes, Search, SearchComplete, SearchError } from '../actions/book.action';
import { catchError, debounceTime, map, skip, switchMap, takeUntil } from 'rxjs/operators';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/Observable/empty';
import { of } from 'rxjs/observable/of';
import { BookService } from '../service/book.service';
import { Book } from '../models/book';
import { Action } from '@ngrx/store';

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>(
  'Search Scheduler'
);
@Injectable()
export class BookEffects {
  @Effect()
  search$: Observable<Action> = this.actions$.pipe(
    ofType<Search>(BookActionTypes.Search),
    debounceTime(this.debounce || 300, this.scheduler || async),
    map(action => action.payload),
    switchMap(query => {
      if (query === '') {
        return empty();
      }

      const nextSearch$ = this.actions$.pipe(
        ofType(BookActionTypes.Search),
        skip(1)
      );

      return this.doubanBooks
        .searchBooks(query)
        .pipe(
          takeUntil(nextSearch$),
          map((books: Book[]) => new SearchComplete(books)),
          catchError(err => of(new SearchError(err)))
        );
    })
  );
  constructor(
    private actions$: Actions,
    private doubanBooks: BookService,
    @Optional()
    @Inject(SEARCH_DEBOUNCE)
    private debounce: number,
    @Optional()
    @Inject(SEARCH_SCHEDULER)
    private scheduler: Scheduler
  ) {}
}
