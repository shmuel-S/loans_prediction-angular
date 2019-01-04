import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../user.model';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  NewUser: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.NewUser = this.userForm.value;

    if (this.NewUser.Password === this.NewUser.Confirm_Password) {
      this.userService.addUser(this.NewUser);
      console.log(this.userForm);
    } else {
      console.log('Password not confirm');
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
