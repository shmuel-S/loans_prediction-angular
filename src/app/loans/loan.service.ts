import {Injectable} from '@angular/core';
import {Loan} from './loan.model';

@Injectable()
export class LoanService {

  private loans: Loan[];

  addLoan(loan: Loan) {
    this.loans.push(loan);
  }

}
