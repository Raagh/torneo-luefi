import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public BurgerToggled: boolean = false;

  ngOnInit() {
  }

  toggleBurger() {
    if (this.BurgerToggled)
      this.BurgerToggled = false;
    else
      this.BurgerToggled = true;
  }

}
