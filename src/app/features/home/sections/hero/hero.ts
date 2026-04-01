import { Component } from '@angular/core';
import { Section } from '../../../../shared/components/section/section';

@Component({
  selector: 'app-hero',
  imports: [Section],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
