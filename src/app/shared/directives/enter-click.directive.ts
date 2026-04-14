import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEnterClick]',
  standalone: true,
})
export class EnterClickDirective {
  @HostListener('keydown', ['$event'])
  onKeydown(event: Event) {
    const keyboardEvent = event as KeyboardEvent;

    if (keyboardEvent.key === 'Enter') {
      keyboardEvent.preventDefault();
      (keyboardEvent.target as HTMLElement)?.click?.();
    }
  }
}