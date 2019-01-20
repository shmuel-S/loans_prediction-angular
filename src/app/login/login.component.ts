import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../users/user.model';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  LoginUser: User;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.LoginUser = this.loginService.check(this.loginForm.value);
    if (this.LoginUser !== undefined) {
      this.loginService.logIn(this.LoginUser);
      this.router.navigate(['/']);
      console.log(this.LoginUser);
    } else {
      console.log('email or password are incorrect');
    }
  }

  private initForm() {
    this.loginForm = new FormGroup({
      'Email': new FormControl('', Validators.required),
      'Password': new FormControl('', Validators.required)
    });
  }

}
