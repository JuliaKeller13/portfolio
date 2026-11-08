import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heading } from '../../../../shared/components/heading/heading';
import { Section } from '../../../../shared/components/section/section';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectCard } from '../../../../shared/components/project-card/project-card';
import { PORTFOLIO_PROJECTS } from '../../../../shared/data/portfolio-projects';

export interface ProjectInfo {
  id: string;
  tabLabel: string;
  duration: string;
  aboutText: string;
  workProcessText: string;
  learnText: string;
  technologies: string[];
  techNames: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, Heading, Section, TranslatePipe, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  // Nur die vier Highlights erscheinen auf der Hauptseite.
  // Daten wie Links, Screenshots und Technologien kommen aus dem gemeinsamen Katalog.
  projects: ProjectInfo[] = PORTFOLIO_PROJECTS
    .filter((project) => project.featured)
    .map((project) => ({
      id: project.id,
      tabLabel: `PROJECTS.TAB.${project.key}`,
      duration: project.durationKey ?? '',
      aboutText: `PROJECTS.ABOUT_TEXT.${project.key}`,
      workProcessText: `PROJECTS.WORK_PROCESS_TEXT.${project.key}`,
      learnText: `PROJECTS.LEARN_TEXT.${project.key}`,
      technologies: [...project.technologyIcons],
      techNames: project.technologyTextKey ?? '',
      imageUrl: project.imageUrl ?? '',
      liveUrl: project.liveUrl ?? '',
      githubUrl: project.githubUrl,
    }));

  activeTab = this.projects[0].id;

  getActiveIndex(): number {
    return this.projects.findIndex((p) => p.id === this.activeTab);
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }
}
