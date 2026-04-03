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

    const distance = Math.abs(window.scrollY - targetY);
    const duration = Math.min(1.8, Math.max(0.9, distance / 1200));
    const overshoot = distance > 2000 ? 0.8 : 1.3;

    gsap.to(window, {
      duration,
      scrollTo: { y: targetY, autoKill: false },
      ease: `back.out(${overshoot})`,
    });
  }
}
