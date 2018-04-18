import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective {

  constructor(private renderer: Renderer2,private eleRef:ElementRef) {
    renderer.setStyle(eleRef.nativeElement, 'text-transform', 'uppercase');
  }

}
