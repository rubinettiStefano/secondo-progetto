import { Component } from '@angular/core';
import { Book } from '../model/Book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent 
{

  content:Book={id:0,title:"Passaggi Curvi",author:"Lisa Randall",release_date:new Date("2008-03-15"),publisher:"Mondadori",price:23.99};
}
