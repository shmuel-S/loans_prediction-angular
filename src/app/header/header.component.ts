import {Component, OnInit} from '@angular/core';
import {NavigateService} from './navigate/navigate.service';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  navList =  Array<{ tag: string, route: string}>();
  isLoggedIn = false;

  constructor(private router: Router,
              private navigateService: NavigateService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.navList = this.navigateService.getNavList();
    this.navigateService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }

  logout() {
    this.loginService.logOut();
  }

}
