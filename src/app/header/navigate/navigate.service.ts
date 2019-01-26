import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class NavigateService {

  private navList = new Array<{ tag: string, route: string }>();
  private isLoggedIn = new Subject<boolean>();

  constructor() {
    this.addItem({ text: 'Log In', path: '/log-in'});
    this.isLoggedIn.next(false);
  }

  addItem({ text, path }) {
    this.navList.push({ tag: text, route: path });
  }

  getNavList() {
    return this.navList;
  }

  getLoginStatus() {
    return this.isLoggedIn;
  }

  updateLoginStatus(status: boolean) {
    this.isLoggedIn.next(status);

    if (!status) {
      this.clearAllItems();
      this.addItem({ text: 'Log In', path: '/log-in' });
    }
  }

  updateNavAfterAuth(role: string): void {
    this.removeItem({ text: 'Log In' });

    if (role === 'Worker') {
      this.addItem({text: 'New Loan', path: '/new-loan'});
    } else if (role === 'Manager') {
      this.addItem({text: 'New Loan', path: '/new-loan'});
      this.addItem({text: 'Loans List', path: '/loans-list'});
    } else if (role === 'Admin') {
      this.addItem({text: 'New User', path: '/new-user'});
      this.addItem({text: 'Users List', path: '/users-list'});
    }
  }

  removeItem({ text }) {
    this.navList.forEach((link, index) => {
      if (link.tag === text) {
        this.navList.splice(index, 1);
      }
    });
  }

  clearAllItems() {
    this.navList.length = 0;
  }


}
