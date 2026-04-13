import { Component } from '@angular/core';
import { Heading } from "../../../../shared/components/heading/heading";
import { Section } from '../../../../shared/components/section/section';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-skills',
  imports: [Heading, Section, TranslatePipe, ButtonComponent],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {}
