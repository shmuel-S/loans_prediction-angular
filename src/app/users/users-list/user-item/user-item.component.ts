import {Component, Injectable, Input, OnInit} from '@angular/core';
import {User} from '../../user.model';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
@Injectable()
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Input() index: number;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onDelete() {
    this.userService.deleteUser(this.index);
  }

}
