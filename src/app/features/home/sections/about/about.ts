import { Component } from '@angular/core';
import { Heading } from "../../../../shared/components/heading/heading";
import { Section } from '../../../../shared/components/section/section';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [Heading, Section, TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
