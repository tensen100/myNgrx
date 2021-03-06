import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Book} from '../models/book';

@Injectable()
export class BookService {
  private API_PATH = 'https://';
  constructor(private http: HttpClient) {}

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http.get<{items: Book[]}>(`${this.API_PATH}?q=${queryTitle}`)
      .pipe(map(books => books.items || []));
  }
  retrieveBook(volumeId: string): Observable<Book> {
    return this.http.get<Book>(`${this.API_PATH}/${volumeId}`);
  }
}
