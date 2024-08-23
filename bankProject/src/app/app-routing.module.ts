import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './cmpt-user/dash/dashboard/dashboard.component';
import { ViewAccountComponent } from './cmpt-user/account/view-account/view-account.component';
import { AddAccountComponent } from './cmpt-user/account/add-account/add-account.component';

const routes: Routes = [
  // {
  //   path: 'userdash', component: DashboardComponent
  // },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: 'account', component: ViewAccountComponent
  },
  {
    path: 'addaccount', component: AddAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
