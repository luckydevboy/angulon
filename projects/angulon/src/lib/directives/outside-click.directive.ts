import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Output,
} from '@angular/core';

@Directive({
  selector: '[angOutsideClick]',
  standalone: true,
})
export class OutsideClickDirective {
  @Output() angOutsideClick = new EventEmitter();

  elementRef = inject(ElementRef<HTMLElement>);

  constructor() {}

  @HostListener('document:click', ['$event.target'])
  public onClick(el: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(el);
    if (!clickedInside) {
      this.angOutsideClick.emit();
    }
  }
}
