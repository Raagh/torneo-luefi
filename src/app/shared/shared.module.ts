import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { NewsBoxComponent } from './components/news-box/news-box.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavbarComponent,
    ButtonComponent,
    NewsBoxComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    ButtonComponent,
    NewsBoxComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
