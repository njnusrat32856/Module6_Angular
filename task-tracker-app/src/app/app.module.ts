import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ErrorStateMatcher, MatCommonModule } from '@angular/material/core';
import {MatButtonModule, MatIconButton } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule } from '@angular/material/checkbox';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatButtonToggle, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatStrokedButton } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskEditComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatIcon,
    MatIconButton,
    MatCommonModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCard,
    MatCardContent,
    MatButtonToggle,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatFormFieldModule,
    MatCardActions,
    // MatStrokedButton
  ],
  providers: [
    provideClientHydration(),
    ErrorStateMatcher
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
