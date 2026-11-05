import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heading } from '../../../../shared/components/heading/heading';
import { Section } from '../../../../shared/components/section/section';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectCard } from '../../../../shared/components/project-card/project-card';

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
  projects: ProjectInfo[] = [
    {
      id: 'DABubble',
      tabLabel: 'PROJECTS.TAB.DABUBBLE',
      duration: 'PROJECTS.DURATION.4W',
      aboutText: 'PROJECTS.ABOUT_TEXT.DABUBBLE',
      workProcessText: 'PROJECTS.WORK_PROCESS_TEXT.DABUBBLE',
      learnText: 'PROJECTS.LEARN_TEXT.DABUBBLE',
      technologies: [
        'skill-icons/html.svg',
        'skill-icons/css.svg',
        'skill-icons/javascript.svg',
        'skill-icons/angular.svg',
      ],
      techNames: 'PROJECTS.TECHNAMES.ANGULAR',
      imageUrl: '/imgs/dabubble.png',
      liveUrl: 'https://dabubble.juliakeller-dev.de/',
      githubUrl: 'https://github.com/JuliaKeller13/DABubble.git',
    },
    {
      id: 'join',
      tabLabel: 'PROJECTS.TAB.JOIN',
      duration: 'PROJECTS.DURATION.5W',
      aboutText: 'PROJECTS.ABOUT_TEXT.JOIN',
      workProcessText: 'PROJECTS.WORK_PROCESS_TEXT.JOIN',
      learnText: 'PROJECTS.LEARN_TEXT.JOIN',
      technologies: [
        'skill-icons/html.svg',
        'skill-icons/css.svg',
        'skill-icons/javascript.svg',
        'skill-icons/angular.svg',
      ],
      techNames: 'PROJECTS.TECHNAMES.ANGULAR',
      imageUrl: '/imgs/join.png',
      liveUrl: 'https://join.juliakeller-dev.de/login',
      githubUrl: 'https://github.com/JuliaKeller13/Join.git',
    },
    {
      id: 'coderr',
      tabLabel: 'PROJECTS.TAB.CODERR',
      duration: '',
      aboutText: 'PROJECTS.ABOUT_TEXT.CODERR',
      workProcessText: 'PROJECTS.WORK_PROCESS_TEXT.CODERR',
      learnText: 'PROJECTS.LEARN_TEXT.CODERR',
      technologies: [
        'skill-icons/python.svg',
        'skill-icons/django.svg',
        'skill-icons/DRF.svg',
        'skill-icons/api.svg',
      ],
      techNames: 'PROJECTS.TECHNAMES.CODERR',
      imageUrl: '/imgs/coderr.png',
      liveUrl: 'https://coderr.juliakeller-dev.de/',
      githubUrl: 'https://github.com/JuliaKeller13/coderr_backend',
    },
    {
      id: 'quizly',
      tabLabel: 'PROJECTS.TAB.QUIZLY',
      duration: '',
      aboutText: 'PROJECTS.ABOUT_TEXT.QUIZLY',
      workProcessText: 'PROJECTS.WORK_PROCESS_TEXT.QUIZLY',
      learnText: 'PROJECTS.LEARN_TEXT.QUIZLY',
      technologies: [
        'skill-icons/python.svg',
        'skill-icons/django.svg',
        'skill-icons/DRF.svg',
        'skill-icons/ai.png',
      ],
      techNames: 'PROJECTS.TECHNAMES.QUIZLY',
      imageUrl: '/imgs/quizly.png',
      liveUrl: '',
      githubUrl: 'https://github.com/JuliaKeller13/quizly-backend',
    },
  ];

  activeTab = this.projects[0].id;

  getActiveIndex(): number {
    return this.projects.findIndex((p) => p.id === this.activeTab);
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
