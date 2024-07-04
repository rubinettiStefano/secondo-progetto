import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../model/Book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule,FormsModule,MatFormFieldModule, MatInputModule, MatSelectModule,MatIconModule,MatButtonModule,MatExpansionModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent 
{
  book:Book={id:0,author:"",release_date:new Date(),title:"",price:0,imgUrl:"",publisher:"",description:""};
  @Output() saveEvent:EventEmitter<Book> = new EventEmitter<Book>();

  saveBook():void
  {
    this.saveEvent.emit(this.book);
    this.book = {id:0,author:"",release_date:new Date(),title:"",price:0,imgUrl:"",publisher:"",description:""};
  }

}
