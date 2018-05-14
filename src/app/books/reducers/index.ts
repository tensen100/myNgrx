
import * as fromSearch from './search.reducer';
import * as fromBooks from './books.reducers';
import * as fromCollection from './collection.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
// import * as fromRoot from '../../reducers';

export interface BooksState {
  search: fromSearch.State;
  books: fromBooks.State;
  collection: fromCollection.State;
}

export interface State {
  books: BooksState;
}

export const reducers = {
  search: fromSearch.reducer,
  books: fromBooks.reducer,
  collections: fromCollection.reducer,
};

/**
 * 选择器函数是map函数的工厂
 * 传递一个参数返回一个函数，该函数从较大的状态树映射到较小的状态树
 */

/**
 * 选择图书的状态
 * @type {MemoizedSelector<object, BooksState>}
 *
 * ```ts
 * class MyComponent {
 *   constructor(state$: Observable<State>) {
 *     this.booksState$ = state$.pipe(select(getBooksState));
 *   }
 * }
 * ```
 */
export const getBooksState = createFeatureSelector<BooksState>('books');

export const getBookEntitiesState = createSelector(
  getBooksState,
  state => state.books
);

// export const getSelectedBookId = createSelector(
//   getBookEntitiesState,
//   fromBooks.getSelectedId
// );

export const {
  selectEntities: getBookEntities,
} = fromBooks.adapter.getSelectors(getBookEntitiesState);

export const getCollectionState = createSelector(
  getBooksState,
  (state: BooksState) => state.collection
);

export const getCollectionBookIds = createSelector(
  getCollectionState,
  fromCollection.getIds
);
export const getBookCollection = createSelector(
  getBookEntities,
  getCollectionBookIds,
  (entities, ids) => {
    return ids.map(id => entities[id]);
  }
);

