import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './others/footer/footer.component';
import { HeaderComponent } from './others/header/header.component';
import { SidebarComponent } from './others/sidebar/sidebar.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LoginComponent } from './register-login/login/login.component';
import { RegistrationComponent } from './register-login/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
