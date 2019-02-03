import {Injectable} from '@angular/core';
import {Loan} from './loan.model';
import {Subject} from 'rxjs';

@Injectable()
export class LoanService {

  loansChanged = new Subject<Loan[]>();
  private loans: Loan[] = [{
    Full_Name: 'Shmuel Shmila',
    Approved: undefined,
    Loan_Status: '',
    Current_Loan_Amount: 1000000,
    Term: 'Short Term',
    Credit_Score: 1,
    Years_in_current_job: 'aa',
    Annual_Income: 1,
    Home_Ownership: 'aa',
    Monthly_Debt: 1,
    Purpose: 'Home Improvements',
    Years_of_Credit_History: 1,
    Months_since_last_delinquent: 1,
    Current_Credit_Balance: 1,
    Number_of_Open_Accounts: 1,
    Maximum_Open_Credit: 1,
    Number_of_Credit_Problems: 1,
    Bankruptcies: 1
  },
    {
      Full_Name: 'Shmuel Shmila',
      Approved: undefined,
      Loan_Status: '',
      Current_Loan_Amount: 1000000,
      Term: 'Short Term',
      Credit_Score: 1,
      Years_in_current_job: 'aa',
      Annual_Income: 1,
      Home_Ownership: 'aa',
      Monthly_Debt: 1,
      Purpose: 'Home Improvements',
      Years_of_Credit_History: 1,
      Months_since_last_delinquent: 1,
      Current_Credit_Balance: 1,
      Number_of_Open_Accounts: 1,
      Maximum_Open_Credit: 1,
      Number_of_Credit_Problems: 1,
      Bankruptcies: 1
    }];

  addLoan(loan: Loan) {
    this.loans.push(loan);
    this.loansChanged.next(this.loans.slice());
    console.log(loan);
  }

  getLoans() {
    return this.loans.slice();
  }



}
