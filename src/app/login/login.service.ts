import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import {UserService} from '../users/user.service';
import {User} from '../users/user.model';
import {Router} from '@angular/router';
import {NavigateService} from '../header/navigate/navigate.service';

@Injectable()
export class LoginService {

  private LogedInUser: User;
  public isLoggedIn = false;

  constructor(private userService: UserService,
              private router: Router,
              private navigateService: NavigateService) {
  }


  logIn(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.Email, user.Password)
      .then(
        response => {
          this.router.navigate(['/']);
        }
      )
      .catch(
        error => {
          console.log(error);
        });

    this.isLoggedIn = true;
    this.LogedInUser = this.findUser(user);

  }

  getPermission() {
    if ( this.LogedInUser !== undefined) {
      return this.LogedInUser.Permission;
    } else {
      return 'guest';
    }
  }

  getLogedInName() {
    if (this.LogedInUser !== undefined) {
      return this.LogedInUser.Full_Name;
    }
  }

  findUser(loginUser: User) {
    if ( loginUser !== undefined && this.userService.getUsers() !== undefined) {
      for (const user of this.userService.getUsers()) {
        if (user.Email === loginUser.Email && user.Password === loginUser.Password) {
          return user;
        }
      }
    }
    return undefined;
  }
  isLoggedInCheck() {
    return this.LogedInUser !== undefined;
  }

  logOut() {
    this.navigateService.updateLoginStatus(false);
    this.isLoggedIn = false;
    this.router.navigate(['/']);
    location.reload();
  }

}
