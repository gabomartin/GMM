import { LocalizedValue } from './page.model';

export interface ContactDetail {
  label: LocalizedValue<string>;
  value: LocalizedValue<string>;
  href?: string;
}

export interface ContactPreset {
  id: string;
  to: string;
  subject: LocalizedValue<string>;
  body: LocalizedValue<string>;
  ctaLabel: LocalizedValue<string>;
}

export interface ContactInfo {
  intro: LocalizedValue<string>;
  responseTime: LocalizedValue<string>;
  details: readonly ContactDetail[];
  presets: readonly ContactPreset[];
}
