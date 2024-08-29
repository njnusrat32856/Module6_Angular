import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
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
import { LoginComponent } from './reg-login/login/login.component';
import { RegisterComponent } from './reg-login/register/register.component';
import { LogoutComponent } from './reg-login/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './shared/about/about.component';
import { ServicesFaqsComponent } from './shared/services-faqs/services-faqs.component';
import { ContactComponent } from './shared/contact/contact.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountFormComponent,
    AccountViewComponent,
    AccountListComponent,
    TransactionHistoryComponent,
    DepositComponent,
    WithdrawComponent,
    FundTransferComponent,
    TransactionListComponent,
    LoanApplicationComponent,
    LoanDetailsComponent,
    LoanListComponent,
    LoanPaymentComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
    AboutComponent,
    ServicesFaqsComponent,
    ContactComponent,
    AccountDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
