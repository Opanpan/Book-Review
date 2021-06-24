import { Component, OnInit } from '@angular/core';
import { ShareBookService } from '../../shared/share-book.service';

@Component({
  selector: 'app-book-list-component',
  templateUrl: './book-list-component.component.html',
  styleUrls: ['./book-list-component.component.scss'],
})
export class BookListComponentComponent implements OnInit {
  books: any;

  constructor(private shared: ShareBookService) {}

  ngOnInit(): void {
    this.books = this.shared.getBook();
  }
}
