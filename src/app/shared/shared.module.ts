import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { NewsBoxComponent } from './components/news-box/news-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    ButtonComponent,
    NewsBoxComponent
  ],
  exports: [
    NavbarComponent,
    ButtonComponent,
    NewsBoxComponent
  ]
})
export class SharedModule { }
