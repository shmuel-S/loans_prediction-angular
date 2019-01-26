import {Injectable} from '@angular/core';

import {UserService} from '../users/user.service';
import {User} from '../users/user.model';

@Injectable()
export class LoginService {

  private LogedInUser: User;

  constructor(private userService: UserService) {
  }


  logIn(user: User) {
    this.LogedInUser = user;
  }

  getPermission() {
      return this.LogedInUser.Permission;
  }

  // getLogedinUser() {
  //   return this.LogedInUser;
  // }

  getLogedInName() {
    if (this.LogedInUser === undefined) {
      return 'guest';
    }
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
}
