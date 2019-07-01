import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardNavComponent } from './dashboardnav/dashboardnav.component';
import {PersonDetailComponent } from './persondetail/persondetail.component';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardNavComponent,
    PersonDetailComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSidenavModule,
    MatDatepickerModule,
    BrowserAnimationsModule 
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }