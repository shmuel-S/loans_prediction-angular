import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from './user.model';
import * as firebase from 'firebase/app';
import 'firebase/auth';


@Injectable()
export class UserService {

  usersChanged = new Subject<User[]>();
  private users: User[] = [];

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

}
