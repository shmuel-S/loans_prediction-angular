import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {LoanService} from '../loans/loan.service';
import {Loan} from '../loans/loan.model';
import {UserService} from '../users/user.service';
import {User} from '../users/user.model';


@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private loanService: LoanService,
              private userService: UserService) {}

  saveLoans() {
    return this.httpClient.put('https://ng-loans-prediction.firebaseio.com/loans.json', this.loanService.getLoans());
  }

  getLoans() {
     this.httpClient.get<Loan[]>('https://ng-loans-prediction.firebaseio.com/loans.json')
      .subscribe(
        (loans) => {
          this.loanService.setLoans(loans);
        }
      );
  }
  saveUsers() {
    return this.httpClient.put('https://ng-loans-prediction.firebaseio.com/users.json', this.userService.getUsers());
  }

  getUsers() {
    this.httpClient.get<User[]>('https://ng-loans-prediction.firebaseio.com/users.json')
      .subscribe(
        (users) => {
            this.userService.setUsers(users);
        }
      );
  }
}
