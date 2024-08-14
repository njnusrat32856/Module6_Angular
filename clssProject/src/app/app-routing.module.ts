import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewloComponent } from './location/viewlo/viewlo.component';
import { CreateloComponent } from './location/createlo/createlo.component';
import { UpdateloComponent } from './location/updatelo/updatelo.component';
import { ViewstComponent } from './student/viewst/viewst.component';
import { CreatestComponent } from './student/createst/createst.component';
import { UpdatestComponent } from './student/updatest/updatest.component';

const routes: Routes = [
  {
    path: 'location', component: ViewloComponent
  },
  {
    path: 'createlo', component: CreateloComponent
  },
  {
    path: 'updatelo/:id', component: UpdateloComponent
  },
  {
    path: 'student', component: ViewstComponent
  },
  {
    path: 'createst', component: CreatestComponent
  },
  {
    path: 'updatest/:id', component: UpdatestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
