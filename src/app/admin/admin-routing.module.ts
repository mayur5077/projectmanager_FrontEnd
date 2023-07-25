import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectmoduleComponent } from './projectmodule/projectmodule.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { MytasksComponent } from './mytasks/mytasks.component';
import { WorkreportComponent } from './workreport/workreport.component';

const routes: Routes = [
  {path:"",component:LandingComponent,children:[
    {path:"dashbord",component:DashbordComponent},
  {path:"employees",component:EmployeesComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"projects/projectmodules/:projectid/:manegerid",component:ProjectmoduleComponent},
  {path:"projects/projectmodules/:projectid/:manegerid/projecttask/:moduleid",component:ProjecttaskComponent},
  {path:"mytasks",component:MytasksComponent},
  {path:"workreport",component:WorkreportComponent}


  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
