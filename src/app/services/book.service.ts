import { Injectable } from '@angular/core';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService 
{

    maxId:number=15;
    books: Book[] = [
        {
            id: 1,
            author: "J.K. Rowling",
            release_date: new Date('1997-06-26'),
            title: "Harry Potter and the Philosopher's Stone",
            publisher: "Bloomsbury",
            price: 20.99,
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg"
        },
        {
            id: 2,
            author: "J.R.R. Tolkien",
            release_date: new Date('1954-07-29'),
            title: "The Lord of the Rings: The Fellowship of the Ring",
            publisher: "George Allen & Unwin",
            price: 15.99,
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
        },
        {
            id: 3,
            author: "George Orwell",
            release_date: new Date('1949-06-08'),
            title: "1984",
            publisher: "Secker & Warburg",
            price: 12.99,
            imgUrl: "https://www.theoriginalunderground.com/cdn/shop/products/1984-george-orwell-cover-print-179850_1024x.jpg?v=1656593374"
        },
        {
            id: 4,
            author: "Harper Lee",
            release_date: new Date('1960-07-11'),
            title: "To Kill a Mockingbird",
            publisher: "J.B. Lippincott & Co.",
            price: 10.99,
            imgUrl: "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 5,
            author: "F. Scott Fitzgerald",
            release_date: new Date('1925-04-10'),
            title: "The Great Gatsby",
            publisher: "Charles Scribner's Sons",
            price: 14.99,
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/423px-The_Great_Gatsby_Cover_1925_Retouched.jpg"
        },
        {
            id: 6,
            author: "Jane Austen",
            release_date: new Date('1813-01-28'),
            title: "Pride and Prejudice",
            publisher: "T. Egerton, Whitehall",
            price: 11.99,
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg"
        },
        {
            id: 7,
            author: "Mary Shelley",
            release_date: new Date('1818-01-01'),
            title: "Frankenstein",
            publisher: "Lackington, Hughes, Harding, Mavor & Jones",
            price: 9.99,
            imgUrl: "https://interactive.wttw.com/sites/default/files/frankenstein@2x.jpg"
        },
        {
            id: 8,
            author: "Gabriel Garcia Marquez",
            release_date: new Date('1967-06-05'),
            title: "One Hundred Years of Solitude",
            publisher: "Harper & Row",
            price: 13.99,
            imgUrl: "https://pictures.abebooks.com/inventory/30831605379.jpg"
        },
        {
            id: 9,
            author: "Herman Melville",
            release_date: new Date('1851-10-18'),
            title: "Moby-Dick",
            publisher: "Richard Bentley",
            price: 16.99,
            imgUrl: "https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 10,
            author: "Leo Tolstoy",
            release_date: new Date('1869-01-01'),
            title: "War and Peace",
            publisher: "The Russian Messenger",
            price: 19.99,
            imgUrl: "https://m.media-amazon.com/images/I/51lLr8b16DL.jpg"
        },
        {
            id: 11,
            author: "Charles Dickens",
            release_date: new Date('1861-01-01'),
            title: "Great Expectations",
            publisher: "Chapman & Hall",
            price: 14.99,
            imgUrl: "https://m.media-amazon.com/images/I/51evTcoKMGL.jpg"
        },
        {
            id: 12,
            author: "Markus Zusak",
            release_date: new Date('2005-09-01'),
            title: "The Book Thief",
            publisher: "Picador",
            price: 12.99,
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg"
        },
        {
            id: 13,
            author: "Homer",
            release_date: new Date('800-01-01'),
            title: "The Iliad",
            publisher: "Ancient Greece",
            price: 18.99,
            imgUrl: "https://m.media-amazon.com/images/I/71FVVdj9w4L._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 14,
            author: "Fyodor Dostoevsky",
            release_date: new Date('1866-01-01'),
            title: "Crime and Punishment",
            publisher: "The Russian Messenger",
            price: 17.99,
            imgUrl: "https://m.media-amazon.com/images/I/71O2XIytdqL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 15,
            author: "J.D. Salinger",
            release_date: new Date('1951-07-16'),
            title: "The Catcher in the Rye",
            publisher: "Little, Brown and Company",
            price: 10.99,
            imgUrl: "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg"
        }
    ];
  getAll():Book[]
  {
    return this.books;
  }

  getFiltered(criteria:string):Book[]
  {
    return this.getAll().filter(b=> (b.author+" "+b.title).includes(criteria));
  }
  
  deleteById(id:number):void
  {
    this.books.splice(this.books.findIndex(b=>b.id==id),1);
  }

  save(book:Book):Book[] //riceve un libro, lo salva, restituisce la lista di tutti i libri
  {
    this.maxId++;
    book.id=this.maxId;
    this.books.push(book);
    return this.books;
  }
}
