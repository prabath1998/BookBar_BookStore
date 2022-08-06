import { Component, OnInit } from '@angular/core';


interface Book {
  name:string;
  author:string;
  image:string;
}

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
    },
    {
      name: 'Testing Computer Software',
      author: 'Robert C Martin',
      image: 'https://simpleprogrammer.com/wp-content/uploads/2015/03/testing-computer-software.jpg',
    },
  ];

  isShowing: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleBooks() {
    this.isShowing = !this.isShowing;
  }
}
