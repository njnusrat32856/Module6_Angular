import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CreateAccountComponent } from './component/account/create-account/create-account.component';
import { ViewAccountComponent } from './component/account/view-account/view-account.component';
import { EditAccountComponent } from './component/account/edit-account/edit-account.component';
import { TransferFundComponent } from './component/transaction/transfer-fund/transfer-fund.component';
import { DepositComponent } from './component/transaction/deposit/deposit.component';
import { WithdrawComponent } from './component/transaction/withdraw/withdraw.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './component/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CreateAccountComponent,
    ViewAccountComponent,
    EditAccountComponent,
    TransferFundComponent,
    DepositComponent,
    WithdrawComponent,
    DashboardComponent,
    LogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
