import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialIcons } from '../../shared/components/social-icons/social-icons';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, SocialIcons],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
