import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../model/Book';
import { CommonModule } from '@angular/common';
import { BookComponent } from "../book/book.component";
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';

@Component({
    selector: 'app-book-list',
    standalone: true,
    templateUrl: './book-list.component.html',
    styleUrl: './book-list.component.css',
    imports: [CommonModule, BookComponent,MatGridListModule]
})
export class BookListComponent 
{
  constructor(private bookService:BookService)
  {
    this.books = bookService.getAll();
  }

  books:Book[];
}
