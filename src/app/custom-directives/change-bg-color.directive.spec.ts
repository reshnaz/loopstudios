import { ElementRef, Renderer2 } from '@angular/core';
import { ChangeBgColorDirective } from './change-bg-color.directive';

describe('ChangeBgColorDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef, renderer: Renderer2;
    const directive = new ChangeBgColorDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
