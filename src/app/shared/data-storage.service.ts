import {Injectable} from '@angular/core';
import {HttpClient} from 'selenium-webdriver/http';
import {Http, Response} from '@angular/http';
import {LoanService} from '../loans/loan.service';
import {Loan} from '../loans/loan.model';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private loanService: LoanService) {}

  saveLoans() {
    return this.http.put('https://ng-loans-prediction.firebaseio.com/loans.json', this.loanService.getLoans());
  }

  getLoans() {
     this.http.get('https://ng-loans-prediction.firebaseio.com/loans.json')
      .subscribe(
        (response: Response) => {
          const loans: Loan[] = response.json();
          this.loanService.setLoans(loans);
        }
      );
  }

  delete() {}

}
