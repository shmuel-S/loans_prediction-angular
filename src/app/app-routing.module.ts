import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewLoanComponent} from './loans/new-loan/new-loan.component';
import {LoansListComponent} from './loans/loans-list/loans-list.component';
import {NewUserComponent} from './users/new-user/new-user.component';
import {UsersListComponent} from './users/users-list/users-list.component';
import {LoginComponent} from './login/login.component';
import {PermissionGuard} from './permission/premission-guard.service';

const appRoutes: Routes = [
  { path: 'new-user', component: NewUserComponent,
    data: {
      permissions: ['Admin']
    },
    canActivate: [PermissionGuard]},

  { path: 'users-list', component: UsersListComponent,
    data: {
      permissions: ['Admin']
    },
    canActivate: [PermissionGuard]},

  { path: 'new-loan', component: NewLoanComponent,
    data: {
      permissions: ['Worker', 'Manager']
    },
    canActivate: [PermissionGuard]},

  { path: 'loans-list', component: LoansListComponent,
    data: {
      permissions: ['Manager']
    },
    canActivate: [PermissionGuard]},

  { path: 'log-in', component: LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
