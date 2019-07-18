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

  URL = 'http://localhost:3081/book/allbooks';


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
    return this.client.get<Book[]>(this.URL);
  }

}
