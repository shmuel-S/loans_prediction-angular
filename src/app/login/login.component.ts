import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../users/user.model';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {NavigateService} from '../header/navigate/navigate.service';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  LoginUser: User;

  isLoggedIn = false;
  role = '';

  constructor(private loginService: LoginService,
              private router: Router,
              private navigateService: NavigateService,
              private dataStorageService: DataStorageService) {
    this.navigateService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }

  ngOnInit() {
    this.dataStorageService.getUsers();
    this.initForm();
  }

  onSubmit() {
    this.loginService.logIn(this.loginForm.value);
    this.login(this.loginForm.value.Permission);
      this.login(this.loginService.getPermission());
      this.router.navigate(['/']);
    // } else {
    //   console.log('email or password are incorrect');
    // }
  }


  private initForm() {
    this.loginForm = new FormGroup({
      'Email': new FormControl('', Validators.required),
      'Password': new FormControl('', Validators.required)
    });
  }

  login(role: string) {
    this.navigateService.updateNavAfterAuth(role);
    this.navigateService.updateLoginStatus(true);
    this.role = role;
  }

}
