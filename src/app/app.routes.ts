import { Routes } from '@angular/router';
import { NotFound } from './features/not-found/not-found';
import { Home } from './features/home/home.component';
import { Imprint } from './features/imprint/imprint';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'projects',
    title: 'Projects | Julia Keller',
    loadComponent: () =>
      import('./features/projects-page/projects-page').then((m) => m.ProjectsPage),
  },
  { path: 'imprint', component: Imprint },
  { path: '**', component: NotFound },
];
