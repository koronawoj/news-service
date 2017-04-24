import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <div class="container">
        <ul class="nav navbar-nav float-xs-right">
          <li class="nav-item">
            <h2><a class="nav-link" routerLink="/show" routerLinkActive="active"> Show news </a></h2>
          </li>
          <li class="nav-item">
            <h2><a class="nav-link" routerLink="/add" routerLinkActive="active"> Add news </a></h2>
          </li>
        </ul>
      </div>
    </nav>
    <br>
  `,
  styles: []
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
