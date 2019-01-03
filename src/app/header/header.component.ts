import { Component, OnInit } from '@angular/core';
import {Navigate} from './navigate/navigate.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  preLogin = ['Log In'];
  workerLogin = [new Navigate('New Loan', '/new-loan')];
  managerLogin = ['Manager'];
  adminLogin = ['Admin'];

  navList = this.workerLogin;

  constructor() { }

  ngOnInit() {
  }

}
