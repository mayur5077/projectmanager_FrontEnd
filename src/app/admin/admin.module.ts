import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LandingComponent } from './landing.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EmployeesComponent } from './employees/employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectmoduleComponent } from './projectmodule/projectmodule.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { MytasksComponent } from './mytasks/mytasks.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { WorkreportComponent } from './workreport/workreport.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LandingComponent,
    DashbordComponent,
    EmployeesComponent,
    ProjectmoduleComponent,
    ProjectsComponent,
    ProjecttaskComponent,
    MytasksComponent,
    WorkreportComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatMomentDateModule
  ]
})
export class AdminModule { }
