import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LandingComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LandingComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
