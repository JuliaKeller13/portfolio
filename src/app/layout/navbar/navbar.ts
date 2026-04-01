import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})

export class Navbar implements OnInit, OnDestroy {
  private router = inject(Router);
  activeSection = signal('');
  menuOpen = signal(false);
  private observer?: IntersectionObserver;

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      { threshold: 0.3 }
    );

    setTimeout(() => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => this.observer!.observe(section));
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  async scrollToSection(sectionId: string) {
    if (this.router.url.split('#')[0] !== '/') {
      await this.router.navigate(['/'], { fragment: sectionId });
      setTimeout(() => this.animateBounce(sectionId), 300);
    } else {
      if (this.activeSection() === sectionId) return;
      this.router.navigate(['/'], { fragment: sectionId, replaceUrl: true });
      this.animateBounce(sectionId);
      this.closeMenu();
    }
  }

  private animateBounce(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    const navContainer = document.querySelector('.nav-container') as HTMLElement;
    const navbarHeight = 100;
    const targetY = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

    gsap.to(window, {
      duration: 1.1,
      scrollTo: { y: targetY, autoKill: false },
      ease: "back.out(0.7)",
    });
  }
}