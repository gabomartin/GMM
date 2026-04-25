import { Injectable } from '@angular/core';
import { Language, LocalizedPages, LocalizedValue, getLocalizedValue } from '../../models';
import { pagesData } from '../../content';
import { ResolvedPage } from './content.types';

@Injectable({ providedIn: 'root' })
export class PageContentService {
  getPage(pageId: keyof LocalizedPages, language: Language): ResolvedPage {
    const page = pagesData[pageId];

    return {
      id: page.id,
      slug: page.slug,
      seo: {
        title: this.resolve(page.seo.title, language),
        description: this.resolve(page.seo.description, language),
      },
      hero: {
        eyebrow: this.resolve(page.hero.eyebrow, language),
        title: this.resolve(page.hero.title, language),
        summary: this.resolve(page.hero.summary, language),
        ctas: page.hero.ctas.map((cta) => ({
          label: this.resolve(cta.label, language),
          href: cta.href,
          external: cta.external,
        })),
      },
      sections: page.sections.map((section) => ({
        id: section.id,
        eyebrow: section.eyebrow ? this.resolve(section.eyebrow, language) : undefined,
        title: this.resolve(section.title, language),
        description: section.description ? this.resolve(section.description, language) : undefined,
        bullets: section.bullets?.map((bullet) => this.resolve(bullet, language)),
        ctas: section.ctas?.map((cta) => ({
          label: this.resolve(cta.label, language),
          href: cta.href,
          external: cta.external,
        })),
      })),
    };
  }

  private resolve<T>(value: LocalizedValue<T>, language: Language): T {
    return getLocalizedValue(value, language);
  }
}
