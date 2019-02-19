import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {HideInfo} from './login/hide-Info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: HideInfo.getApiKey(),
      authDomain: HideInfo.getAuthDomain()
    });

  }
}
