import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-burger-button',
  standalone: true,
  templateUrl: './burger-button.html',
  styleUrl: './burger-button.scss',
})
export class BurgerButton {
  isActive = input(false);
  toggled = output<void>();

  toggle() {
    this.toggled.emit();
  }
}
