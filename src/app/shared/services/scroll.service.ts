import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private router = inject(Router);

  async scrollTo(sectionId: string) {
    if (this.router.url.split('#')[0] !== '/') {
      await this.router.navigate(['/'], { fragment: sectionId });
      setTimeout(() => this.animateBounce(sectionId), 300);
    } else {
      this.router.navigate(['/'], { fragment: sectionId, replaceUrl: true });
      this.animateBounce(sectionId);
    }
  }

  private animateBounce(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    const navContainer = document.querySelector('.nav-container') as HTMLElement;
    const navbarHeight = navContainer?.offsetHeight ?? 0;
    let targetY = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

    if (targetY < 80) {
      targetY = 80;
    }

    gsap.to(window, {
      duration: 1.1,
      scrollTo: { y: targetY, autoKill: false },
      ease: 'back.out(1.3)',
    });
  }
}
