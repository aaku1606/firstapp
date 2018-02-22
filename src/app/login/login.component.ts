import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
  <h2>username:<input #user type = 'text'></h2>
  <h2>password:<input #pass type = 'password'></h2>
  <button (click)='onclick(user.value,pass.value)'>Login</button>
  {{wrongCredentials}}
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  public wrongCredentials = '';
  constructor(private route: Router) { }

  ngOnInit() {
  }
  onclick(a, b) {
    if (a === b && a.length === 0) {
      this.wrongCredentials = 'please enter username and password';
    } else if (a === b) {
      this.route.navigate(['/page2']);
    } else {
      this.wrongCredentials = 'invalid userename and password';
    }
  }
}

