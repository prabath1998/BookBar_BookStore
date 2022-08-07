import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books:Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert C Martin',
      image: 'https://cdn.lifehack.org/wp-content/uploads/2015/03/h2g2-01-copy.png',
      amount:600
    },
    {
      name: 'Testing Computer Software',
      author: 'Robert C Martin',
      image: 'https://simpleprogrammer.com/wp-content/uploads/2015/03/testing-computer-software.jpg',
      amount:960
    },
    {
      name: 'Java script for beginners',
      author: 'Robert C Martin',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51fRKyqPWDL.jpg',
      amount:1050
    },
    {
      name: 'effective java',
      author: 'Robert C Martin',
      image: 'https://sdacademy.dev/sda-assets/uploads/sites/6/2021/05/41zLisPNN2L._SX376_BO1204203200_-1.jpg',
      amount:1050
    },

  ];

  isShowing: boolean = true;

  cart:Book[] = [];

  constructor() {}

  ngOnInit(): void {}

  toggleBooks() {
    this.isShowing = !this.isShowing;
  }
}
