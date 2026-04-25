import { getLocalizedValue } from '../models/page.model';
import { contactInfoData } from './contact.data';
import { embedsData, socialLinksData } from './media.data';
import { navigationData } from './navigation.data';
import { pagesData } from './pages.data';
import { servicesData } from './services.data';

export const siteContent = {
  brand: {
    name: 'Gabo Martin',
    subtitle: {
      en: 'DJ & Producer.',
      es: 'DJ & Productor',
    },
  },
  navigation: navigationData,
  pages: pagesData,
  embeds: embedsData,
  services: servicesData,
  socialLinks: socialLinksData,
  contact: contactInfoData,
} as const;

export const selectLocalized = getLocalizedValue;
