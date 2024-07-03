import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FilmListComponent } from './film-list/film-list.component';
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [
    {path:"",component:HomepageComponent},
    {path:"films",component:FilmListComponent},
    {path:"books",component:BookListComponent},
];
