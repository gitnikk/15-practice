import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/services/book.service';
import { BookListComponent } from '../book-list/book-list.component';
@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html'
})
export class BookManagementComponent implements OnInit {
  books:Book[];

  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  addBookDetails(bookData:any){
    console.log("bookData", bookData);
    this.books.push(bookData);
    this.books.sort((a,b)=>{
      return a.bookName.localeCompare(b.bookName);
    })
  }
}
