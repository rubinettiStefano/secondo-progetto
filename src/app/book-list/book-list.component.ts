import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../model/Book';
import { CommonModule } from '@angular/common';
import { BookComponent } from "../book/book.component";
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BookFormComponent } from "../book-form/book-form.component";

@Component({
    selector: 'app-book-list',
    standalone: true,
    templateUrl: './book-list.component.html',
    styleUrl: './book-list.component.css',
    imports: [CommonModule, BookComponent, MatGridListModule, FormsModule, MatIconModule, MatInputModule, MatButtonModule, BookFormComponent]
})
export class BookListComponent 
{
  constructor(private bookService:BookService)
  {
    this.booksToShow = bookService.getAll();
  }

  booksToShow:Book[];
  filterCriteria:string="";//ciò che mettiamo qui deve essere contenuto
  //nel titolo o nell'autore del libro perche un determinato libro sia mostrato

  deleteBook(id:number):void
  {
    this.bookService.deleteById(id);
    this.filter();
  }

  filter():void
  {
    this.booksToShow = this.bookService.getFiltered(this.filterCriteria);
  }

  clearFilter():void
  {
    this.booksToShow = this.bookService.getAll();
    this.filterCriteria = "";
  }
  saveBook(bookToSave:Book):void
  {
    this.booksToShow = this.bookService.save(bookToSave);
  }
}
