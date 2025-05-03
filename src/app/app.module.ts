import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomePageComponent } from  './Components/home-page/home-page.component';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SkillRecommendationComponent } from './Components/skill-recommendation/skill-recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomePageComponent,
    SkillRecommendationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PowerBIEmbedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
