import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn;

  constructor(private loginService: LoginService) {

    this.isLoggedIn = loginService.isLoggedInCheck();


  }

  ngOnInit() {
  }

  homeMessage() {
    if (!this.loginService.isLoggedInCheck()) {
      return 'Welcome guest you are not log in';
    } else {
      return 'Welcome ' + this.loginService.getLogedInName() + ', Your permission: ' + this.loginService.getPermission();
    }
  }

}
