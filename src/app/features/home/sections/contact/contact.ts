import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Heading } from "../../../../shared/components/heading/heading";
import { Section } from '../../../../shared/components/section/section';
import { Button } from '../../../../shared/components/arrow-button/arrow-button';
import { ScrollService } from '../../../../shared/services/scroll.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [Heading, Section, Button, TranslatePipe, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  // --- Formular-Daten Objekt (Lösung 1) ---
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  // --- Zustands-Variablen ---
  privacyChecked = false;
  privacyError = false;
  privacyHover = false;

  private scrollService = inject(ScrollService);

  /**
   * Beispiel-Methode für den Formular-Versand
   * (Hier kannst du später deine Logik einbauen)
   */
  onSubmit() {
    if (this.privacyChecked) {
      console.log('Formular-Daten:', this.contactData);
      // Hier Logik für Email-Versand einfügen
    } else {
      this.privacyError = true;
    }
  }

  scrollToHome() {
    if (window.innerWidth <= 1000) {
      const logoNav = document.querySelector('.logo-nav') as HTMLElement;
      if (logoNav) {
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