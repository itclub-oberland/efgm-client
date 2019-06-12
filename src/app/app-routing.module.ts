import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'message', component: MessageComponent },
  { path: 'anfragen', component: AnfragenComponent },
  { path: 'activitylog', component: ActivityLogComponent },
  { path: 'personlist', component: PersonListComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes), MatButtonModule, MatNativeDateModule, MatIconModule, MatListModule, MatToolbarModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
