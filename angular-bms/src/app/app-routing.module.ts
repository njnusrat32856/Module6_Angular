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

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
