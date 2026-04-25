import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { MediaContentService } from '../../core/services/media-content.service';
import { HomeIntroComponent } from '../../shared/components/home-intro.component';
import { MediaEmbedComponent } from '../../shared/components/media-embed.component';

@Component({
  selector: 'app-home-page',
  imports: [HomeIntroComponent, MediaEmbedComponent, RouterLink],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  private readonly introStorageKey = 'gabo-home-intro-seen';
  private readonly languageService = inject(LanguageService);
  private readonly mediaContentService = inject(MediaContentService);

  protected readonly language = this.languageService.language;
  protected readonly showIntro = signal(false);
  protected readonly featuredLiveSet = computed(() =>
    this.mediaContentService.getEmbeds(this.language(), 'youtube').at(0),
  );
  protected readonly homeActions = computed(() => [
    { label: this.language() === 'en' ? 'Music' : 'Música', path: '/music' },
    { label: this.language() === 'en' ? 'DJ Sets' : 'Sesiones', path: '/dj-sets' },
    { label: 'Mastering', path: '/services' },
    { label: this.language() === 'en' ? 'Contact' : 'Contacto', path: '/contact' },
  ]);

  ngOnInit(): void {
    this.showIntro.set(this.shouldShowIntro());
  }

  protected completeIntro(): void {
    this.showIntro.set(false);
    this.markIntroSeen();
  }

  private shouldShowIntro(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }

    try {
      return window.sessionStorage.getItem(this.introStorageKey) !== 'true';
    } catch {
      return false;
    }
  }

  private markIntroSeen(): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.sessionStorage.setItem(this.introStorageKey, 'true');
    } catch {
      // Session storage can be unavailable in private or locked-down browser contexts.
    }
  }
}
