export type ProjectCategory = 'frontend' | 'backend';

export interface PortfolioProject {
  readonly id: string;
  readonly name: string;
  readonly key: string;
  readonly category: ProjectCategory;
  readonly featured?: boolean;
  readonly durationKey?: string;
  readonly technologyIcons: readonly string[];
  readonly technologyTextKey?: string;
  readonly stack: readonly string[];
  readonly imageUrl?: string;
  readonly liveUrl?: string;
  readonly githubUrl: string;
}

export const PORTFOLIO_PROJECTS: readonly PortfolioProject[] = [
  {
    id: 'DABubble', name: 'DABubble', key: 'DABUBBLE', category: 'frontend', featured: true,
    durationKey: 'PROJECTS.DURATION.4W',
    technologyIcons: ['skill-icons/html.svg', 'skill-icons/css.svg', 'skill-icons/javascript.svg', 'skill-icons/angular.svg'],
    technologyTextKey: 'PROJECTS.TECHNAMES.ANGULAR',
    stack: ['Angular', 'TypeScript', 'Supabase', 'SCSS'],
    imageUrl: '/imgs/dabubble.png',
    liveUrl: 'https://dabubble.juliakeller-dev.de/',
    githubUrl: 'https://github.com/JuliaKeller13/DABubble',
  },
  {
    id: 'join', name: 'Join', key: 'JOIN', category: 'frontend', featured: true,
    durationKey: 'PROJECTS.DURATION.5W',
    technologyIcons: ['skill-icons/html.svg', 'skill-icons/css.svg', 'skill-icons/javascript.svg', 'skill-icons/angular.svg'],
    technologyTextKey: 'PROJECTS.TECHNAMES.ANGULAR',
    stack: ['Angular', 'TypeScript', 'Supabase'],
    imageUrl: '/imgs/join.png',
    liveUrl: 'https://join.juliakeller-dev.de/login',
    githubUrl: 'https://github.com/JuliaKeller13/Join',
  },
  {
    id: 'coderr', name: 'Coderr', key: 'CODERR', category: 'backend', featured: true,
    technologyIcons: ['skill-icons/python.svg', 'skill-icons/django.svg', 'skill-icons/DRF.svg', 'skill-icons/api.svg'],
    technologyTextKey: 'PROJECTS.TECHNAMES.CODERR',
    stack: ['Python', 'Django', 'DRF', 'REST API'],
    imageUrl: '/imgs/coderr.png',
    liveUrl: 'https://coderr.juliakeller-dev.de/',
    githubUrl: 'https://github.com/JuliaKeller13/coderr_backend',
  },
  {
    id: 'quizly', name: 'Quizly', key: 'QUIZLY', category: 'backend', featured: true,
    technologyIcons: ['skill-icons/python.svg', 'skill-icons/django.svg', 'skill-icons/DRF.svg', 'skill-icons/ai.png'],
    technologyTextKey: 'PROJECTS.TECHNAMES.QUIZLY',
    stack: ['Django', 'Whisper', 'Gemini', 'FFmpeg'],
    imageUrl: '/imgs/quizly.png',
    githubUrl: 'https://github.com/JuliaKeller13/quizly-backend',
  },
  {
    id: 'videoflix', name: 'Videoflix', key: 'VIDEOFLIX', category: 'backend',
    technologyIcons: ['skill-icons/python.svg', 'skill-icons/django.svg', 'skill-icons/DRF.svg', 'skill-icons/postgesql.svg', 'skill-icons/redis.svg', 'skill-icons/docker.svg'],
    technologyTextKey: 'PROJECTS.TECHNAMES.VIDEOFLIX',
    stack: ['Django', 'PostgreSQL', 'Redis', 'Docker', 'FFmpeg'],
    imageUrl: '/imgs/videoflix.png',
    githubUrl: 'https://github.com/JuliaKeller13/videoflix_backend',
  },
  {
    id: 'kanmind', name: 'KanMind', key: 'KANMIND', category: 'backend',
    technologyIcons: ['skill-icons/python.svg', 'skill-icons/django.svg', 'skill-icons/DRF.svg'],
    technologyTextKey: 'PROJECTS.TECHNAMES.KANMIND',
    stack: ['Python', 'Django', 'DRF', 'Permissions'],
    imageUrl: '/imgs/kanmind.png',
    githubUrl: 'https://github.com/JuliaKeller13/Kanmind_backend',
  },
  {
    id: 'elPolloLoco', name: 'El Pollo Loco', key: 'EL_POLLO_LOCO', category: 'frontend',
    durationKey: 'PROJECTS.DURATION.3W',
    technologyIcons: ['skill-icons/html.svg', 'skill-icons/css.svg', 'skill-icons/javascript.svg'],
    technologyTextKey: 'PROJECTS.TECHNAMES.BASIC',
    stack: ['HTML5 Canvas', 'JavaScript', 'OOP'],
    imageUrl: '/imgs/el-pollo-loco.webp',
    liveUrl: 'https://elpolloloco.juliakeller-dev.de/',
    githubUrl: 'https://github.com/JuliaKeller13/el-pollo-loco',
  },
  {
    id: 'pokedex', name: 'Pokédex', key: 'POKEDEX', category: 'frontend',
    durationKey: 'PROJECTS.DURATION.1W',
    technologyIcons: ['skill-icons/html.svg', 'skill-icons/css.svg', 'skill-icons/javascript.svg', 'skill-icons/api.svg'],
    technologyTextKey: 'PROJECTS.TECHNAMES.API',
    stack: ['JavaScript', 'PokéAPI', 'CSS'],
    imageUrl: '/imgs/pokedex.webp',
    liveUrl: 'https://pokedex.juliakeller-dev.de/',
    githubUrl: 'https://github.com/JuliaKeller13/pokedex',
  },
];
