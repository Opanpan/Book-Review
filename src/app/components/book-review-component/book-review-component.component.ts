import { Component, OnInit } from '@angular/core';
import { ShareBookService } from '../../shared/share-book.service';

@Component({
  selector: 'app-book-review-component',
  templateUrl: './book-review-component.component.html',
  styleUrls: ['./book-review-component.component.scss'],
})
export class BookReviewComponentComponent implements OnInit {
  books: any;
  inputReviewersEmail!: string;
  inputReviewersNote!: string;
  constructor(private shared: ShareBookService) {}

  ngOnInit(): void {
    this.books = this.shared.getBook();
  }
  addReview() {
    this.books.push({
      reviews: {
        email: this.inputReviewersEmail,
        note: this.inputReviewersNote,
      },
    });
  }
}
