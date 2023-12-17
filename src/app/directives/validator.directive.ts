import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[requiredValidator]',
})
export class InputValidatorDirective {
  @Input() validColor: string = 'green';
  @Input() inValidColor: string = 'red';
  @HostBinding('class.valid') isValid: boolean = true;
  @HostBinding('class.inValid') inValid: boolean = false;
  @HostBinding('style.border') border: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input') onInput() {
    console.log('length', this.el.nativeElement.value.length);
    if (this.el.nativeElement.value.length < 3) {
      this.border = `1px solid ${this.inValidColor}`;
      //   this.isValid = false;
      //   this.inValid = true;
    } else {
      this.border = `1px solid ${this.validColor}`;

      //   this.isValid = true;
      //   this.inValid = false;
    }
    console.log('input value', this.el.nativeElement.value);
  }
}
