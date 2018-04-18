import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {
  @Input('myvisibility') visibility: boolean;
  constructor(private renderer: Renderer2, private eleRef: ElementRef) {
  }
 ngOnInit(){
  console.log(this.visibility);
  if (this.visibility == true) {
    this.renderer.setStyle(this.eleRef.nativeElement, 'visibility', 'visible');
  }
  else{
    this.renderer.setStyle(this.eleRef.nativeElement, 'visibility', 'hidden');
  }
 }
}
