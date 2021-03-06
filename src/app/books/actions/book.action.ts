import { Action } from '@ngrx/store';
import { Book } from '../models/book';

export enum BookActionTypes {
  Search = '[Book] Search',
  SearchComplete = '[Book] Search Complete',
  SearchError = '[Book] Search Error',
  Load = '[Book] Load',
  Select = '[Book] Select',
}

/**
 * Search Action
 */
export class Search implements Action {
  readonly type = BookActionTypes.Search;

  constructor(public payload: string) {}
}

export class SearchComplete implements Action {
  readonly type = BookActionTypes.SearchComplete;

  constructor(public payload: Book[]) {}
}

export class SearchError implements Action {
  readonly type = BookActionTypes.SearchError;

  constructor(public payload: string) {}
}

/**
 * Load Action
 */
export class Load implements Action {
  readonly type = BookActionTypes.Load;

  constructor(public payload: Book) {}
}

export class Select implements Action {
  readonly type = BookActionTypes.Select;

  constructor(public payload: string) {}
}

export type BookActions = Search | SearchComplete | SearchError | Load | Select;
