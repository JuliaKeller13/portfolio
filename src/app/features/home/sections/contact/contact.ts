import { Component } from '@angular/core';
import { Heading } from "../../../../shared/components/heading/heading";
import { Section } from '../../../../shared/components/section/section';

@Component({
  selector: 'app-contact',
  imports: [Heading, Section],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
