import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})
export class DropDownDirective {
  @HostBinding('class.show') show: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.show = !this.show;
    const ul = this.renderer.nextSibling(this.el.nativeElement);
    this.renderer.setAttribute(ul, 'class', 'show');
  }
}
