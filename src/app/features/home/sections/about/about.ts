import { Component } from '@angular/core';
import { Heading } from "../../../../shared/components/heading/heading";
import { Section } from '../../../../shared/components/section/section';

@Component({
  selector: 'app-about',
  imports: [Heading, Section],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
