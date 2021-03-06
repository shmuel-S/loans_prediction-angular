import {Component, Injectable, OnInit} from '@angular/core';

import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import {User} from '../user.model';
import {MsgService} from '../../shared/msg/msg.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
@Injectable()
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  newUser: User;

  constructor(private userService: UserService,
              private router: Router,
              private dataStorageService: DataStorageService,
              private msgService: MsgService) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    if (this.userService.findUser(this.userForm.value) !== undefined) {
      this.msgService.setIsError(true);
      this.msgService.setMsg('User already exists');
      this.router.navigate(['message']);
      return;
    }
    if (this.userForm.value.Password === this.userForm.value.Confirm_Password) {
        this.newUser = new User(this.userForm.value.Full_Name, this.userForm.value.Email, this.userForm.value.Password,
        this.userForm.value.Permission);
      this.userService.addUser(this.newUser);
      this.dataStorageService.saveUsers()
          .subscribe(
           (response: Response) => {
                   // console.log(response);
           });
      this.msgService.setIsError(false);
      this.msgService.setMsg('New User Created');
      this.router.navigate(['message']);
    } else {
      this.msgService.setIsError(true);
      this.msgService.setMsg('Password not confirm');
      this.router.navigate(['message']);
      }
  }

  private initForm() {
    this.userForm = new FormGroup({
      'Full_Name': new FormControl('', Validators.required),
      'Email': new FormControl('', Validators.required),
      'Password': new FormControl('', Validators.required),
      'Confirm_Password': new FormControl('', Validators.required),
      'Permission': new FormControl('', Validators.required)
    });
  }

}
