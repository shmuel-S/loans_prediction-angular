import {Injectable} from '@angular/core';

import {UserService} from '../users/user.service';
import {User} from '../users/user.model';
import {Router} from '@angular/router';
import {NavigateService} from '../header/navigate/navigate.service';

@Injectable()
export class LoginService {

  private LogedInUser: User;
  private isLoggedIn = false;

  constructor(private userService: UserService,
              private router: Router,
              private navigateService: NavigateService) {
  }


  logIn(user: User) {
    this.LogedInUser = user;
    this.isLoggedIn = true;
  }

  getPermission() {
      return this.LogedInUser.Permission;
  }

  // getLogedinUser() {
  //   return this.LogedInUser;
  // }

  getLogedInName() {
    return this.LogedInUser.Full_Name;
  }

  check(loginUser: User) {
    for ( const user of this.userService.getUsers()) {
      if (user.Email === loginUser.Email && user.Password === loginUser.Password) {
        return user;
      }
    }
    return undefined;
  }
  isLoggedInCheck() {
    return this.isLoggedIn;
  }

  logOut() {
    this.navigateService.updateLoginStatus(false);
    this.isLoggedIn = false;
    this.router.navigate(['/']);
    location.reload();
  }
}
