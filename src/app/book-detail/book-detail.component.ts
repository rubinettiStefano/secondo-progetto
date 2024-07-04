import { Component } from '@angular/core';
import { Book } from '../model/Book';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule,FormsModule,MatFormFieldModule, MatInputModule, MatSelectModule,MatIconModule,MatButtonModule,MatExpansionModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent 
{
  constructor(private bookService:BookService ,private route:ActivatedRoute)
  {
    let par = route.snapshot.paramMap.get("id")!;
    let idParsato = parseInt(par);
    this.book=bookService.getById(idParsato)!;
  }
  book:Book;
}
