import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareBookService {
  books: any;
  constructor() {}
  setBook(book: any) {
    this.books = book;
  }
  getBook() {
    return this.books;
  }
}
