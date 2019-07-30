import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ContentComponent } from './shared/layout/content/content.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { EntrypointComponent } from './shared/entrypoint/entrypoint.component';
import { ManagementRoutingModule } from './management-routing.module';
import { MaterialModule } from '../public/shared/material/material.module';
import { SidenavComponent } from './shared/layout/left-menu/sidenav/sidenav.component';
import { MainMenuComponent } from './shared/layout/left-menu/main-menu/main-menu.component';
import { SubMenuComponent } from './shared/layout/left-menu/sub-menu/sub-menu.component';
import { SideMenuComponent } from './shared/layout/left-menu/side-menu/side-menu.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';

@NgModule({
  declarations: [
      HomeComponent, HeaderComponent,
      ContentComponent, FooterComponent, EntrypointComponent,
      SidenavComponent, MainMenuComponent, SubMenuComponent,
      SideMenuComponent, BreadcrumbComponent, PersonalInfoComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ManagementRoutingModule,
  ],
  bootstrap: [EntrypointComponent]
})
export class ManagementModule { }
