import { Component, OnInit } from '@angular/core';
import {Book} from '../../domain/book';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // =================================
  // ========== Attributes ===========
  // =================================

  data: Book[] ;
  totalAmount: number;



  // =================================
  // ========= Constructors ==========
  // =================================

  constructor(private service: CartService) { }


  // =================================
  // ======= Getters & Setters =======
  // =================================


  // =================================
  // =========== Methods =============
  // =================================


  ngOnInit() {
    this.data = this.service.getCartBooks();
    this.totalAmount = this.service.getCartTotalAmount();

  }

  order(){
    console.log("Your order has been processed.");
    console.log(JSON.stringify(this.data));
  }
}
