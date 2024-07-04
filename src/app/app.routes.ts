import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FilmListComponent } from './film-list/film-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const routes: Routes = [
    {path:"",component:HomepageComponent},
    {path:"films",component:FilmListComponent},
    {path:"books",component:BookListComponent},
    {path:"books/:id",component:BookDetailComponent}
    //books/{id}
];
