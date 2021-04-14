import {Component, OnInit} from '@angular/core';
import {IBook} from '../i-book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  books: IBook[] = [];

  constructor(private bookService: BookService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(): IBook[] {
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    });
    return this.books;
  }

  delete(id: number): void {
    if (confirm('Bạn có thực sự muốn xóa?')) {
      this.bookService.delete(id).subscribe(
        next => {
          this.books = this.getAll();
        },
        error => {
          alert('error');
        }
      );
    }
  }

}
