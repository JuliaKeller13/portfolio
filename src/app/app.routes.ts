import { Routes } from '@angular/router';
import { NotFound } from './features/not-found/not-found';
import { Home } from './features/home/home.component';
import { Imprint } from './features/imprint/imprint';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Julia Keller | Fullstack Entwicklerin aus Iserlohn',
    data: {
      description:
        'Julia Keller | Fullstack Entwicklerin (Developer) aus Iserlohn. Webentwicklung mit Angular, TypeScript, Python und Django: Portfolio mit Projekten, Fähigkeiten und Kontakt.',
    },
  },
  {
    path: 'projects',
    title: 'Projekte Julia Keller | Fullstack Entwicklerin',
    data: {
      description:
        'Alle Projekte von Julia Keller, Fullstack Entwicklerin: Frontend mit Angular und JavaScript, Backend und REST APIs mit Python und Django.',
    },
    loadComponent: () =>
      import('./features/projects-page/projects-page').then((m) => m.ProjectsPage),
  },
  {
    path: 'imprint',
    component: Imprint,
    title: 'Impressum & Datenschutz | Julia Keller',
    data: { description: 'Impressum und Datenschutzerklärung von Julia Keller, Fullstack Entwicklerin aus Iserlohn.' },
  },
  {
    path: '**',
    component: NotFound,
    title: 'Seite nicht gefunden | Julia Keller',
    data: { noindex: true },
  },
];
