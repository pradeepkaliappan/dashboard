import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AuthorBooks } from '../../new/create/authorBooks';
import { CreateService } from '../../new/create.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  authorBooks: Observable<AuthorBooks[]>;
  authorValue: Observable<string[]>;
  bookValue: Observable<string[]>;
  //authorBookVar:AuthorBooks;
  authorBookVar: AuthorBooks = new AuthorBooks();
  selectedAuthor: string;
  selectedBook: string;
  selectedValue: string;
  selectedPrice: string;
  selectedCDate: string;
  selectedPDate: string;
  flag: number;
  id: number;
  constructor(
    private createService: CreateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.flag = 0;
    this.reloadData(this.flag);
    this.fetchAuthorData();
    this.fetchBookData();

  }

  reloadData(st: number) {
    this.authorBooks = this.createService.getAuthorBooksList(st);
  }

  deleteEmployee(id: number) {
    this.createService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData(0);
          this.fetchAuthorData();
          this.fetchBookData();
        },
        error => console.log(error));
  }

  fetchAuthorData() {
    this.authorValue = this.createService.getAuthorValuesList();
  }

  fetchBookData() {
    this.bookValue = this.createService.getBookValuesList();
  }

  onSearch() {
    this.authorBookVar.authorname = '';
    this.authorBookVar.bookname = '';
    this.authorBookVar.valuee = '';
    this.authorBookVar.price = '';
    this.authorBookVar.createddate = '';
    this.authorBookVar.publishdate = '';
    this.authorBookVar.authorname = this.selectedAuthor;
    this.authorBookVar.bookname = this.selectedBook;
    // var num:number =+(this.selectedValue);
    this.authorBookVar.valuee = (this.selectedValue);
    this.authorBookVar.price = this.selectedPrice;
    this.authorBookVar.createddate = this.selectedCDate;
    this.authorBookVar.publishdate = this.selectedPDate;
    this.flag = 1;
    this.createService.filterAuthorBooks(this.authorBookVar)
      .subscribe(data => {
        console.log(data),
          this.reloadData(this.flag);
      },
        error => console.log(error));
  }

  viewDetails(idd: number) {
    this.createService.setId(idd);
    this.gotoDetail();
  }
  gotoDetail() {
    this.router.navigate(['/showDetails']);
  }
}
