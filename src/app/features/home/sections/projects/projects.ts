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
      tabLabel: 'El Pollo Loco',
      duration: '2 weeks',
      aboutText:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe defeat El Pollo Loco! Throw salsa bottles or jump on small chickens. Collect all the coins!',
      workProcessText:
        'Focused on modular class structures and inheritance. Ensured clean code via descriptive naming, JSDoc, and a strict logic-UI separation.',
      learnText:
        'Deepened my Vanilla JavaScript skills with a focus on Object-Oriented Programming (OOP). Mastered complex collision logic, game physics, and fluid animations without frameworks.',
      technologies: [
        '/icons/skill-icons/html.svg',
        '/icons/skill-icons/css.svg',
        '/icons/skill-icons/javascript.svg',
      ],
      imageUrl: '/imgs/el-pollo-loco.webp',
      liveUrl: 'https://juliakeller.developerakademie.net/el-pollo-loco/index.html',
      githubUrl: 'https://github.com/JuliaKeller13/el-pollo-loco.git',
    },
    {
      id: 'pokedex',
      tabLabel: 'Pokedex',
      duration: '4 weeks',
      aboutText:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe defeat El Pollo Loco! Throw salsa bottles or jump on small chickens. Collect all the coins!',
      workProcessText:
        'Focused on modular class structures and inheritance. Ensured clean code via descriptive naming, JSDoc, and a strict logic-UI separation.',
      learnText:
        'Deepened my Vanilla JavaScript skills with a focus on Object-Oriented Programming (OOP). Mastered complex collision logic, game physics, and fluid animations without frameworks.',
      technologies: [
        '/icons/skill-icons/html.svg',
        '/icons/skill-icons/css.svg',
        '/icons/skill-icons/javascript.svg',
        '/icons/skill-icons/api.svg',
      ],
      imageUrl: '/imgs/pokedex.webp',
      liveUrl: 'https://juliakeller.developerakademie.net/pokedex/index.html',
      githubUrl: 'https://github.com/JuliaKeller13/pokedex.git',
    },
    {
      id: 'join',
      tabLabel: 'Join',
      duration: '2 months',
      aboutText:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      workProcessText:
        'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
      learnText:
        'How many people were in the team and what was your role? Describe your tasks  in 1-2 sentences. It is nice to mention a good teamwork and cooperation.',
      technologies: [
        '/icons/skill-icons/html.svg',
        '/icons/skill-icons/css.svg',
        '/icons/skill-icons/javascript.svg',
        '/icons/skill-icons/angular.svg',

      ],
      imageUrl: '/imgs/join.png',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'ongoing',
      tabLabel: 'Ongoing Project',
      duration: 'In progress',
      aboutText: 'Currently working on...',
      workProcessText: '...',
      learnText: '...',
      technologies: [],
      imageUrl: '',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  activeTab = this.projects[0].id;

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
