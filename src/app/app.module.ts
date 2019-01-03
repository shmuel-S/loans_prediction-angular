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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigateComponent,
    LoansComponent,
    NewLoanComponent,
    LoansListComponent,
    LoanItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
