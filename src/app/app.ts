import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { LocalizedPages } from './models';
import { LanguageService } from './core/services/language.service';
import { NavigationContentService } from './core/services/navigation-content.service';
import { PageContentService } from './core/services/page-content.service';
import { SeoService } from './core/services/seo.service';
import { SiteFooterComponent } from './shared/components/site-footer.component';
import { SiteHeaderComponent } from './shared/components/site-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly languageService = inject(LanguageService);
  private readonly navigationContentService = inject(NavigationContentService);
  private readonly pageContentService = inject(PageContentService);
  private readonly seoService = inject(SeoService);

  protected readonly language = this.languageService.language;
  protected readonly navigationItems = computed(() =>
    this.navigationContentService.getNavigation(this.language()),
  );
  private readonly activePageId = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith(null),
      map(() => this.getPageId(this.route)),
    ),
    { initialValue: this.getPageId(this.route) },
  );

  constructor() {
    effect(() => {
      const pageId = this.activePageId();
      const language = this.language();

      if (!pageId) {
        this.seoService.updatePage('Gabo Martin', 'DJ portfolio and booking site.', language);
        return;
      }

      const page = this.pageContentService.getPage(pageId, language);
      this.seoService.updatePage(page.seo.title, page.seo.description, language);
    });
  }

  private getPageId(route: ActivatedRoute): keyof LocalizedPages | null {
    let activeRoute: ActivatedRoute | null = route;

    while (activeRoute?.firstChild) {
      activeRoute = activeRoute.firstChild;
    }

    const pageId = activeRoute?.snapshot.data['pageId'];
    return pageId ?? null;
  }
}
