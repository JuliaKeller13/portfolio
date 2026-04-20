import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { customEmailValidator } from '../../../../shared/services/validator.servises';
import { HttpClient } from '@angular/common/http';
import { Heading } from '../../../../shared/components/heading/heading';
import { Section } from '../../../../shared/components/section/section';
import { Button } from '../../../../shared/components/arrow-button/arrow-button';
import { ScrollService } from '../../../../shared/services/scroll.service';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Heading, Section, Button, TranslatePipe, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private scrollService = inject(ScrollService);
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, customEmailValidator()]],
    message: [
      '',
      [Validators.required, Validators.minLength(10), Validators.pattern(/^[^<>{}[\/\]]*$/)],
    ],
    privacy: [false, Validators.requiredTrue],
  });

  privacyHover = false;
  isSubmitting = false;
  successMessage = false;

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
  get privacy() {
    return this.contactForm.get('privacy');
  }

  onSubmit() {
  if (this.contactForm.invalid) return;

  this.isSubmitting = true;

  const endpoint = "https://juliakeller-dev.de/api/send_mail.php";

  this.http.post(endpoint, this.contactForm.value).subscribe({
    next: (response) => {
      this.isSubmitting = false;
      this.successMessage = true;
      this.contactForm.reset();
      setTimeout(() => this.successMessage = false, 5000);
    },
    error: (err) => {
      this.isSubmitting = false;
      console.error('Senden fehlgeschlagen', err);
    }
  });
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
            ease: 'elastic.out(1, 0.5)',
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
