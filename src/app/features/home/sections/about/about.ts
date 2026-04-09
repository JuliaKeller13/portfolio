import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heading } from "../../../../shared/components/heading/heading";
import { Section } from '../../../../shared/components/section/section';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, Heading, Section, TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  phrases = [
    { icon: 'icons/location-icon.png', prefix: 'I am', text: 'located in Iserlohn' },
    { icon: 'icons/remote-icon.svg', prefix: 'I build', text: 'modern Interfaces' },
    // { icon: 'icons/star-icon.png', prefix: 'I build', text: 'modern Interfaces' }
  ];

  displayText = '';
  currentIndex = 0;
  isDeleting = false;
  showIcon = true;


  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    const current = this.phrases[this.currentIndex];
    const fullText = current.text;

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
      this.cdr.detectChanges();
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.showIcon = false;
      this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.showIcon = true;
        this.cdr.detectChanges();
        this.typeEffect();
      }, 100);
      return;
    }

    setTimeout(() => this.typeEffect(), speed);
  }
}