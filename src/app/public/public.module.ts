import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ContentComponent } from './shared/layout/content/content.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { EntrypointComponent } from './shared/entrypoint/entrypoint.component';
import { PublicRoutingModule } from './public-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ManagementModule } from '../management/management.module';

@NgModule({
  declarations: [HomeComponent, LoginComponent, HeaderComponent, ContentComponent, FooterComponent, EntrypointComponent],
  imports: [
    CommonModule,
    BrowserModule,
    PublicRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ManagementModule
  ],
  bootstrap: [EntrypointComponent]
})
export class PublicModule { }

// ng g c public/shared/layout/footer  --module=public.module
