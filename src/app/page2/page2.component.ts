import { Component, OnInit } from '@angular/core';
import { ServicelistService } from '../servicelist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  template: `
<app-button></app-button>
 <h2>Student List </h2>
 <table *ngFor="let x of studentdata" style="width:10%">
  <td> {{x.Id}} </td>
  <td> {{x.Name}} </td>
  <td> {{x.Age}} </td>
  <td> {{x.City}} </td>

  </table>
  `,
  styles: []
})
export class Page2Component implements OnInit {
  public studentdata = [];

  constructor(private _servicelist: ServicelistService, private router: Router) { }

  ngOnInit() {
    this.studentdata = this._servicelist.getdata();
  }
  form() {
    this.router.navigate(['/addstudent']);
  }
  logout() {
    this.router.navigate(['/login']);
  }

}
