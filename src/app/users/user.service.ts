import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from './user.model';
import * as firebase from 'firebase/app';
import 'firebase/auth';


@Injectable()
export class UserService {

  usersChanged = new Subject<User[]>();
  private users: User[] = [{
    Full_Name: 'shmuel shmila',
    Email: 'admin@example.com',
    Password: '123456',
    Permission: 'Admin'
  }];

  addUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.Email , user.Password)
      .catch(
        error => console.log(error)
      );
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }

  getUsers() {
    return this.users.slice();
  }

  getUser(index: number) {
    return this.users[index];
  }

  deleteUser(index: number) {
    this.users.splice(index);
  }

  setUsers(users: User[]) {
    this.users = users;
    this.usersChanged.next(this.users.slice());
  }

  findUser(searchUser: User) {
    if ( searchUser !== undefined && this.getUsers() !== undefined) {
      for (const user of this.getUsers()) {
        if (searchUser.Email === user.Email && searchUser.Password === user.Password) {
          return user;
        }
      }
    }
    return undefined;
  }

}
