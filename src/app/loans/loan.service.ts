import {Injectable} from '@angular/core';
import {Loan} from './loan.model';
import {Subject} from 'rxjs';

@Injectable()
export class LoanService  {

  loansChanged = new Subject<Loan[]>();
  private loans: Loan[] = [];

  addLoan(loan: Loan) {
    this.loans.push(loan);
    this.loansChanged.next(this.loans.slice());
    console.log(loan);
  }

  getLoans() {
    return this.loans.slice();
  }

  setLoans(loans: Loan[]) {
      this.loans = loans;
      this.loansChanged.next(this.loans.slice());
  }



}
