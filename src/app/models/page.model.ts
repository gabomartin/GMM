import { Language } from './language.model';

export const PAGE_IDS = ['home', 'bio', 'music', 'dj-sets', 'gallery', 'services', 'contact'] as const;

export type PageId = (typeof PAGE_IDS)[number];

export interface LocalizedValue<T> {
  en: T;
  es: T;
}

export interface PageSeo {
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
}

export interface HeroCta {
  label: LocalizedValue<string>;
  href: string;
  external?: boolean;
}

export interface HeroContent {
  eyebrow: LocalizedValue<string>;
  title: LocalizedValue<string>;
  summary: LocalizedValue<string>;
  ctas: readonly HeroCta[];
}

export interface SectionContent {
  id: string;
  eyebrow?: LocalizedValue<string>;
  title: LocalizedValue<string>;
  description?: LocalizedValue<string>;
  bullets?: readonly LocalizedValue<string>[];
  ctas?: readonly HeroCta[];
}

export interface PageContent {
  id: PageId;
  slug: string;
  seo: PageSeo;
  hero: HeroContent;
  sections: readonly SectionContent[];
}

export type LocalizedPages = Record<'home' | 'bio' | 'music' | 'djSets' | 'gallery' | 'services' | 'contact', PageContent>;

export const getLocalizedValue = <T>(value: LocalizedValue<T>, language: Language): T => value[language];
