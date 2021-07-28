import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  isExpanded() {
    return this.isMenuExpanded = !this.isMenuExpanded;
  }

}
