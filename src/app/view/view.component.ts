import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {IBook} from '../i-book';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

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

}
