import { Component, EventEmitter, Output } from '@angular/core';
import { Film } from '../model/Film';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-film-form',
  standalone: true,
  imports: [CommonModule,FormsModule,MatFormFieldModule, MatInputModule, MatSelectModule,MatIconModule,MatButtonModule,MatExpansionModule],
  templateUrl: './film-form.component.html',
  styleUrl: './film-form.component.css'
})
export class FilmFormComponent 
{
  film:Film={id:0,director:"",release_date:new Date(),title:"",duration:0,imgUrl:"",publisher:""};
  @Output() saveEvent:EventEmitter<Film> = new EventEmitter<Film>();

  saveFilm():void
  {
    this.saveEvent.emit(this.film);
    this.film = {id:0,director:"",release_date:new Date(),title:"",duration:0,imgUrl:"",publisher:""};
  }

}