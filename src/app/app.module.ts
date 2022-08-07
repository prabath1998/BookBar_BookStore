import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

import { BookComponent } from './books/book/book.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, BookComponent, BooksComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule,AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
