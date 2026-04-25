import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { MediaContentService } from '../../core/services/media-content.service';
import { PageContentService } from '../../core/services/page-content.service';
import { HeroComponent } from '../../shared/components/hero.component';
import { MediaEmbedComponent } from '../../shared/components/media-embed.component';
import { MusicCatalogGroupComponent } from '../../shared/components/music-catalog-group.component';

type MusicCatalogTab = 'releases' | 'remixes' | 'singles';

@Component({
  selector: 'app-music-page',
  imports: [HeroComponent, MediaEmbedComponent, MusicCatalogGroupComponent],
  templateUrl: './music-page.component.html',
})
export class MusicPageComponent {
  private readonly languageService = inject(LanguageService);
  private readonly pageContentService = inject(PageContentService);
  private readonly mediaContentService = inject(MediaContentService);

  protected readonly language = this.languageService.language;
  protected readonly page = computed(() => this.pageContentService.getPage('music', this.language()));
  protected readonly embeds = computed(() =>
    this.mediaContentService.getEmbeds(this.language(), 'spotify'),
  );
  protected readonly featuredEmbed = computed(() => this.embeds().at(0));
  protected readonly releases = computed(() => this.mediaContentService.getMusicReleases(this.language()));
  protected readonly remixes = computed(() => this.mediaContentService.getMusicRemixes(this.language()));
  protected readonly singles = computed(() => this.mediaContentService.getMusicSingles(this.language()));
  protected readonly activeCatalogTab = signal<MusicCatalogTab>('releases');
  protected readonly catalogTabs = computed(() => [
    {
      id: 'releases' as const,
      label: this.language() === 'en' ? 'Releases' : 'Lanzamientos',
      items: this.releases(),
    },
    {
      id: 'remixes' as const,
      label: 'Remixes',
      items: this.remixes(),
    },
    {
      id: 'singles' as const,
      label: 'Singles',
      items: this.singles(),
    },
  ]);
  protected readonly activeCatalog = computed(
    () => this.catalogTabs().find((tab) => tab.id === this.activeCatalogTab()) ?? this.catalogTabs()[0],
  );

  protected setCatalogTab(tab: MusicCatalogTab): void {
    this.activeCatalogTab.set(tab);
  }
}
