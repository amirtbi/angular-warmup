import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[addText]',
})
export class AddTextDirective implements OnInit {
  constructor(public el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const elText = this.el.nativeElement.textContent;
    console.log('El text', elText);

    if (elText == '1') {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
    } else if (elText == '2') {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'green');
    } else {
      this.renderer.setStyle(
        this.el.nativeElement,
        'backgroundColor',
        'orange'
      );
    }
  }
}
