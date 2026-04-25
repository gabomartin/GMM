import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ResolvedMusicReleaseItem } from '../../core/services/content.types';

@Component({
  selector: 'app-music-release-embed',
  templateUrl: './music-release-embed.component.html',
})
export class MusicReleaseEmbedComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly item = input.required<ResolvedMusicReleaseItem>();
  protected readonly embedHeight = computed(() => this.beatportEmbedType() === 'track' ? 162 : 362);
  protected readonly safeUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.item().embedUrl;
    return url && this.isAllowedBeatportEmbed(url)
      ? this.sanitizer.bypassSecurityTrustResourceUrl(url)
      : null;
  });

  private beatportEmbedType(): 'release' | 'track' {
    try {
      const parsedUrl = new URL(this.item().embedUrl);
      return parsedUrl.searchParams.get('type') === 'track' ? 'track' : 'release';
    } catch {
      return 'release';
    }
  }

  private isAllowedBeatportEmbed(url: string): boolean {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.protocol === 'https:' && parsedUrl.hostname === 'embed.beatport.com';
    } catch {
      return false;
    }
  }
}
