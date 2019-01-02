import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  @Input() navigateItem: string;

  constructor() { }

  ngOnInit() {
  }

}
