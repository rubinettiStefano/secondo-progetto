import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from "./book/book.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookFormComponent } from "./book-form/book-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BookComponent, BookListComponent, BookFormComponent]
})
export class AppComponent {
  title = 'secondo-progetto';
}
