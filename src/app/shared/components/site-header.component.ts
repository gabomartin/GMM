import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ResolvedNavigationItem } from '../../core/services/content.types';
import { LanguageToggleComponent } from './language-toggle.component';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, LanguageToggleComponent],
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  readonly navigationItems = input.required<readonly ResolvedNavigationItem[]>();
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
