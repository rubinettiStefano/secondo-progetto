import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../model/Film';
import { CommonModule, Location } from '@angular/common';
import { FilmComponent } from "../film/film.component";
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FilmFormComponent } from "../film-form/film-form.component";

@Component({
    selector: 'app-film-list',
    standalone: true,
    templateUrl: './film-list.component.html',
    styleUrl: './film-list.component.css',
    imports: [CommonModule, FilmComponent, MatGridListModule, FormsModule, MatIconModule, MatInputModule, MatButtonModule, FilmFormComponent]
})
export class FilmListComponent 
{
  constructor(private filmService:FilmService, private location:Location)
  {
    this.filmsToShow = filmService.getAll();
  }

  filmsToShow:Film[];
  filterCriteria:string="";//ciò che mettiamo qui deve essere contenuto
  //nel titolo o nell'autore del libro perche un determinato libro sia mostrato

  deleteFilm(id:number):void
  {
    this.filmService.deleteById(id);
    this.filter();
  }

  goBack():void
  {
    this.location.back();
  }
  filter():void
  {
    this.filmsToShow = this.filmService.getFiltered(this.filterCriteria);
  }

  clearFilter():void
  {
    this.filmsToShow = this.filmService.getAll();
    this.filterCriteria = "";
  }
  saveFilm(filmToSave:Film):void
  {
    this.filmsToShow = this.filmService.save(filmToSave);
  }
}