import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewloComponent } from './location/viewlo/viewlo.component';
import { CreateloComponent } from './location/createlo/createlo.component';

const routes: Routes = [
  {
    path: 'location', component: ViewloComponent
  },
  {
    path: 'createlocation', component: CreateloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
