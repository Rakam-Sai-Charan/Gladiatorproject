import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/AboutUs/AboutUs.components';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { BindingsdemoComponent } from './components/bindingsdemo/bindingsdemo.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'emp', component: EmployeeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'emplist', component: EmployeeListComponent},//, canActivate:[AuthGuard]
  {path:'form',component:ReactiveFormComponent},
  {path:'user',component:UserComponent},
  {path:'adduser',component:AddUserComponent},
  {path:'bind',component:BindingsdemoComponent},
  {path:'ngclass',component:NgclassdemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
