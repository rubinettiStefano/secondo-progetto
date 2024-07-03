import { Component, Input } from '@angular/core';
import { Book } from '../model/Book';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent 
{

  @Input() content!:Book;
}
