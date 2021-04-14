import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {IBook} from './i-book';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(API_URL);
  }

  create(book: IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(API_URL + '/create', book);
  }

  view(id: number): Observable<IBook> {
    return this.httpClient.get<IBook>(API_URL + '/view/' + id);
  }

  edit(id: number, book: IBook): Observable<IBook> {
    return this.httpClient.put<IBook>(API_URL + '/edit/' + id, book);
  }

  delete(id: number): Observable<IBook> {
    return this.httpClient.delete<IBook>(API_URL + '/delete/' + id);
  }

}
