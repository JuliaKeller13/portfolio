import { Component } from '@angular/core';
import { Navbar } from '../../layout/navbar/navbar';

import { TranslatePipe } from '@ngx-translate/core';
import { Heading } from '../../shared/components/heading/heading';

@Component({
  selector: 'app-imprint',
  imports: [Navbar, TranslatePipe, Heading],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {
  scrollToLogoNav() {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
      setTimeout(() => this.scrollLogoNav(), 400);
    } else {
      this.scrollLogoNav();
    }
  }

  scrollLogoNav() {
    const logoNav = document.querySelector('.logo-nav') as HTMLElement;
    if (logoNav) {
      logoNav.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
