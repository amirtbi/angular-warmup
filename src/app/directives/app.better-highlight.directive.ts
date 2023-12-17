import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[betterHighlight]',
})
export class BetterHighLight implements OnInit {
  @Input('betterHighlight') defaultBackground: string = 'transparent';
  @HostBinding('style.color') color: string;
  @HostBinding('style.backgroundColor') bgColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.defaultBackground = 'transparent';
  }

  @HostListener('mouseenter') mouseenter(event: Event) {
    this.color = 'gray';
    this.bgColor = this.defaultBackground;
  }
  @HostListener('mouseleave') mouseleave(event: Event) {
    this.color = 'black';
    this.bgColor = 'transparent';
  }
  @HostListener('click') click() {
    this.renderer.setStyle(this.elRef.nativeElement, 'padding', '2rem');
  }
}
