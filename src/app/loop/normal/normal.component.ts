import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
//class for sidebar toggle.
export class NormalComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit() {
  }
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
