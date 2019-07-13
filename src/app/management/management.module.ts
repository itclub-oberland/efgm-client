import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ContentComponent } from './shared/layout/content/content.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { EntrypointComponent } from './shared/entrypoint/entrypoint.component';
import { ManagementRoutingModule } from './management-routing.module';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, ContentComponent, FooterComponent, EntrypointComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ],
  bootstrap: [EntrypointComponent]
})
export class ManagementModule { }
