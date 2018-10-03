import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './hero/home-hero.component';
import { HomeCrestCarouselComponent } from './crest-carousel/home-crest-carousel.component';
import { HomeNewsComponent } from './news/home-news.component';

@NgModule({
  imports: [
    CommonModule,
    SlickCarouselModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeCrestCarouselComponent,
    HomeNewsComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
