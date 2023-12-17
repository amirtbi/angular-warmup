import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[BasicTextLength]',
})
export class BasicTextLength implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.el.nativeElement.textContent.length > 100) {
      this.el.nativeElement.style.backgroundColor = 'red';
    } else {
      this.el.nativeElement.style.backgroundColor = 'green';
    }
  }
}
