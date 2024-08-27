import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { SideNavigationComponent } from './shared/side-navigation/side-navigation.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { AccountOverviewComponent } from './customer/account-overview/account-overview.component';
import { ViewtransactionComponent } from './customer/transaction-list/viewtransaction/viewtransaction.component';
import { EdittransactionComponent } from './customer/transaction-list/edittransaction/edittransaction.component';
import { AddtransactionComponent } from './customer/transaction-list/addtransaction/addtransaction.component';
import { FundTransferComponent } from './customer/fund-transfer/fund-transfer.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { SupportComponent } from './customer/support/support.component';
import { AuthenticationComponent } from './customer/authentication/authentication.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { AddCustomerComponent } from './employee/customer-management/add-customer/add-customer.component';
import { EditCustomerComponent } from './employee/customer-management/edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './employee/customer-management/view-customer/view-customer.component';
import { TransactionApprovalComponent } from './employee/transaction-approval/transaction-approval.component';
import { AccountOpeningComponent } from './employee/account-opening/account-opening.component';
import { LoanApplicationComponent } from './employee/loan-application/loan-application.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    SideNavigationComponent,
    CustomerDashboardComponent,
    AccountOverviewComponent,
    ViewtransactionComponent,
    EdittransactionComponent,
    AddtransactionComponent,
    FundTransferComponent,
    ProfileComponent,
    SupportComponent,
    AuthenticationComponent,
    EmployeeDashboardComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ViewCustomerComponent,
    TransactionApprovalComponent,
    AccountOpeningComponent,
    LoanApplicationComponent,
    EmployeeProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(
      withFetch()
    ),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
