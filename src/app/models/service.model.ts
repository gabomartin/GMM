import { LocalizedValue } from './page.model';

export interface ServiceOffer {
  id: string;
  title: LocalizedValue<string>;
  price: LocalizedValue<string>;
  summary: LocalizedValue<string>;
  audience: LocalizedValue<string>;
  features: readonly LocalizedValue<string>[];
  ctaLabel: LocalizedValue<string>;
}
