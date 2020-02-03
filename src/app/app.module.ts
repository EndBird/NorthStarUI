import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { WelcomeviewComponent } from './welcomeview/welcomeview.component';
import { DentalclaimsComponent } from './dentalclaims/dentalclaims.component';
import { HighprioritydentalclaimsComponent } from './highprioritydentalclaims/highprioritydentalclaims.component';
import { ClaimreportComponent } from './claimreport/claimreport.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationbarComponent,
    WelcomeviewComponent,
    DentalclaimsComponent,
    HighprioritydentalclaimsComponent,
    ClaimreportComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, CommonModule, MatToolbarModule, MatIconModule, MatSidenavModule,HttpClientModule, MatListModule,
     RouterModule.forRoot([{path:'dashboard', component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'welcomeview', pathMatch: 'full'},
      {path: 'welcomeview', component: WelcomeviewComponent},
      {path: 'dentalclaims', component: DentalclaimsComponent},
      {path: 'dentalclaims/highprioritydentalclaims', component: HighprioritydentalclaimsComponent},
       {path: 'dentalclaims/highprioritydentalclaims/claimreport', component: ClaimreportComponent}
    ]},
    {path: '', component: LoginComponent}
    
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
