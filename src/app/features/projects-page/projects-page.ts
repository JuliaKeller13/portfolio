import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Navbar } from '../../layout/navbar/navbar';
import { ProjectPreviewCard } from '../../shared/components/project-preview-card/project-preview-card';
import { PORTFOLIO_PROJECTS, ProjectCategory } from '../../shared/data/portfolio-projects';

type ProjectFilter = 'all' | ProjectCategory;

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [Navbar, RouterLink, TranslatePipe, ProjectPreviewCard],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPage {
  readonly filters: readonly { value: ProjectFilter; label: string }[] = [
    { value: 'all', label: 'PROJECT_CATALOG.ALL' },
    { value: 'frontend', label: 'PROJECT_CATALOG.FRONTEND' },
    { value: 'backend', label: 'PROJECT_CATALOG.BACKEND' },
  ];

  readonly selectedFilter = signal<ProjectFilter>('all');
  readonly filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    return filter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === filter);
  });
}
