import { Component } from '@angular/core';
import { Heading } from "../../../../shared/components/heading/heading";
import { Section } from '../../../../shared/components/section/section';

@Component({
  selector: 'app-projects',
  imports: [Heading, Section],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
