import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardNavComponent } from './dashboardnav/dashboardnav.component';
import { AnfragenComponent } from './navitems/anfragen/anfragen.component';
import { OffertenComponent } from './navitems/offerten/offerten.component';
import { ActivitylogComponent } from './navitems/activitylog/activitylog.component';
import { MessageComponent } from './navitems/message/message.component';
import { PersonlistComponent } from './navitems/personlist/personlist.component';
import { MatButtonModule, MatNativeDateModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardNavComponent,
    AnfragenComponent,
    OffertenComponent,
    ActivitylogComponent,
    MessageComponent,
    PersonlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule, 
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
