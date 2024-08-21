import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './cmpt-user/dash/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'userdash', component: DashboardComponent
  },
  {
    path: '', redirectTo: 'userdash', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
