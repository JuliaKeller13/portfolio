import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioProject } from '../../data/portfolio-projects';

@Component({
  selector: 'app-project-preview-card',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './project-preview-card.html',
  styleUrl: './project-preview-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPreviewCard {
  readonly project = input.required<PortfolioProject>();
}
