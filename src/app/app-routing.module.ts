import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffertenComponent } from './navitems/offerten/offerten.component';
import { ActivitylogComponent } from './navitems/activitylog/activitylog.component';
import { PersonlistComponent } from './navitems/personlist/personlist.component';
import { MessageComponent } from './navitems/message/message.component';
import { AnfragenComponent } from './navitems/anfragen/anfragen.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent},

  { path: 'anfragen', component: AnfragenComponent},
  { path: 'offerten', component: OffertenComponent},
  { path: 'activitylog', component: ActivitylogComponent},
  { path: 'personlist', component: PersonlistComponent},
  { path: 'message', component: MessageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
