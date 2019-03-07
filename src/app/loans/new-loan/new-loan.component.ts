import {Component, Injectable, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {LoanService} from '../loan.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../../shared/data-storage.service';
import {UUID} from 'angular2-uuid';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.css']
})
@Injectable()
export class NewLoanComponent implements OnInit {

  loanForm: FormGroup;

  constructor(private loanService: LoanService,
              private router: Router,
              private dataStorageService: DataStorageService,
              private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.initForm();
  }


  onSubmit() {
    this.loanForm.value.Id = UUID.UUID();

    this.httpClient.post('https://cors-anywhere.herokuapp.com/loans-prediction.herokuapp.com/model/predict', this.loanForm.value,
      {
        responseType: 'json'
      }
    )
      .subscribe(
        (json) => console.log(json)
      );


    this.loanService.addLoan(this.loanForm.value);
    this.dataStorageService.saveLoans()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    this.router.navigate(['/']);


  }

  private initForm() {
    this.loanForm = new FormGroup({
      'Full_Name': new FormControl('', Validators.required),
      'Approved': new FormControl('', Validators.required),
      'Loan_Status': new FormControl('', Validators.required),
      'Current_Loan_Amount': new FormControl('', Validators.required),
      'Term': new FormControl('', Validators.required),
      'Credit_Score': new FormControl('', Validators.required),
      'Years_in_current_job': new FormControl('', Validators.required),
      'Annual_Income': new FormControl('', Validators.required),
      'Home_Ownership': new FormControl('', Validators.required),
      'Monthly_Debt': new FormControl('', Validators.required),
      'Purpose': new FormControl('', Validators.required),
      'Years_of_Credit_History': new FormControl('', Validators.required),
      'Months_since_last_delinquent': new FormControl('', Validators.required),
      'Current_Credit_Balance': new FormControl('', Validators.required),
      'Number_of_Open_Accounts': new FormControl('', Validators.required),
      'Maximum_Open_Credit': new FormControl('', Validators.required),
      'Number_of_Credit_Problems': new FormControl('', Validators.required),
      'Bankruptcies': new FormControl('', Validators.required),
    });

  }

}
