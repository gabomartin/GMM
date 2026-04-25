import { LocalizedValue } from './page.model';

export const SOCIAL_PLATFORMS = ['instagram', 'spotify', 'youtube', 'soundcloud', 'tiktok', 'email'] as const;

export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number];

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  label: LocalizedValue<string>;
  url: string;
  handle?: string;
}
