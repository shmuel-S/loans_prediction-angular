import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../user.model';
import {Subscription} from 'rxjs';
import {UserService} from '../user.service';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  Users: User[];
  subscription: Subscription;

  constructor(private userService: UserService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getUsers();
    this.subscription = this.userService.usersChanged
      .subscribe(
        (users: User[]) => {
          this.Users = users;
        }
      );
    this.Users = this.userService.getUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
