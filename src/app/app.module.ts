import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomePageComponent } from  './Components/home-page/home-page.component';
import { PowerBIEmbedModule } from 'powerbi-client-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PowerBIEmbedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
