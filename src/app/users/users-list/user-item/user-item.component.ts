import {Component, Injectable, Input, OnInit} from '@angular/core';
import {User} from '../../user.model';
import {UserService} from '../../user.service';
import {DataStorageService} from '../../../shared/data-storage.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
@Injectable()
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Input() index: number;

  constructor(private userService: UserService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onDelete() {
    this.userService.deleteUser(this.index);
    console.log(this.userService.getUsers());
    this.dataStorageService.saveUsers();
    console.log(this.user);
    console.log('- deleted -');
  }

}
