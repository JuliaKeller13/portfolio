import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-social-icons',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './social-icons.html',
  styleUrl: './social-icons.scss',
})
export class SocialIcons {
  @Input() orientation: 'row' | 'column' = 'column'; 
  @Input() theme: 'header' | 'footer' | 'mobile' = 'header';
}