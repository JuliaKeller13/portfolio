import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class KeyboardService {
  private listener: any;

  constructor() {
    if (typeof window !== 'undefined') {
      this.listener = this.handleGlobalKeydown.bind(this);
      window.addEventListener('keydown', this.listener, true);
    }
  }

  private handleGlobalKeydown(event: KeyboardEvent) {
    const active = document.activeElement as HTMLElement | null;
    if (!active) return;

    if (event.key === 'Enter') {
      if (
        active.tagName === 'BUTTON' ||
        active.tagName === 'A' ||
        active.getAttribute('role') === 'button' ||
        active.getAttribute('role') === 'checkbox' ||
        (active.tagName === 'INPUT' && (active as HTMLInputElement).type === 'checkbox')
      ) {
        event.preventDefault();
        active.click();
      }
    }

    if (["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(event.key)) {
      const focusables = Array.from(document.querySelectorAll<HTMLElement>(
        'button, [role="button"], [tabindex]:not([tabindex="-1"]), a, input[type="button"], input[type="submit"], input[type="checkbox"]:not([tabindex="-1"])'
      )).filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);
      const idx = focusables.indexOf(active);
      if (idx !== -1) {
        let nextIdx = idx;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          nextIdx = (idx + 1) % focusables.length;
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          nextIdx = (idx - 1 + focusables.length) % focusables.length;
        }
        focusables[nextIdx]?.focus();
        event.preventDefault();
      }
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined' && this.listener) {
      window.removeEventListener('keydown', this.listener, true);
    }
  }
}
