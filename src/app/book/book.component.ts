import { Component } from '@angular/core';
import { Book } from '../model/Book';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent 
{

  content:Book={
    id:0,
    title:"Passaggi Curvi",
    author:"Lisa Randall",
    release_date:new Date("2008-03-15"),
    publisher:"Mondadori",
    price:23.99,
    imgUrl:"https://m.media-amazon.com/images/I/413v9Cdq8eL._AC_UF1000,1000_QL80_.jpg"
  };
}
