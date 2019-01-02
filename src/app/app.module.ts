import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigateComponent } from './header/navigate/navigate.component';
import { LoansComponent } from './loans/loans.component';
import { NewLoanComponent } from './loans/new-loan/new-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigateComponent,
    LoansComponent,
    NewLoanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
