import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInfo } from '../../../features/home/sections/projects/projects';
import { ButtonComponent } from '../button/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslatePipe],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input({ required: true }) projectData!: ProjectInfo;
  @Input() currentIndex: number = 0;
  @Input() totalProjects: number = 0;

  openLink(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
