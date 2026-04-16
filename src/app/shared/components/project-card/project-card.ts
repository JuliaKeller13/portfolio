import { Component, Input } from '@angular/core';
import { ProjectInfo } from '../../../features/home/sections/projects/projects';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input({ required: true }) projectData!: ProjectInfo;

  openLink(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
  