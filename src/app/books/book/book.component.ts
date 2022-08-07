import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/types/Book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  @Input() book:Book = {} as Book;
  // @Output() bookEmitter = new EventEmitter<Book>();

  constructor(private cartService:CartService) { }


  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.add(this.book);
    // this.bookEmitter.emit(this.book);

  }

}
