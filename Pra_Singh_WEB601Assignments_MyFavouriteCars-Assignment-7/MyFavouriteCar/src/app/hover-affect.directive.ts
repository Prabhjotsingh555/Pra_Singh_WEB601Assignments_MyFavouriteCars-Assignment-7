import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {

  @Input() hoverStyle: string = '';

  constructor(private elm: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addStyle();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeStyle();
  }

  private addStyle() {
    this.elm.nativeElement.style[this.hoverStyle] = this.hoverStyle === 'textDecoration' ? 'underline' : 'bold';
  }

  private removeStyle() {
    this.elm.nativeElement.style[this.hoverStyle] = this.hoverStyle === 'textDecoration' ? 'none' : 'normal';
  }

}
