import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-icons.html',
  styleUrl: './social-icons.scss',
})
export class SocialIcons {
  @Input() orientation: 'row' | 'column' = 'column'; 
  @Input() theme: 'header' | 'footer' = 'header';
}