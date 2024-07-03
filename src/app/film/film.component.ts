import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../model/Film';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent 
{

  @Input() content!:Film;

  @Output() deleteEvent:EventEmitter<number> = new EventEmitter<number>();

  delete()
  {
    this.deleteEvent.emit(this.content.id);
  }

}
