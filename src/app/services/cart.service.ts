import { Injectable } from '@angular/core';
import { Book } from '../model/Book';
import { Film } from '../model/Film';

@Injectable({
  providedIn: 'root'
})
export class CartService 
{
  booksToBuy:Book[] = [];
  filmsToBuy:Film[] = [];
  

  addBookToCart(book:Book):void
  {
    this.booksToBuy.push(book);
  }

  addFilmToCart(film:Film):void
  {
    this.filmsToBuy.push(film);
  }
}
