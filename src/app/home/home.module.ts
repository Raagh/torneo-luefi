import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './hero/home-hero.component';
import { CrestCarouselComponent } from './crest-carousel/home-crest-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    SlickCarouselModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    CrestCarouselComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
