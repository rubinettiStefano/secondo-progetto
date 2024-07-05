import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/Book';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterLink,MatCardModule,CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent 
{
  constructor(private cart:CartService){}

  @Input() content!:Book;

  @Output() deleteEvent:EventEmitter<number> = new EventEmitter<number>();

  addToCart()
  {
    this.cart.addBookToCart(this.content);
  }

  delete()
  {
    this.deleteEvent.emit(this.content.id);
  }
}
