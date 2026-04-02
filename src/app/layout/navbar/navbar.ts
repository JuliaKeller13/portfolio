import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})

export class Navbar implements OnInit, OnDestroy {
  private scrollService = inject(ScrollService);
  activeSection = signal('');
  activeLang = signal('en');
  menuOpen = signal(false);
  private observer?: IntersectionObserver;

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