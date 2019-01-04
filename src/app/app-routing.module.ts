import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewLoanComponent} from './loans/new-loan/new-loan.component';
import {LoansListComponent} from './loans/loans-list/loans-list.component';
import {NewUserComponent} from './users/new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'new-loan', component: NewLoanComponent },
  { path: 'loans-trace', component: LoansListComponent},
  { path: 'new-user', component: NewUserComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
