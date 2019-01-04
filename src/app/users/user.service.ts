import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from './user.model';


@Injectable()
export class UserService {

  usersChanged = new Subject<User[]>();
  private users: User[] = [{
    Full_Name: 'Shmuel Shmila',
    Email: 'shmuelshmila0@gmail.com',
    Password: '123456',
    Confirm_Password: '123456',
    Permission: 'Admin'
  }];

  addUser(user: User) {
     this.users.push(user);
     this.usersChanged.next(this.users.slice());
  }

  getUsers() {
    return this.users.slice();
  }



}
