import { Component, OnInit } from '@angular/core';
import { CreateService } from '../../new/create.service';
import { Router } from '@angular/router';
import {AuthorBooks} from '../../new/create/authorBooks';
import { Observable } from "rxjs";
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  authorBook:AuthorBooks[];
  presentId:number;
  arr:number;

  //temp:Observable<int>;

  constructor(
    private createService: CreateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getId();
    this.getDetaildata();
  }

  getId(){
    this.presentId = this.createService.getId();
  }

  getDetaildata(){
    this.arr = this.presentId;
    this.createService.getDetailData(this.arr)
    .subscribe(data => {
      console.log(data),
      this.authorBook = data;
    },
     error => console.log(error));
  }

  previousData(){
    this.arr = -1;
    this.createService.getDetailData(this.arr)
    .subscribe(data => {
      console.log(data),
      this.authorBook = data;
    },
     error => console.log(error));
  }

  nextData(){
    this.arr = -2;
    this.createService.getDetailData(this.arr)
    .subscribe(data => {
      console.log(data),
      this.authorBook = data;
    },
     error => console.log(error));
  }

}
