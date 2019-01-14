import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appDarkingOnHover]'
})
export class DarkingOnHoverDirective {

  @Input() claridade = '70%';

  constructor(
    private el: ElementRef,
    private render: Renderer
    ) {

  }


  @HostListener('mouseover')
  darkenOn() {
      this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.claridade})`);
  }
  @HostListener('mouseleave')
  darkenOff() {
      this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }

}
