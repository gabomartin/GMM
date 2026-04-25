import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { MediaContentService } from '../../core/services/media-content.service';
import { NavigationContentService } from '../../core/services/navigation-content.service';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.component.html',
})
export class SiteFooterComponent {
  private readonly languageService = inject(LanguageService);
  private readonly navigationContentService = inject(NavigationContentService);
  private readonly mediaContentService = inject(MediaContentService);

  protected readonly language = this.languageService.language;
  protected readonly navigationItems = computed(() =>
    this.navigationContentService.getNavigation(this.language()),
  );
  protected readonly socialLinks = computed(() =>
    this.mediaContentService.getSocialLinks(this.language()).slice(0, 4),
  );
}
