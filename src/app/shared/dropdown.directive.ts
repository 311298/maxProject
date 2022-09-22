import { Directive, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen: boolean = false;
  // HostBinding('value') myValue; is exactly the same as [value]="myValue"

  @HostListener('click') toggleOpen() {
    // HostListener('click') myClick(){ } is exactly the same as (click)="myClick()"
    this.isOpen = !this.isOpen;
  }
}

// comments are form stack overflow
