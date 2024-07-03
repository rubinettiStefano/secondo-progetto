import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from "./book/book.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookFormComponent } from "./book-form/book-form.component";
import { FilmListComponent } from './film-list/film-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomepageComponent } from "./homepage/homepage.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MatGridListModule, RouterOutlet, BookComponent, BookListComponent, BookFormComponent, FilmListComponent, HomepageComponent]
})
export class AppComponent {
  title = 'secondo-progetto';
}
