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
      id: 'elPolloLoco',
      tabLabel: 'PROJECTS.TAB.EL_POLLO_LOCO',
      duration: 'PROJECTS.DURATION.2W',
      aboutText: 'PROJECTS.ABOUT_TEXT.EL_POLLO_LOCO',
      workProcessText: 'PROJECTS.WORK_PROCESS_TEXT.EL_POLLO_LOCO',
      learnText: 'PROJECTS.LEARN_TEXT.EL_POLLO_LOCO',
      technologies: [
        '/icons/skill-icons/html.svg',
        '/icons/skill-icons/css.svg',
        '/icons/skill-icons/javascript.svg',
      ],
      techNames: 'PROJECTS.TECHNAMES.BASIC',
      imageUrl: '/imgs/el-pollo-loco.webp',
      liveUrl: 'https://juliakeller.developerakademie.net/el-pollo-loco/index.html',
      githubUrl: 'https://github.com/JuliaKeller13/el-pollo-loco.git',
    },
    {
      id: 'pokedex',
      tabLabel: 'PROJECTS.TAB.POKEDEX',
      duration: 'PROJECTS.DURATION.4W',
      aboutText: 'PROJECTS.ABOUT_TEXT.POKEDEX',
      workProcessText: 'PROJECTS.WORK_PROCESS_TEXT.POKEDEX',
      learnText: 'PROJECTS.LEARN_TEXT.POKEDEX',
      technologies: [
        '/icons/skill-icons/html.svg',
        '/icons/skill-icons/css.svg',
        '/icons/skill-icons/javascript.svg',
        '/icons/skill-icons/api.svg',
      ],
      techNames: 'PROJECTS.TECHNAMES.API',
      imageUrl: '/imgs/pokedex.webp',
      liveUrl: 'https://juliakeller.developerakademie.net/pokedex/index.html',
      githubUrl: 'https://github.com/JuliaKeller13/pokedex.git',
    },
    {
      id: 'join',
      tabLabel: 'PROJECTS.TAB.JOIN',
      duration: 'PROJECTS.DURATION.2M',
      aboutText: 'PROJECTS.ABOUT_TEXT.JOIN',
      workProcessText: 'PROJECTS.WORK_PROCESS_TEXT.JOIN',
      learnText: 'PROJECTS.LEARN_TEXT.JOIN',
      technologies: [
        '/icons/skill-icons/html.svg',
        '/icons/skill-icons/css.svg',
        '/icons/skill-icons/javascript.svg',
        '/icons/skill-icons/angular.svg',
      ],
      techNames: 'PROJECTS.TECHNAMES.ANGULAR',
      imageUrl: '/imgs/join.png',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'ongoing',
      tabLabel: 'PROJECTS.TAB.ONGOING',
      duration: 'PROJECTS.DURATION.IN_PROGRESS',
      aboutText: 'PROJECTS.ABOUT_TEXT.ONGOING',
      workProcessText: '',
      learnText: '',
      technologies: [
        '/icons/skill-icons/html.svg',
        '/icons/skill-icons/css.svg',
        '/icons/skill-icons/javascript.svg',
        '/icons/skill-icons/angular.svg',
      ],
      techNames: 'PROJECTS.TECHNAMES.ANGULAR',
      imageUrl: '',
      liveUrl: '#',
      githubUrl: '#',
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
