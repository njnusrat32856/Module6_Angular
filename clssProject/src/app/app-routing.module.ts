import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewloComponent } from './location/viewlo/viewlo.component';
import { CreateloComponent } from './location/createlo/createlo.component';
import { UpdateloComponent } from './location/updatelo/updatelo.component';
import { ViewstComponent } from './student/viewst/viewst.component';
import { CreatestComponent } from './student/createst/createst.component';
import { UpdatestComponent } from './student/updatest/updatest.component';
import { RegistrationComponent } from './reg-login/registration/registration.component';
import { LoginComponent } from './reg-login/login/login.component';
import { AuthGuard } from './reg-login/guard/authguard.guard';
import { UserprofileComponent } from './home/userprofile/userprofile.component';
import { LogoutComponent } from './reg-login/logout/logout.component';
import { RoleGuard } from './reg-login/guard/role.guard';

const routes: Routes = [
  {
    path: 'location', component: ViewloComponent, canActivate: [AuthGuard, RoleGuard],
    data:{role: 'Admin'}
  },
  {
    path: 'createlo', component: CreateloComponent, canActivate: [AuthGuard, RoleGuard],
    data:{role: 'Admin'}
  },
  {
    path: 'updatelo/:id', component: UpdateloComponent, canActivate: [AuthGuard, RoleGuard],
    data:{role: 'Admin'}
  },
  {
    path: 'student', component: ViewstComponent, canActivate: [AuthGuard, RoleGuard],
    data:{role: 'User'}
  },
  {
    path: 'createst', component: CreatestComponent, canActivate: [AuthGuard, RoleGuard],
    data:{role: 'User'}
  },
  {
    path: 'updatest/:id', component: UpdatestComponent, canActivate: [AuthGuard, RoleGuard],
    data:{role: 'User'}
  },
  {
    path: 'reg', component: RegistrationComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'userprofile', component: UserprofileComponent,
    canActivate: [AuthGuard, RoleGuard],
    data:{role: ['Admin', 'User']}
  },
  {
    path: 'logout', component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
