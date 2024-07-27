import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';
import { CreatestudentComponent } from './student/createstudent/createstudent.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { IMAGE_CONFIG, NgOptimizedImage } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    
    LocationComponent,
    CreatelocationComponent,
    UpdatelocationComponent,
    CreatestudentComponent,
    UpdatestudentComponent,
    ViewstudentComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    // provide: IMAGE_CONFIG,
    // useValue: {
    //   placeholderResolution: 40
    // },
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
