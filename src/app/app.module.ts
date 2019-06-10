import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {MatSidenavModule} from '@angular/material/sidenav'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardnavComponent } from './dashboardnav/dashboardnav.component';
import { OffertmngComponent } from './offertmng/offertmng.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OffertmngComponent,
    DashboardnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
