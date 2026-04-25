import { LocalizedValue } from './page.model';

export const EMBED_PLATFORMS = ['spotify', 'youtube', 'soundcloud', 'mixcloud', 'instagram'] as const;

export type EmbedPlatform = (typeof EMBED_PLATFORMS)[number];

export interface EmbedItem {
  id: string;
  platform: EmbedPlatform;
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
  url: string;
  embedUrl?: string;
  note?: LocalizedValue<string>;
}

export type GalleryItemType = 'image' | 'video';

interface GalleryItemBase {
  id: string;
  type: GalleryItemType;
  title: LocalizedValue<string>;
  alt: LocalizedValue<string>;
  caption?: LocalizedValue<string>;
  externalUrl?: string;
}

export interface GalleryImageItem extends GalleryItemBase {
  type: 'image';
  src: string;
  poster?: never;
}

export interface GalleryVideoItem extends GalleryItemBase {
  type: 'video';
  src?: string;
  poster?: string;
}

export type GalleryItem = GalleryImageItem | GalleryVideoItem;

export interface MusicReleaseItem {
  id: string;
  title: LocalizedValue<string>;
  artists: LocalizedValue<string>;
  label: LocalizedValue<string>;
  href: string;
  embedUrl: string;
  releaseDate?: string;
}
