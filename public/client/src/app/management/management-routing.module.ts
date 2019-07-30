import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrypointComponent } from './shared/entrypoint/entrypoint.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';

const routes: Routes = [
  {
    path: 'management', component: EntrypointComponent,
    children: [
      { path: '', redirectTo: '/management/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'personal-info', component: PersonalInfoComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
