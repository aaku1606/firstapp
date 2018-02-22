import { Component, OnInit } from '@angular/core';
import { ServicelistService } from '../servicelist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  template: `
  <app-button></app-button>
  <h2>Student List</h2>
  <table *ngFor="let x of studentdata" style="width:10%">
  <td> {{x.Id}} </td>
  <td> {{x.Name}} </td>
  <td> {{x.Age}} </td>
  <td> {{x.City}} </td>
  <button (click) = "edit(x.Id)">edit </button>
  </table>
  <div *ngIf ="showEditDetail">
  <h2>Id:<input type="number" [(ngModel)]="studentedit.Id" min=1></h2>
  <h2>Name:<input [(ngModel)]="studentedit.Name" type="text"></h2>
  <h2>Age:<input [(ngModel)]="studentedit.Age" type="number"></h2>
  <h2>City:<input [(ngModel)]="studentedit.City" type="text"></h2>
  <button (click)="save()">Update Detail</button>
  </div>

`,
  styles: []
})
export class UpdateComponent implements OnInit {

  public studentdata = [];
  public studentedit;
  showEditDetail = false;

  constructor(private _servicelist: ServicelistService) { }

  ngOnInit() {
    this.studentdata = this._servicelist.getdata();
  }

  edit(Id) {
    this.showEditDetail = true;
    const searchedfStudent = this.studentdata.find(student => {
      return student.Id === Id;
    })
    this.studentedit = JSON.parse(JSON.stringify(searchedfStudent));
  }

  save() {
    this.studentdata.forEach(element => {
      if (this.studentedit.Id == element.Id) {
        element.Name = this.studentedit.Name;
        element.Age = this.studentedit.Age;
        element.City = this.studentedit.City;
      }
    })
    this.showEditDetail = false;
  }
}