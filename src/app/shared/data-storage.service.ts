import {Injectable} from '@angular/core';
import {HttpClient} from 'selenium-webdriver/http';
import {Http, Response} from '@angular/http';
import {LoanService} from '../loans/loan.service';
import {Loan} from '../loans/loan.model';
import {UserService} from '../users/user.service';
import {User} from '../users/user.model';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private loanService: LoanService,
              private userService: UserService) {}

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
  saveUsers() {
    return this.http.put('https://ng-loans-prediction.firebaseio.com/users.json', this.userService.getUsers());
  }

  getUsers() {
    this.http.get('https://ng-loans-prediction.firebaseio.com/users.json')
      .subscribe(
        (response: Response) => {
          const users: User[] = response.json();
          this.userService.setUsers(users);
        }
      )
  }

  delete() {}

}
