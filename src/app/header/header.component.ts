import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuExpanded: boolean = false;
  
  constructor() { }
  
  ngOnInit(): void {
    
  }

  isExpanded() {
    console.log('called')
    return this.isMenuExpanded = !this.isMenuExpanded;
  }
  
}
