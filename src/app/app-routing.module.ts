import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"Forgot_password",component:ForgotPasswordComponent},
  {path:"admin",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:"**",redirectTo:"/"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
