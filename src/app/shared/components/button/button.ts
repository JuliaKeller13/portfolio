import { Component, inject, Input } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  imports: [TranslatePipe]
})
export class ButtonComponent {
  private scrollService = inject(ScrollService);

  @Input() btnClass = 'secondary-btn';
  @Input() label: string = 'BUTTON.LETSTALK';
  @Input() scrollToSection?: string;

  onClick() {
    if (this.scrollToSection) {
      this.scrollService.scrollTo(this.scrollToSection);
    }
  }
}
