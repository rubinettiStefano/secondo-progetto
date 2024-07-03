import { Component, Input } from '@angular/core';
import { Book } from '../model/Book';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent 
{

  @Input() content!:Book;
}
