import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    ButtonComponent
  ],
  exports: [
    NavbarComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
