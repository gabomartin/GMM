import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { MediaContentService } from '../../core/services/media-content.service';
import { PageContentService } from '../../core/services/page-content.service';
import { HeroComponent } from '../../shared/components/hero.component';
import { MediaEmbedComponent } from '../../shared/components/media-embed.component';

@Component({
  selector: 'app-dj-sets-page',
  imports: [HeroComponent, MediaEmbedComponent],
  templateUrl: './dj-sets-page.component.html',
})
export class DjSetsPageComponent {
  private readonly languageService = inject(LanguageService);
  private readonly pageContentService = inject(PageContentService);
  private readonly mediaContentService = inject(MediaContentService);

  protected readonly language = this.languageService.language;
  protected readonly page = computed(() => this.pageContentService.getPage('djSets', this.language()));
  protected readonly embeds = computed(() =>
    this.mediaContentService.getEmbeds(this.language(), 'soundcloud'),
  );
  protected readonly setsEmbed = computed(() =>
    this.embeds().find((embed) => embed.id === 'soundcloud-dj-sets'),
  );
  protected readonly liveVideoEmbed = computed(() =>
    this.mediaContentService.getEmbeds(this.language(), 'youtube').at(0),
  );
}
