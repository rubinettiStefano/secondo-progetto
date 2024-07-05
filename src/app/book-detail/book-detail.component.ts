import { Component } from '@angular/core';
import { Book } from '../model/Book';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  providers:[],
  imports: [MatDatepickerModule,CommonModule,FormsModule,MatFormFieldModule, MatInputModule, MatSelectModule,MatIconModule,MatButtonModule,MatExpansionModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent 
{
  constructor(private bookService:BookService ,private route:ActivatedRoute, private router:Router )
  {
    let par:string = route.snapshot.paramMap.get("id")!;
    let idParsato:number = parseInt(par);
    this.book=bookService.getById(idParsato)!;
    this.backup={...this.book};
  }
  book:Book;
  backup:Book;
  displayModal:string="none";

  delete()
  {
    this.bookService.deleteById(this.book.id);
    this.router.navigate(["/books"]);
  }

  update()
  {
    this.bookService.update(this.book);
    this.router.navigate(["/books"]);
  }

  toggleModal(event?:Event)
  {
    if(!event)
      this.displayModal = this.displayModal=="none" ? "block" : "none";
    else
    {
      let targetHtml = event.target as HTMLElement;//as Classe/Interfaccia  = sintassi di casting typescript 
                                                    //(HTMLElement) event.target
      let cliccatoFuori = targetHtml.classList.contains("modal");
      
      if(cliccatoFuori)
        this.displayModal = this.displayModal=="none" ? "block" : "none";
    }
  }

  reset(form: NgForm)
  {
    
    this.book=this.backup;
    form.form.markAsUntouched();
  }

}
