import { Component, inject, signal, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';
import { BurgerButton } from '../../shared/components/burger-button/burger-button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BurgerButton],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})

export class Navbar implements OnInit, OnDestroy {
  private scrollService = inject(ScrollService);
  activeSection = signal('');
  activeLang = signal('en');
  menuOpen = signal(false);
  isMobile = signal(window.innerWidth <= 1000);
  private observer?: IntersectionObserver;

  @HostListener('window:resize')
  onResize() {
    this.isMobile.set(window.innerWidth <= 1000);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  setLang(lang: string) {
    this.activeLang.set(lang);
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

  scrollToSection(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
    this.closeMenu();
  }
}