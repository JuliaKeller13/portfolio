import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialIcons } from '../../shared/components/social-icons/social-icons';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, SocialIcons, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
