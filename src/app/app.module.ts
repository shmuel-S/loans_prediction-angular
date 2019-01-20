import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigateComponent } from './header/navigate/navigate.component';
import { LoansComponent } from './loans/loans.component';
import { NewLoanComponent } from './loans/new-loan/new-loan.component';
import {AppRoutingModule} from './app-routing.module';
import {LoanService} from './loans/loan.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoansListComponent } from './loans/loans-list/loans-list.component';
import { LoanItemComponent } from './loans/loans-list/loan-item/loan-item.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import {UserService} from './users/user.service';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserItemComponent } from './users/users-list/user-item/user-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigateComponent,
    LoansComponent,
    NewLoanComponent,
    LoansListComponent,
    LoanItemComponent,
    NewUserComponent,
    UsersListComponent,
    UserItemComponent,
    DropdownDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoanService, UserService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
