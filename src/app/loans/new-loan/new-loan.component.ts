import { Component, OnInit } from '@angular/core';
import {LoanService} from '../loan.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Loan} from '../loan.model';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.css']
})
export class NewLoanComponent implements OnInit {

  loanForm: FormGroup;

  constructor(private loanService: LoanService) { }

  ngOnInit() {
    this.initForm();
  }


  onSubmit() {
    console.log(this.loanForm);
    // this.loanService.addLoan(this.loanForm.value);
  }

  private initForm() {
    this.loanForm = new FormGroup({
      'Full_Name': new FormControl('', Validators.required),
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
