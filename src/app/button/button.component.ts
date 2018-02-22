import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  template: `
   <button (click)= "list()"> Student List </button>
   <button (click)="form()">  AddStudent </button>
   <button (click)= "edit()"> Student update</button>
   <button (click)= "logout()"> Logout</button>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  form() {
    this.router.navigate(['/addstudent']);
  }
  list() {
    this.router.navigate(['/page2']);
  }
  edit() {
    this.router.navigate(['/update']);
  }
  logout() {
    this.router.navigate(['/login']);
  }

}
