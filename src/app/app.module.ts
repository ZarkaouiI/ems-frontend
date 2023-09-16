import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { PhotoProfileComponent } from './photo-profile/photo-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEmployeeComponent,
    LoadingSpinnerComponent,
    EmployeesListComponent,
    EmployeeCardComponent,
    EditEmployeeComponent,
    PhotoProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
