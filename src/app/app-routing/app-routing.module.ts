import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../Components/login/login.component'; 
import { RegisterComponent } from '../Components/register/register.component';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { HomePageComponent } from '../Components/home-page/home-page.component';
import { DashboardAdmissionComponent } from '../Components/dashboard-admission/dashboard-admission.component';

const routes: Routes = [

  { path: '', redirectTo: 'home_page', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard_admission', component: DashboardAdmissionComponent },
  { path: 'home_page', component: HomePageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
})
export class AppRoutingModule { }