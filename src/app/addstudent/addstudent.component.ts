import { Component, OnInit } from '@angular/core';
import { ServicelistService } from '../servicelist.service';

@Component({
  selector: 'app-addstudent',
  template: `
  <app-button></app-button>
   <h2>Id <input [(ngModel)] ='id'  type='number'></h2>
   <h2>Name <input [(ngModel)] ='name'  type='text'></h2>
   <h2>Age <input [(ngModel)] ='age'  type='number' ></h2>
   <h2>City <input [(ngModel)] ='city'  type='text'></h2>
   <button (click)= 'addNewStudent()'>Click</button>
  `,
  styles: []
})
export class AddstudentComponent implements OnInit {

  public id;
  public name = '';
  public age;
  public city = '';
  constructor(private _studentService: ServicelistService) { }

  ngOnInit() { }

  addNewStudent() {
    const student = {
      'Id': this.id,
      'Name': this.name,
      'Age': this.age,
      'City': this.city
    };
    this._studentService.student.push(student);
  }

}


