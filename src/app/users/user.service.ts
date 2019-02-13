import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from './user.model';


@Injectable()
export class UserService {

  usersChanged = new Subject<User[]>();
  private users: User[] = [
    {
      Full_Name: 'Shmuel Shmila',
      Email: 'shmuelshmila0@gmail.com',
      Password: '123456',
      Permission: 'Admin'
    },
    {
      Full_Name: 'david davido',
      Email: 'shmuelshmila1@gmail.com',
      Password: '1234567',
      Permission: 'Worker'
    },
    {
      Full_Name: 'moshe misha',
      Email: 'shmuelshmila2@gmail.com',
      Password: '12345678',
      Permission: 'Manager'
    }];

  addUser(user: User) {
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

}
