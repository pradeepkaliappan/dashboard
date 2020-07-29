import { Component, OnInit } from '@angular/core';
import { CreateService } from '../create.service';
import { Router } from '@angular/router';
import { AuthorBooks } from './authorBooks';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  authorBooks: AuthorBooks = new AuthorBooks();
  submitted = false;
  registerForm: FormGroup;

  constructor(private createService: CreateService,
    private router: Router) { }

  ngOnInit() {
}


  newEmployee(): void {
    this.submitted = false;
    this.authorBooks = new AuthorBooks();
  }

  save() {
    this.createService.createAuthorBooks(this.authorBooks)
      .subscribe(data => {
        console.log(data),
      this.gotoList();
      },
       error => console.log(error));
    
  }

  onSubmit() {
    this.submitted = true;
    this.save(); 
       
  }

  

  gotoList() {
    this.router.navigate(['/showAuthorList']);
  }
}
