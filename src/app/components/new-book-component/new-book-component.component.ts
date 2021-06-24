import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { ShareBookService } from '../../shared/share-book.service';

@Component({
  selector: 'app-new-book-component',
  templateUrl: './new-book-component.component.html',
  styleUrls: ['./new-book-component.component.scss'],
})
export class NewBookComponentComponent implements OnInit {
  books!: Book[];

  inputName!: string;
  inputDateTime!: number;

  constructor(private shared: ShareBookService) {}

  ngOnInit(): void {
    this.books = [
      {
        name: 'Harry Potter',
        year: 2010,
        reviews: [
          {
            email: 'fanalriansyah@gmail.com',
            note: 'Great Book',
          },
        ],
      },
      {
        name: 'The Hunger Games',
        year: 2012,
        reviews: [
          {
            email: 'opanpan@gmail.com',
            note: 'note bad',
          },
        ],
      },
    ];
    this.shared.setBook(this.books);
  }

  addBook() {
    this.books.push({
      name: this.inputName,
      year: this.inputDateTime,
      reviews: null,
    });
    console.log(`Buku ${this.inputName} Telah Berhasil Dibuat `);
  }
}
