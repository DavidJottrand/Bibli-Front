import { Component, OnInit } from '@angular/core';
import {Book} from '../../domain/book';
import {BookServiceService} from '../../services/book-service.service';
import {log} from "util";
import {ActivatedRoute, Router} from '@angular/router';
import {__param} from 'tslib';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  // =================================
  // ========== Attributes ===========
  // =================================

  book: Book;
  isbn: string;
  height = 300;


  // =================================
  // ========= Constructors ==========
  // =================================

  constructor(private service: BookServiceService, private router: Router, private route: ActivatedRoute, private cartService : CartService) { }


  // =================================
  // ======= Getters & Setters =======
  // =================================


  // =================================
  // =========== Methods =============
  // =================================


  ngOnInit() {

    this.route.params.subscribe(
      params => {
        let isbn = params['isbn'];

        this.service.findBookByIsbn(isbn).subscribe(
          resp => this.book = resp,
          error => log('Error : ' + error )
        );
      }
    )

  }

  onBack(): void {
    this.router.navigate(['/list']);
  }

  addToCart() {
    this.cartService.addToCart(this.book);
    this.router.navigate(['/list']);   // Programmatic navigation
  }

}
