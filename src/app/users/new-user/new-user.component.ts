import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {

    if (this.userForm.value.Password === this.userForm.value.Confirm_Password) {
      this.userService.addUser(this.userForm.value);
      this.router.navigate(['/']);
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
