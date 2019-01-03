import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  preLogin = ['Log In'];
  workerLogin = [{tag: 'New Loan', route: '/new-loan'}];
  managerLogin = [{tag: 'New Loan', route: '/new-loan'}, {tag: 'Loans Tracking', route: '/loans-trace'}];
  adminLogin = ['Admin'];

  navList = this.managerLogin;

  constructor() { }

  ngOnInit() {
  }

}
