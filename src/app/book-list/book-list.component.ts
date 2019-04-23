import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { AdminService } from '../services/admin.service';

import { Book } from '../models/book.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  admin: Boolean = false;
  books: Book[];
  booksSubscription: Subscription;

  constructor(private booksService: BooksService, private adminService: AdminService, private router: Router) {}

  ngOnInit(): Promise<any> {
    this.booksSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );

    this.booksService.getBooks();
    this.booksService.emitBooks();

    return this.adminService
        .myRole()
        .then(roles => {
          console.info(roles);
          if(roles == "BIBLIOTHECAIRE") {
            this.admin = true;
          } else if (roles == "USER"){
            this.admin = false;
          } else {
            this.admin = false;
          }
        });
  }

  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book) {
    this.booksService.removeBook(book);
  }

  onFollowBook(book) {
    console.log(book)
    this.booksService.followBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }
}
