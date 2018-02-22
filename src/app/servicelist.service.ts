import { Injectable } from '@angular/core';

@Injectable()
export class ServicelistService {

  student = [
    { 'Id': 1, 'Name': 'aakansha', 'City': 'abc', 'Age': 21 },
    { 'Id': 2, 'Name': 'priyanka', 'City': 'ijh', 'Age': 20 },
    { 'Id': 3, 'Name': 'yachika', 'City': 'xyz', 'Age': 22 },
    { 'Id': 4, 'Name': 'himanshi', 'City': 'def', 'Age': 23 },
    { 'Id': 7, 'Name': 'akku', 'City': 'chd', 'Age': 28 }
  ];

  constructor() { }


  getdata() {
    return this.student;
  }


}
