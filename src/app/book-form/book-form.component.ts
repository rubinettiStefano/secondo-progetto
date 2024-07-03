import { Component } from '@angular/core';
import { Book } from '../model/Book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule,FormsModule,MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent 
{
  book:Book={id:0,author:"",release_date:new Date(),title:"",price:0,imgUrl:"",publisher:""};
}
