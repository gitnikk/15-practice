import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() books: Book[];
  searchKeyword:string;

  constructor(private bookService: BookService){}

  ngOnInit(): void {
  }
}
