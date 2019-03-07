import { Component, OnInit } from '@angular/core';
import {MsgService} from './msg.service';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {

  constructor(private msgService: MsgService) { }

  isError;
  content;

  ngOnInit() {
    this.isError = this.msgService.getTypeMsg();
    this.content = this.msgService.getMsg();
  }

}
