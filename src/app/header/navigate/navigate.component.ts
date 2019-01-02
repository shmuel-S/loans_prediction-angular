import {Component, Input, OnInit} from '@angular/core';
import {Navigate} from './navigate.model';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  @Input() navigateItem: Navigate;

  constructor() { }

  ngOnInit() {
  }

}
