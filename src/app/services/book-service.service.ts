import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../domain/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  // =================================
  // ========== Attributes ===========
  // =================================

  URL = 'http://localhost:3081/book/';


  // =================================
  // ========= Constructors ==========
  // =================================

  constructor(private client: HttpClient) { }


  // =================================
  // ======= Getters & Setters =======
  // =================================


  // =================================
  // =========== Methods =============
  // =================================

  public getAllBooks(): Observable<Book[]> {
    return this.client.get<Book[]>(this.URL + "getallbooks");
  }

  public findBookByIsbn(isbn: string) : Observable<Book> {
    return this.client.get<Book>(this.URL + "findbookbyisbn" + "?isbn=" + isbn);
  }

}
