import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './cmpt-user/dash/dashboard/dashboard.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './cmpt-user/dash/header/header.component';
import { SidebarComponent } from './cmpt-user/dash/sidebar/sidebar.component';
import { FooterComponent } from './cmpt-user/dash/footer/footer.component';
import { AddAccountComponent } from './cmpt-user/account/add-account/add-account.component';
import { ViewAccountComponent } from './cmpt-user/account/view-account/view-account.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AddAccountComponent,
    ViewAccountComponent
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
