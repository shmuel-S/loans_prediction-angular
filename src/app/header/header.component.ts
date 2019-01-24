import {Component, OnInit} from '@angular/core';
import {NavigateService} from './navigate/navigate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  navList =  Array<{ tag: string, route: string}>();
  isLoggedIn = false;

  constructor(private router: Router, private navigateService: NavigateService) { }

  ngOnInit() {
    this.navList = this.navigateService.getNavList();
    this.navigateService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }

  logout() {
    this.navigateService.updateLoginStatus(false);
    this.router.navigate(['/']);
  }

}

// preLogin = [{tag: 'Log In', route: '/log-in'}];
// workerLogin = [{tag: 'New Loan', route: '/new-loan'}];
// managerLogin = [{tag: 'New Loan', route: '/new-loan'}, {tag: 'Loans Tracking', route: '/loans-trace'}];
// adminLogin = [{tag: 'New User', route: '/new-user'}, {tag: 'Users List', route: '/users-list'}];
