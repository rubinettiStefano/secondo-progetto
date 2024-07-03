import { Injectable } from '@angular/core';
import { Film } from '../model/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  maxId:number=5;
  films: Film[] = [
    {
      id: 1,
      director: 'Steven Spielberg',
      release_date: new Date('1993-06-11'),
      title: 'Jurassic Park',
      publisher: 'Universal Pictures',
      duration: 127,
      imgUrl: 'https://imgs.search.brave.com/KTqzbYgn8jfncfuEzlCWxSi7Ywu9_FpxS-K6FP0VuTg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFvVDQtTzFSTkwu/anBn'
    },
    {
      id: 2,
      director: 'Christopher Nolan',
      release_date: new Date('2010-07-16'),
      title: 'Inception',
      publisher: 'Warner Bros. Pictures',
      duration: 148,
      imgUrl: 'https://imgs.search.brave.com/ewibJwgPR-UwtznSPey5xuPBdlBdQxnzqS2L8aOMFbc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL2luY2Vw/dGlvbl9rZXlhcnQu/anBn'
    },
    {
      id: 3,
      director: 'Peter Jackson',
      release_date: new Date('2003-12-17'),
      title: 'The Lord of the Rings: The Return of the King',
      publisher: 'New Line Cinema',
      duration: 201,
      imgUrl: 'https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg'
    },
    {
      id: 4,
      director: 'George Lucas',
      release_date: new Date('1977-05-25'),
      title: 'Star Wars: Episode IV - A New Hope',
      publisher: '20th Century Fox',
      duration: 121,
      imgUrl: 'https://imgs.search.brave.com/Vvx1ExGZdJky-hWuH_g2_FJ4dprX_xCfcXm4T814nKU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFadndmcW40NEwu/anBn'
    },
    {
      id: 5,
      director: 'James Cameron',
      release_date: new Date('1997-12-19'),
      title: 'Titanic',
      publisher: 'Paramount Pictures',
      duration: 195,
      imgUrl: 'https://imgs.search.brave.com/-_esl4TRAQ-cb77Ag4lf4r2daf-vUHgtcm0_Bhn5S2A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1EZG1aR1Uz/TkRRdFkyRTVNeTAw/WlRsaUxXSXpPVFV0/TVRZNFpHSTFZamRp/TmprM1hrRXlYa0Zx/Y0dkZVFYVnlOVEE0/TnpZMU16WUAuanBn'
    }
  ];

  getAll():Film[]
  {
    return this.films;
  }

  deleteById(id:number):void
  {
    this.films.splice(this.films.findIndex(f=>f.id==id),1);
  }
  getFiltered(criteria:string):Film[]
  {
    return this.getAll().filter(f=>(f.title.toLowerCase()+" "+f.director.toLowerCase()).includes(criteria.toLowerCase()));
  }

  save(film:Film):Film[] //riceve un libro, lo salva, restituisce la lista di tutti i libri
  {
    this.maxId++;
    film.id=this.maxId;
    this.films.push(film);
    return this.films;
  }
}
