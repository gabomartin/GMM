import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DEFAULT_LANGUAGE, Language } from '../../models';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'gabo-martin-language';
  private readonly browser = isPlatformBrowser(this.platformId);

  readonly language = signal<Language>(this.readInitialLanguage());
  readonly alternateLanguage = computed<Language>(() => (this.language() === 'en' ? 'es' : 'en'));

  setLanguage(language: Language): void {
    this.language.set(language);

    if (this.browser) {
      localStorage.setItem(this.storageKey, language);
    }
  }

  toggleLanguage(): void {
    this.setLanguage(this.alternateLanguage());
  }

  private readInitialLanguage(): Language {
    if (!this.browser) {
      return DEFAULT_LANGUAGE;
    }

    const storedLanguage = localStorage.getItem(this.storageKey);
    return storedLanguage === 'es' || storedLanguage === 'en' ? storedLanguage : DEFAULT_LANGUAGE;
  }
}
