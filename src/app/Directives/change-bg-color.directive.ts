import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBgColor]'
})
export class ChangeBgColorDirective {
  
  @Input('appChangeBgColor')
  isMenuExpanded!: boolean;
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  @HostListener('click') onClick(){ 
    if(this.isMenuExpanded)
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
    else 
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
  }
  
}
