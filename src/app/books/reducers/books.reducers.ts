import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Book } from '../models/book';
import { BookActions, BookActionTypes } from '../actions/book.action';
import { CollectionActions, CollectionActionTypes } from '../actions/collection.action';

export interface State extends EntityState<Book> {
  selectedBookId: string | null;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId: (book: Book) => book.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  selectedBookId: null
});

export function reducer(state = initialState, action: BookActions | CollectionActions) {
  switch (action.type) {
    case BookActionTypes.SearchComplete:
    case CollectionActionTypes.LoadSuccess: {
      return {
        /**
         * 将许多记录添加到实体字典，并返回一个新的状态，包括那些记录。
         * 如果要对集合进行排序，则适配器将在进入已排序的数组时对每个记录进行排序。
         */
        ...adapter.addMany(action.payload, state),
        selectedBookId: state.selectedBookId
      };
    }
    case BookActionTypes.Load: {
      return {
        /**
         * 将一个记录添加到实体字典，并返回一个新的状态，包括该记录如果不存在的话。
         * 如果要对集合进行排序，则适配器将把新记录插入到已排序的数组中。
         */
        ...adapter.addOne(action.payload, state),
        selectedBookId: state.selectedBookId
      };
    }
    case BookActionTypes.Select: {
      return {
        ...state,
        selectedBookId: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export const getSelected = (state: State) => state.selectedBookId;
