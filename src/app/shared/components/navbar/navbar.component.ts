import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  public burgerToggled: boolean = false;

  ngOnInit() {}

  toggleBurger() {
    if (this.burgerToggled) this.burgerToggled = false;
    else this.burgerToggled = true;
  }
}
