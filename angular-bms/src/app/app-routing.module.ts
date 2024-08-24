import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shared/about/about.component';
import { ServicesFaqsComponent } from './shared/services-faqs/services-faqs.component';
import { ContactComponent } from './shared/contact/contact.component';
import { LoginComponent } from './reg-login/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AuthGuard } from './reg-login/guard/authguard.guard';
import { RoleGuard } from './reg-login/guard/roleguard.guard';
import { ViewAccountComponent } from './component/user/account/view-account/view-account.component';
import { ViewTransactionHistoryComponent } from './component/user/transaction/view-transaction-history/view-transaction-history.component';
import { ViewLoanApprovalCheckComponent } from './component/user/loan/view-loan-approval-check/view-loan-approval-check.component';
import { ApplyLoanFormComponent } from './component/user/loan/apply-loan-form/apply-loan-form.component';
import { AddAccountComponent } from './component/user/account/add-account/add-account.component';
import { UpdateAccountComponent } from './component/user/account/update-account/update-account.component';
import { LoanPayFormComponent } from './component/user/loan/loan-pay-form/loan-pay-form.component';
import { DepositFormComponent } from './component/user/transaction/deposit-form/deposit-form.component';
import { WithdrawFormComponent } from './component/user/transaction/withdraw-form/withdraw-form.component';
import { FundTransferFormComponent } from './component/user/transaction/fund-transfer-form/fund-transfer-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'service', component: ServicesFaqsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'viewaccount', component: ViewAccountComponent
  },
  {
    path: 'transHistory', component: ViewTransactionHistoryComponent
  },
  {
    path: 'loanAppCheck', component: ViewLoanApprovalCheckComponent
  },
  {
    path: 'applyloanform', component: ApplyLoanFormComponent
  },
  {
    path: 'addaccount', component: AddAccountComponent
  },
  {
    path: 'updateaccount/:id', component: UpdateAccountComponent
  },
  {
    path: 'loanpayform', component: LoanPayFormComponent
  },
  {
    path: 'deposit', component: DepositFormComponent
  },
  {
    path: 'withdraw', component: WithdrawFormComponent
  },
  {
    path: 'fundtransfer', component: FundTransferFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
