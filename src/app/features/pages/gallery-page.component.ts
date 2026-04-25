import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { MediaContentService } from '../../core/services/media-content.service';
import { PageContentService } from '../../core/services/page-content.service';
import { GalleryGridComponent } from '../../shared/components/gallery-grid.component';
import { HeroComponent } from '../../shared/components/hero.component';

@Component({
  selector: 'app-gallery-page',
  imports: [GalleryGridComponent, HeroComponent],
  templateUrl: './gallery-page.component.html',
})
export class GalleryPageComponent {
  private readonly languageService = inject(LanguageService);
  private readonly pageContentService = inject(PageContentService);
  private readonly mediaContentService = inject(MediaContentService);

  protected readonly language = this.languageService.language;
  protected readonly page = computed(() => this.pageContentService.getPage('gallery', this.language()));
  protected readonly galleryItems = computed(() => this.mediaContentService.getGalleryItems());
}
