import { LocalizedPages } from '../models';
import { homePages } from './pages-home-bio.data';
import { musicPages } from './pages-music-sets-services-contact.data';

export const pagesData: LocalizedPages = {
  ...homePages,
  ...musicPages,
};
