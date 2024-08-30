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
import { RegisterComponent } from './reg-login/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './reg-login/guard/auth.guard';
import { LoginComponent } from './reg-login/login/login.component';
import { RoleGuard } from './reg-login/guard/role.guard';
import { LogoutComponent } from './reg-login/logout/logout.component';
import { AboutComponent } from './shared/about/about.component';
import { ServicesFaqsComponent } from './shared/services-faqs/services-faqs.component';
import { ContactComponent } from './shared/contact/contact.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';


const routes: Routes = [
  {
    path: 'create-account', component: AccountFormComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' }
  },
  {
    path: 'viewaccounts', component: AccountViewComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' }
  },
  {
    path: 'account-details/:aid', component: AccountDetailsComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user'}
  },
  {
    path: 'accountlist', component: AccountListComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'transHistory/:accountNumber', component: TransactionHistoryComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' }
  },
  {
    path: 'deposit', component: DepositComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' }
  },
  {
    path: 'withdraw', component: WithdrawComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' }
  },
  {
    path: 'fundtrasfer', component: FundTransferComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' }
  },
  {
    path: 'transactionlist', component: TransactionListComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
  {
    path: 'applyloan', component: LoanApplicationComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' }
  },
  {
    path: 'loandetails/:id', component: LoanDetailsComponent, canActivate: [AuthGuard, RoleGuard],
    data: {role: 'user'}
  },
  {
    path: 'loanpayment/:id', component: LoanPaymentComponent, canActivate: [AuthGuard, RoleGuard],
    data: {role: 'user'}
  },
  {
    path: 'loans', component: LoanListComponent, canActivate: [AuthGuard, RoleGuard],
    data: { role: 'user' }
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard, RoleGuard],
    data: {role: ['user', 'admin']}
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'service', component: ServicesFaqsComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
