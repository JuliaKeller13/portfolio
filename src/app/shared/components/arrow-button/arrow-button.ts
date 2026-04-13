import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './arrow-button.html',
  styleUrl: './arrow-button.scss',
})
export class Button {
  variant = input<'primary-btn' | 'arrow-btn'>('primary-btn');
  direction = input<'down' | 'up' | 'left' | 'right'>('down');
}
