import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ResolvedEmbedItem } from '../../core/services/content.types';

@Component({
  selector: 'app-media-embed',
  templateUrl: './media-embed.component.html',
})
export class MediaEmbedComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly embed = input.required<ResolvedEmbedItem>();
  readonly spotlight = input(false);

  protected readonly articleClass = computed(() =>
    this.spotlight()
      ? 'reveal-delay flex min-h-[54vh] items-center py-5 sm:min-h-[62vh] lg:min-h-[66vh]'
      : 'reveal-delay media-lift',
  );
  protected readonly frameClass = computed(() =>
    this.spotlight()
      ? 'w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-2xl shadow-black/50'
      : this.embed().platform === 'soundcloud'
        ? 'overflow-hidden bg-transparent'
        : this.embed().platform === 'spotify'
          ? 'spotify-frame bg-transparent'
          : 'overflow-hidden rounded-[1.75rem] border border-white/10 bg-black',
  );
  protected readonly iframeClass = computed(() =>
    this.spotlight()
      ? 'block aspect-video w-full'
      : this.embed().platform === 'spotify'
        ? 'spotify-iframe block border-0 bg-transparent'
        : this.embed().platform === 'soundcloud'
          ? 'block h-[450px] w-full'
          : 'block aspect-video w-full',
  );
  protected readonly safeUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.embed().embedUrl;
    return url && this.isAllowedEmbedUrl(url)
      ? this.sanitizer.bypassSecurityTrustResourceUrl(url)
      : null;
  });

  private isAllowedEmbedUrl(url: string): boolean {
    try {
      const parsedUrl = new URL(url);
      const allowedHosts = new Set([
        'open.spotify.com',
        'www.youtube.com',
        'youtube.com',
        'www.youtube-nocookie.com',
        'w.soundcloud.com',
        'www.mixcloud.com',
      ]);

      return parsedUrl.protocol === 'https:' && allowedHosts.has(parsedUrl.hostname);
    } catch {
      return false;
    }
  }
}
