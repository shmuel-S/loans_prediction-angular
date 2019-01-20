import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../user.model';
import {LoginService} from '../../../login/login.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Input() index: number;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onGetPass() {
    if (this.loginService.getPermission() === 'Admin') {
      console.log(this.user.Password);
    }
  }

}
