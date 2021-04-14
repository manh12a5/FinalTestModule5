import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Router} from '@angular/router';
import {IBook} from '../i-book';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  book: IBook = {
    id: 0,
    name: '',
    author: '',
    description: ''
  };

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  createBook() {
    this.bookService.create(this.book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
