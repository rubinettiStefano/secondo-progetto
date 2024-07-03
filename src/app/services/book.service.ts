import { Injectable } from '@angular/core';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService 
{
    books: Book[] = [
      {
          id: 1,
          author: "J.K. Rowling",
          release_date: new Date('1997-06-26'),
          title: "Harry Potter and the Philosopher's Stone",
          publisher: "Bloomsbury",
          price: 20.99,
          imgUrl: "https://example.com/hp1.jpg"
      },
      {
          id: 2,
          author: "J.R.R. Tolkien",
          release_date: new Date('1954-07-29'),
          title: "The Lord of the Rings: The Fellowship of the Ring",
          publisher: "George Allen & Unwin",
          price: 15.99,
          imgUrl: "https://example.com/lotr1.jpg"
      },
      {
          id: 3,
          author: "George Orwell",
          release_date: new Date('1949-06-08'),
          title: "1984",
          publisher: "Secker & Warburg",
          price: 12.99,
          imgUrl: "https://example.com/1984.jpg"
      },
      {
          id: 4,
          author: "Harper Lee",
          release_date: new Date('1960-07-11'),
          title: "To Kill a Mockingbird",
          publisher: "J.B. Lippincott & Co.",
          price: 10.99,
          imgUrl: "https://example.com/mockingbird.jpg"
      },
      {
          id: 5,
          author: "F. Scott Fitzgerald",
          release_date: new Date('1925-04-10'),
          title: "The Great Gatsby",
          publisher: "Charles Scribner's Sons",
          price: 14.99,
          imgUrl: "https://example.com/gatsby.jpg"
      },
      {
          id: 6,
          author: "Jane Austen",
          release_date: new Date('1813-01-28'),
          title: "Pride and Prejudice",
          publisher: "T. Egerton, Whitehall",
          price: 11.99,
          imgUrl: "https://example.com/pride_prejudice.jpg"
      },
      {
          id: 7,
          author: "Mary Shelley",
          release_date: new Date('1818-01-01'),
          title: "Frankenstein",
          publisher: "Lackington, Hughes, Harding, Mavor & Jones",
          price: 9.99,
          imgUrl: "https://example.com/frankenstein.jpg"
      },
      {
          id: 8,
          author: "Gabriel Garcia Marquez",
          release_date: new Date('1967-06-05'),
          title: "One Hundred Years of Solitude",
          publisher: "Harper & Row",
          price: 13.99,
          imgUrl: "https://example.com/solitude.jpg"
      },
      {
          id: 9,
          author: "Herman Melville",
          release_date: new Date('1851-10-18'),
          title: "Moby-Dick",
          publisher: "Richard Bentley",
          price: 16.99,
          imgUrl: "https://example.com/mobydick.jpg"
      },
      {
          id: 10,
          author: "Leo Tolstoy",
          release_date: new Date('1869-01-01'),
          title: "War and Peace",
          publisher: "The Russian Messenger",
          price: 19.99,
          imgUrl: "https://example.com/warandpeace.jpg"
      },
      {
          id: 11,
          author: "Charles Dickens",
          release_date: new Date('1861-01-01'),
          title: "Great Expectations",
          publisher: "Chapman & Hall",
          price: 14.99,
          imgUrl: "https://example.com/expectations.jpg"
      },
      {
          id: 12,
          author: "Markus Zusak",
          release_date: new Date('2005-09-01'),
          title: "The Book Thief",
          publisher: "Picador",
          price: 12.99,
          imgUrl: "https://example.com/bookthief.jpg"
      },
      {
          id: 13,
          author: "Homer",
          release_date: new Date('800-01-01'),
          title: "The Iliad",
          publisher: "Ancient Greece",
          price: 18.99,
          imgUrl: "https://example.com/iliad.jpg"
      },
      {
          id: 14,
          author: "Fyodor Dostoevsky",
          release_date: new Date('1866-01-01'),
          title: "Crime and Punishment",
          publisher: "The Russian Messenger",
          price: 17.99,
          imgUrl: "https://example.com/crimeandpunishment.jpg"
      },
      {
          id: 15,
          author: "J.D. Salinger",
          release_date: new Date('1951-07-16'),
          title: "The Catcher in the Rye",
          publisher: "Little, Brown and Company",
          price: 10.99,
          imgUrl: "https://example.com/catcherintherye.jpg"
      }
  ];

  getAll():Book[]
  {
    return this.books;
  }
}
