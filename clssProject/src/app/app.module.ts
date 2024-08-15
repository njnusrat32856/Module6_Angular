import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewloComponent } from './location/viewlo/viewlo.component';
import { CreateloComponent } from './location/createlo/createlo.component';
import { UpdateloComponent } from './location/updatelo/updatelo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { UpdatestComponent } from './student/updatest/updatest.component';
import { ViewstComponent } from './student/viewst/viewst.component';
import { CreatestComponent } from './student/createst/createst.component';
import { LoginComponent } from './reg-login/login/login.component';
import { RegistrationComponent } from './reg-login/registration/registration.component';
import { UserprofileComponent } from './home/userprofile/userprofile.component';
import { LogoutComponent } from './reg-login/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewloComponent,
    CreateloComponent,
    UpdateloComponent,
    HeaderComponent,
    FooterComponent,
    UpdatestComponent,
    ViewstComponent,
    CreatestComponent,
    LoginComponent,
    RegistrationComponent,
    UserprofileComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
