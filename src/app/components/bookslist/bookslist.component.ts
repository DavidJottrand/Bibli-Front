import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../../services/book-service.service';
import {Book} from '../../domain/book';
import {createBrowserLoggingCallback} from '@angular-devkit/build-angular/src/browser';
import {log} from 'util';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.scss']
})
export class BookslistComponent implements OnInit {

  // =================================
  // ========== Attributes ===========
  // =================================

  data: Book[];
  width: number = 80;


  // =================================
  // ========= Constructors ==========
  // =================================

  constructor(private service: BookServiceService) { }


  // =================================
  // ======= Getters & Setters =======
  // =================================


  // =================================
  // =========== Methods =============
  // =================================


  ngOnInit() {
    this.service.getAllBooks().subscribe(
      resp => this.data = resp,
      error => log('Error : ' + error )
    );
  }

}
