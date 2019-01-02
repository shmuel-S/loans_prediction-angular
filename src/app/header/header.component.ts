import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  preLogin = ['Log In'];
  workerLogin = [{
    tag: 'New Loan',
    route: '/new-loan'
  }];
  managerLogin = ['Manager'];
  adminLogin = ['Admin'];

  navList = this.workerLogin;

  constructor() { }

  ngOnInit() {
  }

}
