import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewBookComponentComponent } from './components/new-book-component/new-book-component.component';
import { BookListComponentComponent } from './components/book-list-component/book-list-component.component';
import { BookReviewComponentComponent } from './components/book-review-component/book-review-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBookComponentComponent,
    BookListComponentComponent,
    BookReviewComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
