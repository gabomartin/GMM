import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { PageContentService } from '../../core/services/page-content.service';
import { HeroComponent } from '../../shared/components/hero.component';
import { SectionBlockComponent } from '../../shared/components/section-block.component';

@Component({
  selector: 'app-bio-page',
  imports: [HeroComponent, SectionBlockComponent],
  templateUrl: './bio-page.component.html',
})
export class BioPageComponent {
  private readonly languageService = inject(LanguageService);
  private readonly pageContentService = inject(PageContentService);

  protected readonly language = this.languageService.language;
  protected readonly page = computed(() => this.pageContentService.getPage('bio', this.language()));
}
