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
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
            description: "The first book in the Harry Potter series introduces a young wizard who discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry."
        },
        {
            id: 2,
            author: "J.R.R. Tolkien",
            release_date: new Date('1954-07-29'),
            title: "The Lord of the Rings: The Fellowship of the Ring",
            publisher: "George Allen & Unwin",
            price: 15.99,
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
            description: "The epic fantasy novel follows the journey of Frodo Baggins and his companions as they set out to destroy the One Ring and defeat the dark lord Sauron."
        },
        {
            id: 3,
            author: "George Orwell",
            release_date: new Date('1949-06-08'),
            title: "1984",
            publisher: "Secker & Warburg",
            price: 12.99,
            imgUrl: "https://www.theoriginalunderground.com/cdn/shop/products/1984-george-orwell-cover-print-179850_1024x.jpg?v=1656593374",
            description: "A dystopian novel set in a totalitarian society ruled by Big Brother, where individuality and independent thought are persecuted."
        },
        {
            id: 4,
            author: "Harper Lee",
            release_date: new Date('1960-07-11'),
            title: "To Kill a Mockingbird",
            publisher: "J.B. Lippincott & Co.",
            price: 10.99,
            imgUrl: "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
            description: "A novel set in the American South during the 1930s, focusing on issues of race and class through the eyes of young Scout Finch."
        },
        {
            id: 5,
            author: "F. Scott Fitzgerald",
            release_date: new Date('1925-04-10'),
            title: "The Great Gatsby",
            publisher: "Charles Scribner's Sons",
            price: 14.99,
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/423px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
            description: "A classic novel that explores themes of decadence, idealism, resistance to change, social upheaval, and excess during the Jazz Age."
        },
        {
            id: 6,
            author: "Jane Austen",
            release_date: new Date('1813-01-28'),
            title: "Pride and Prejudice",
            publisher: "T. Egerton, Whitehall",
            price: 11.99,
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg",
            description: "A romantic novel that critiques the British landed gentry at the end of the 18th century, focusing on the relationship between Elizabeth Bennet and Mr. Darcy."
        },
        {
            id: 7,
            author: "Mary Shelley",
            release_date: new Date('1818-01-01'),
            title: "Frankenstein",
            publisher: "Lackington, Hughes, Harding, Mavor & Jones",
            price: 9.99,
            imgUrl: "https://interactive.wttw.com/sites/default/files/frankenstein@2x.jpg",
            description: "A novel that tells the story of Victor Frankenstein, a scientist who creates a sapient creature in a scientific experiment gone awry."
        },
        {
            id: 8,
            author: "Gabriel Garcia Marquez",
            release_date: new Date('1967-06-05'),
            title: "One Hundred Years of Solitude",
            publisher: "Harper & Row",
            price: 13.99,
            imgUrl: "https://pictures.abebooks.com/inventory/30831605379.jpg",
            description: "A landmark novel that tells the multi-generational story of the Buendía family, set in the fictional town of Macondo, blending magical realism with historical events."
        },
        {
            id: 9,
            author: "Herman Melville",
            release_date: new Date('1851-10-18'),
            title: "Moby-Dick",
            publisher: "Richard Bentley",
            price: 16.99,
            imgUrl: "https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg",
            description: "A novel that narrates the quest of Ishmael and Captain Ahab's obsessive hunt for Moby Dick, a giant white whale."
        },
        {
            id: 10,
            author: "Leo Tolstoy",
            release_date: new Date('1869-01-01'),
            title: "War and Peace",
            publisher: "The Russian Messenger",
            price: 19.99,
            imgUrl: "https://m.media-amazon.com/images/I/51lLr8b16DL.jpg",
            description: "An epic novel that intertwines the lives of several families against the backdrop of the Napoleonic Wars, exploring themes of war, peace, and social change."
        },
        {
            id: 11,
            author: "Charles Dickens",
            release_date: new Date('1861-01-01'),
            title: "Great Expectations",
            publisher: "Chapman & Hall",
            price: 14.99,
            imgUrl: "https://m.media-amazon.com/images/I/51evTcoKMGL.jpg",
            description: "A coming-of-age novel that follows the life of an orphan named Pip and his growth and personal development through a series of challenges."
        },
        {
            id: 12,
            author: "Markus Zusak",
            release_date: new Date('2005-09-01'),
            title: "The Book Thief",
            publisher: "Picador",
            price: 12.99,
            imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
            description: "A historical novel set during World War II, narrated by Death, that tells the story of a young girl named Liesel who steals books to escape the horrors of war."
        },
        {
            id: 13,
            author: "Homer",
            release_date: new Date('800-01-01'),
            title: "The Iliad",
            publisher: "Ancient Greece",
            price: 18.99,
            imgUrl: "https://m.media-amazon.com/images/I/71FVVdj9w4L._AC_UF1000,1000_QL80_.jpg",
            description: "An ancient Greek epic poem that recounts the significant events of the final weeks of the Trojan War and the Greek siege of the city of Troy."
        },
        {
            id: 14,
            author: "Fyodor Dostoevsky",
            release_date: new Date('1866-01-01'),
            title: "Crime and Punishment",
            publisher: "The Russian Messenger",
            price: 17.99,
            imgUrl: "https://m.media-amazon.com/images/I/71O2XIytdqL._AC_UF1000,1000_QL80_.jpg",
            description: "A psychological drama that follows the mental anguish and moral dilemmas of Raskolnikov, an impoverished ex-student who plans and executes a murder."
        },
        {
            id: 15,
            author: "J.D. Salinger",
            release_date: new Date('1951-07-16'),
            title: "The Catcher in the Rye",
            publisher: "Little, Brown and Company",
            price: 10.99,
            imgUrl: "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg",
            description: "A novel about teenage rebellion and alienation, told through the eyes of the disenchanted Holden Caulfield, who recounts a few days in his life after being expelled from his prep school."
        }
    ];
  getAll():Book[]
  {
    return this.books;
  }

 
  update(book:Book)
  {
    this.books[this.findIndex(book.id)] = book;
  }

  getById(id:number):Book|null
  {
    let res =this.books.find(b=>b.id==id);
    if(!res)
        return null;

    return res;
  }
  getFiltered(criteria:string):Book[]
  {
    return this.getAll().filter(b=> (b.author+" "+b.title).includes(criteria));
  }
  
  deleteById(id:number):void
  {
    this.books.splice(this.findIndex(id),1);
  }

  findIndex(id:number):number
  {
    return this.books.findIndex(b=>b.id==id);
  }

  save(book:Book):Book[] //riceve un libro, lo salva, restituisce la lista di tutti i libri
  {
    this.maxId++;
    book.id=this.maxId;
    this.books.push(book);
    return this.books;
  }
}
