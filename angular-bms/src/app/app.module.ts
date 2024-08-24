import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './shared/about/about.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ServicesFaqsComponent } from './shared/services-faqs/services-faqs.component';
import { ContactComponent } from './shared/contact/contact.component';
import { LoginComponent } from './reg-login/login/login.component';
import { LogoutComponent } from './reg-login/logout/logout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ViewAccountComponent } from './component/user/account/view-account/view-account.component';
import { AddAccountComponent } from './component/user/account/add-account/add-account.component';
import { ViewTransactionHistoryComponent } from './component/user/transaction/view-transaction-history/view-transaction-history.component';
import { DepositFormComponent } from './component/user/transaction/deposit-form/deposit-form.component';
import { UpdateAccountComponent } from './component/user/account/update-account/update-account.component';
import { CommonModule } from '@angular/common';
import { ViewLoanApprovalCheckComponent } from './component/user/loan/view-loan-approval-check/view-loan-approval-check.component';
import { ApplyLoanFormComponent } from './component/user/loan/apply-loan-form/apply-loan-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ServicesFaqsComponent,
    ContactComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    ViewAccountComponent,
    AddAccountComponent,
    ViewTransactionHistoryComponent,
    DepositFormComponent,
    UpdateAccountComponent,
    ViewLoanApprovalCheckComponent,
    ApplyLoanFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
