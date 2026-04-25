import { Component, input, linkedSignal } from '@angular/core';
import { ResolvedMusicReleaseItem } from '../../core/services/content.types';
import { MusicReleaseEmbedComponent } from './music-release-embed.component';

@Component({
  selector: 'app-music-catalog-group',
  imports: [MusicReleaseEmbedComponent],
  templateUrl: './music-catalog-group.component.html',
})
export class MusicCatalogGroupComponent {
  readonly items = input.required<readonly ResolvedMusicReleaseItem[]>();

  protected readonly expandedItemId = linkedSignal<string | null>(() => this.items().at(0)?.id ?? null);

  protected toggleItem(itemId: string): void {
    this.expandedItemId.update((currentItemId) => currentItemId === itemId ? null : itemId);
  }
}
