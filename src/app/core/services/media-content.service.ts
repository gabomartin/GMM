import { Injectable } from '@angular/core';
import { EmbedItem, GalleryItem, Language, LocalizedValue, getLocalizedValue } from '../../models';
import {
  embedsData,
  galleryData,
  musicReleaseData,
  musicRemixesData,
  musicSinglesData,
  socialLinksData,
} from '../../content';
import { ResolvedEmbedItem, ResolvedMusicReleaseItem, ResolvedSocialLink } from './content.types';

@Injectable({ providedIn: 'root' })
export class MediaContentService {
  getEmbeds(language: Language, platform?: EmbedItem['platform']): readonly ResolvedEmbedItem[] {
    return embedsData
      .filter((item) => !platform || item.platform === platform)
      .map((item) => ({
        id: item.id,
        platform: item.platform,
        title: this.resolve(item.title, language),
        description: this.resolve(item.description, language),
        url: item.url,
        embedUrl: item.embedUrl,
        note: item.note ? this.resolve(item.note, language) : undefined,
      }));
  }

  getSocialLinks(language: Language): readonly ResolvedSocialLink[] {
    return socialLinksData.map((link) => ({
      id: link.id,
      platform: link.platform,
      label: this.resolve(link.label, language),
      url: link.url,
      handle: link.handle,
    }));
  }

  getGalleryItems(): readonly GalleryItem[] {
    return galleryData;
  }

  getMusicReleases(language: Language): readonly ResolvedMusicReleaseItem[] {
    return musicReleaseData.map((item) => ({
      id: item.id,
      title: this.resolve(item.title, language),
      artists: this.resolve(item.artists, language),
      label: this.resolve(item.label, language),
      releaseDate: item.releaseDate,
      href: item.href,
      embedUrl: item.embedUrl,
    }));
  }

  getMusicRemixes(language: Language): readonly ResolvedMusicReleaseItem[] {
    return musicRemixesData.map((item) => ({
      id: item.id,
      title: this.resolve(item.title, language),
      artists: this.resolve(item.artists, language),
      label: this.resolve(item.label, language),
      releaseDate: item.releaseDate,
      href: item.href,
      embedUrl: item.embedUrl,
    }));
  }

  getMusicSingles(language: Language): readonly ResolvedMusicReleaseItem[] {
    return musicSinglesData.map((item) => ({
      id: item.id,
      title: this.resolve(item.title, language),
      artists: this.resolve(item.artists, language),
      label: this.resolve(item.label, language),
      releaseDate: item.releaseDate,
      href: item.href,
      embedUrl: item.embedUrl,
    }));
  }

  private resolve<T>(value: LocalizedValue<T>, language: Language): T {
    return getLocalizedValue(value, language);
  }
}
