import {Component, OnInit} from '@angular/core';
import {IBook} from '../i-book';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  book: IBook = {
    id: 0,
    name: '',
    author: '',
    description: ''
  };
  id: any;
  sub: Subscription | any;

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getBookById(this.id);
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getBookById(id: number) {
    this.bookService.view(id).subscribe(book => {
      this.book = book;
    });
  }

  // tslint:disable-next-line:typedef
  editBook() {
    this.bookService.edit(this.book.id, this.book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
