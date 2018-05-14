import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { StoreModule } from '@ngrx/store';

import { FindBookComponent } from './pages/find-book/find-book.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { ViewBookComponent } from './pages/view-book/view-book.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { BookPreviewListComponent } from './components/book-preview-list/book-preview-list.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { AddCommasPipe } from './pipes/add-commas.pipe';
import { reducers } from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {BookEffects} from './effects/books.effect';
import {CollectionEffects} from './effects/collection.effect';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('books', reducers),
    EffectsModule.forFeature([BookEffects, CollectionEffects]),
  ],
  declarations: [
    FindBookComponent,
    CollectionComponent,
    ViewBookComponent,
    BookPreviewComponent,
    BookPreviewListComponent,
    BookSearchComponent,
    EllipsisPipe,
    AddCommasPipe
  ]
})
export class BooksModule { }
