import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Heading } from "../../../../shared/components/heading/heading";
import { Section } from '../../../../shared/components/section/section';
import { Subscription } from 'rxjs';
import { ButtonComponent } from "../../../../shared/components/button/button";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, Heading, Section, TranslateModule, ButtonComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})

export class About implements OnInit, OnDestroy {
  baseIcons = [
    'icons/text-anim/pin.png',
    'icons/text-anim/nb.svg',
    'icons/text-anim/phone.svg'
  ];
  mobileIcons = [
    'icons/text-anim/pin-mobile.svg',
    'icons/text-anim/nb-mobile.svg',
    'icons/text-anim/phone-mobile.svg'
  ];
  phrases: any[] = [];
  displayPrefix = '';
  displayText = '';
  currentIndex = 0;
  isDeleting = false;
  isMobile = false;

  private timeoutId: any;
  private translateSub?: Subscription;

  constructor(
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
    this.translateSub = this.translate.stream('ABOUT.PHRASES').subscribe(data => {
      this.phrases = data;
      if (!this.timeoutId && this.phrases?.length > 0) {
        this.typeEffect();
      }
    });
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.translateSub?.unsubscribe();
    window.removeEventListener('resize', this.checkMobile);
  }

  checkMobile = () => {
    this.isMobile = window.innerWidth < 1000;
    this.cdr.detectChanges();
  };

  typeEffect() {
    if (!this.phrases || this.phrases.length === 0) return;

    const current = this.phrases[this.currentIndex];
    const fullText = current.TEXT;
    this.displayPrefix = current.PREFIX;

    if (this.isDeleting) {
      this.displayText = fullText.substring(0, this.displayText.length - 1);
    } else {
      this.displayText = fullText.substring(0, this.displayText.length + 1);
    }

    this.cdr.detectChanges();

    let speed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.displayText === fullText) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText.length === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
      this.timeoutId = setTimeout(() => {
        this.typeEffect();
      }, 500);
      return;
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), speed);
  }

  getIcon(index: number): string {
    return this.isMobile ? this.mobileIcons[index] : this.baseIcons[index];
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}