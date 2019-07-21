import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrypointComponent } from './shared/entrypoint/entrypoint.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'management', component: EntrypointComponent,
    children: [
      { path: 'home', component: HomeComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
