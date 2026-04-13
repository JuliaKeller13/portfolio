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
    { NAME: 'HTML', ICON: '/icons/skill-icons/html.svg' },
    { NAME: 'CSS', ICON: '/icons/skill-icons/css.svg' },
    { NAME: 'JavaScript', ICON: '/icons/skill-icons/javascript.svg' },
    { NAME: 'TypeScript', ICON: '/icons/skill-icons/typescript.svg' },
    { NAME: 'GitHub', ICON: '/icons/skill-icons/git.svg' },
    { NAME: 'REST-API', ICON: '/icons/skill-icons/api.svg' },
    { NAME: 'Supabase', ICON: '/icons/skill-icons/supabase.svg' },
    { NAME: 'Angular', ICON: '/icons/skill-icons/angular.svg' },
    { NAME: 'Python', ICON: '/icons/skill-icons/python.svg' },
    { NAME: 'SQL', ICON: '/icons/skill-icons/sql.svg' }
  ];

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
