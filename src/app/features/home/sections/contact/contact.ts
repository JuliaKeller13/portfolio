import { Component, inject } from '@angular/core';
import { Heading } from "../../../../shared/components/heading/heading";
import { Section } from '../../../../shared/components/section/section';
import { Button } from '../../../../shared/components/arrow-button/arrow-button';
import { ScrollService } from '../../../../shared/services/scroll.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [Heading, Section, Button, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private scrollService = inject(ScrollService);

  scrollToHome() {
    if (window.innerWidth <= 1000) {
      const logoNav = document.querySelector('.logo-nav') as HTMLElement;
      if (logoNav) {
        // Spring-Animation mit GSAP
        const navContainer = document.querySelector('.nav-container') as HTMLElement;
        const navbarHeight = navContainer?.offsetHeight ?? 0;
        let targetY = logoNav.getBoundingClientRect().top + window.scrollY - navbarHeight;
        if (targetY < 80) targetY = 80;
        if (window.gsap) {
          window.gsap.to(window, {
            duration: 1.1,
            scrollTo: { y: targetY, autoKill: false },
            ease: 'elastic.out(1, 0.5)'
          });
        } else {
          logoNav.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    } else {
      this.scrollService.scrollTo('social-icons');
    }
  }
}
