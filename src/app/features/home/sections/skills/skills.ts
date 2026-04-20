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
export class Skills {
  skills = [
    { NAME: 'HTML', ICON: 'skill-icons/html.svg' },
    { NAME: 'CSS', ICON: 'skill-icons/css.svg' },
    { NAME: 'JavaScript', ICON: 'skill-icons/javascript.svg' },
    { NAME: 'TypeScript', ICON: 'skill-icons/typescript.svg' },
    { NAME: 'GitHub', ICON: 'skill-icons/git.svg' },
    { NAME: 'REST-API', ICON: 'skill-icons/api.svg' },
    { NAME: 'Supabase', ICON: 'skill-icons/supabase.svg' },
    { NAME: 'Angular', ICON: 'skill-icons/angular.svg' },
    { NAME: 'Python', ICON: 'skill-icons/python.svg' },
    { NAME: 'SQL', ICON: 'skill-icons/sql.svg' }
  ];

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
