import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoanService} from '../loan.service';
import {Loan} from '../loan.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.css']
})
export class LoansListComponent implements OnInit, OnDestroy {

  Loans: Loan[];
  subscription: Subscription;

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.subscription = this.loanService.loansChanged
      .subscribe(
        (loans: Loan[]) => {
          this.Loans = loans;
        }
      );
    this.Loans = this.loanService.getLoans();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
