import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from "./book/book.component";
import { BookListComponent } from "./book-list/book-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BookComponent, BookListComponent]
})
export class AppComponent {
  title = 'secondo-progetto';
}
