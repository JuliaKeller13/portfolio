import { Component, input, output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-burger-button',
  standalone: true,
  imports: [TranslatePipe],
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
