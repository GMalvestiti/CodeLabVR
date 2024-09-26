import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[clMudaBackground]',
  standalone: true,
})
export class MudaBackgroundDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'gray';
  }
}
