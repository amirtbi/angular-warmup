import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[BasicHighlightDirective]',
})
export class AppBasicHighLightDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
}
