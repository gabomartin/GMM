import { EmbedItem, MusicReleaseItem, PageId, SocialLink } from '../../models';

export interface ResolvedNavigationItem {
  id: PageId;
  path: string;
  label: string;
}

export interface ResolvedHeroCta {
  label: string;
  href: string;
  external?: boolean;
}

export interface ResolvedSection {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  bullets?: readonly string[];
  ctas?: readonly ResolvedHeroCta[];
}

export interface ResolvedPage {
  id: PageId;
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    ctas: readonly ResolvedHeroCta[];
  };
  sections: readonly ResolvedSection[];
}

export interface ResolvedEmbedItem {
  id: string;
  platform: EmbedItem['platform'];
  title: string;
  description: string;
  url: string;
  embedUrl?: string;
  note?: string;
}

export interface ResolvedSocialLink {
  id: string;
  platform: SocialLink['platform'];
  label: string;
  url: string;
  handle?: string;
}

export interface ResolvedMusicReleaseItem {
  id: string;
  title: string;
  artists: string;
  label: string;
  href: string;
  embedUrl: string;
  releaseDate?: string;
}

export interface ResolvedServiceOffer {
  id: string;
  title: string;
  price: string;
  summary: string;
  audience: string;
  features: readonly string[];
  ctaLabel: string;
}

export interface ResolvedContactDetail {
  label: string;
  value: string;
  href?: string;
}

export interface ResolvedContactPreset {
  id: string;
  to: string;
  subject: string;
  body: string;
  ctaLabel: string;
}

export interface ResolvedContactInfo {
  intro: string;
  responseTime: string;
  details: readonly ResolvedContactDetail[];
  presets: readonly ResolvedContactPreset[];
}
