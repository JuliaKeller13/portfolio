import { Component, inject } from '@angular/core';
import { Heading } from "../../../../shared/components/heading/heading";
import { Section } from '../../../../shared/components/section/section';
import { Button } from '../../../../shared/components/button/button';
import { ScrollService } from '../../../../shared/services/scroll.service';

@Component({
  selector: 'app-contact',
  imports: [Heading, Section, Button],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private scrollService = inject(ScrollService);

  scrollToHome() {
    this.scrollService.scrollTo('home');
  }
}
