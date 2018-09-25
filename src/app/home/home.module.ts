import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './hero/home-hero.component';
import { CrestCarrouselComponent } from './crest-carrousel/home-crest-carrousel.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    CrestCarrouselComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
