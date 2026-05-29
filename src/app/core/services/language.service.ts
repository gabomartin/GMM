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
      try {
        localStorage.setItem(this.storageKey, language);
      } catch {
        // Browsers can block storage in private or restricted contexts.
      }
    }
  }

  toggleLanguage(): void {
    this.setLanguage(this.alternateLanguage());
  }

  private readInitialLanguage(): Language {
    if (!this.browser) {
      return DEFAULT_LANGUAGE;
    }

    return this.readStoredLanguage() ?? this.inferBrowserLanguage();
  }

  private readStoredLanguage(): Language | null {
    try {
      const storedLanguage = localStorage.getItem(this.storageKey);
      return this.toSupportedLanguage(storedLanguage);
    } catch {
      return null;
    }
  }

  private inferBrowserLanguage(): Language {
    const preferredLocales = [
      ...(globalThis.navigator?.languages ?? []),
      globalThis.navigator?.language,
    ];

    for (const locale of preferredLocales) {
      const language = this.toSupportedLanguage(locale);
      if (language) {
        return language;
      }
    }

    return DEFAULT_LANGUAGE;
  }

  private toSupportedLanguage(locale: string | null | undefined): Language | null {
    const language = locale?.toLowerCase().split(/[-_]/)[0];
    return language === 'es' || language === 'en' ? language : null;
  }
}
