import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../Components/login/login.component'; 
import { RegisterComponent } from '../Components/register/register.component';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { HomePageComponent } from '../Components/home-page/home-page.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home_page', component: HomePageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
})
export class AppRoutingModule { }