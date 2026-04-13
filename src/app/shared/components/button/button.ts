import { Component, inject } from '@angular/core';
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

  scrollToContact() {
    this.scrollService.scrollTo('contact');
  }
}
