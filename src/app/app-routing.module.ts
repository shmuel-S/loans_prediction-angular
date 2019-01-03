import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewLoanComponent} from './loans/new-loan/new-loan.component';
import {LoansListComponent} from './loans/loans-list/loans-list.component';

const appRoutes: Routes = [
  { path: 'new-loan', component: NewLoanComponent },
  { path: 'loans-trace', component: LoansListComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
