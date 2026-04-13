import { Component, inject } from '@angular/core';
import { Section } from '../../../../shared/components/section/section';
import { Button } from '../../../../shared/components/arrow-button/arrow-button';
import { SocialIcons } from '../../../../shared/components/social-icons/social-icons';
import { ScrollService } from '../../../../shared/services/scroll.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [Section, Button, SocialIcons, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private scrollService = inject(ScrollService);

  scrollToAbout() {
    this.scrollService.scrollTo('about');
  }

  scrollToHome() {
    this.scrollService.scrollTo('home');
  }
}
