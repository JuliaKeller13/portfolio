import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

const SITE_URL = 'https://juliakeller-dev.de';

/**
 * Sets canonical URL, meta description and robots tag per route.
 * Route data: { description?: string; noindex?: boolean }
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  init() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.update());
  }

  private update() {
    let route = this.route.snapshot;
    while (route.firstChild) route = route.firstChild;
    const data = route.data;

    const path = this.router.url.split(/[?#]/)[0];
    const url = SITE_URL + (path === '/' ? '/' : path);

    this.setCanonical(url);
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ name: 'robots', content: data['noindex'] ? 'noindex, follow' : 'index, follow' });

    if (data['description']) {
      this.meta.updateTag({ name: 'description', content: data['description'] });
      this.meta.updateTag({ property: 'og:description', content: data['description'] });
    }
  }

  private setCanonical(url: string) {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = url;
  }
}
