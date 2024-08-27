import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { AccountViewComponent } from './components/account-view/account-view.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { LoanPaymentComponent } from './components/loan-payment/loan-payment.component';


const routes: Routes = [
  { path: 'create-account', component: AccountFormComponent },
  { path: 'viewaccounts', component: AccountViewComponent },
  { path: 'accounts', component: AccountListComponent },
  { 
    path: 'transHistory/:accountNumber', component: TransactionHistoryComponent 
  },
  {
    path: 'deposit', component: DepositComponent
  },
  {
    path: 'withdraw', component: WithdrawComponent
  },
  {
    path: 'fundtrasfer', component: FundTransferComponent
  },
  {
    path: 'transactionlist', component: TransactionListComponent
  },
  { path: 'applyloan', component: LoanApplicationComponent},
  { path: 'loandetails/:id', component: LoanDetailsComponent },
  { path: 'loanpayment/:id', component: LoanPaymentComponent },
  {
    path: 'loans', component: LoanListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
