import { NavigationItem } from '../models';
import { localized } from './content-utils';

export const navigationData: readonly NavigationItem[] = [
  { id: 'home', path: '/', label: localized('Home', 'Inicio') },
  { id: 'bio', path: '/bio', label: localized('Bio', 'Bio') },
  { id: 'music', path: '/music', label: localized('Music', 'Música') },
  { id: 'dj-sets', path: '/dj-sets', label: localized('DJ Sets', 'Sesiones') },
  { id: 'gallery', path: '/gallery', label: localized('Gallery', 'Galería') },
  { id: 'services', path: '/services', label: localized('Services', 'Servicios') },
  { id: 'contact', path: '/contact', label: localized('Contact', 'Contacto') },
] as const;
