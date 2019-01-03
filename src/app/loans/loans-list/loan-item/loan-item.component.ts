import {Component, Input, OnInit} from '@angular/core';
import {Loan} from '../../loan.model';

@Component({
  selector: 'app-loan-item',
  templateUrl: './loan-item.component.html',
  styleUrls: ['./loan-item.component.css']
})
export class LoanItemComponent implements OnInit {
  @Input() loan: Loan;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
