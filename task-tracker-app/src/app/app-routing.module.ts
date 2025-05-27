import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

const routes: Routes = [

  { path: 'tasks', component: TaskListComponent },

  { path: 'add', component: TaskFormComponent },

  { path: 'edit/:id', component: TaskEditComponent },

  { path: 'details/:id', component: TaskDetailsComponent },

  { path: '', redirectTo: 'tasks', pathMatch: 'full' },

  { path: '**', redirectTo: '/tasks' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
