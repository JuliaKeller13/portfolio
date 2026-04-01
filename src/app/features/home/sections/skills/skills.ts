import { Component } from '@angular/core';
import { Heading } from "../../../../shared/components/heading/heading";
import { Section } from '../../../../shared/components/section/section';

@Component({
  selector: 'app-skills',
  imports: [Heading, Section],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {}
