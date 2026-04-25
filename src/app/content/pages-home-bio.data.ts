import { LocalizedPages } from '../models';
import { localized } from './content-utils';

export const homePages: Pick<LocalizedPages, 'home' | 'bio'> = {
  home: {
    id: 'home',
    slug: '/',
    seo: {
      title: localized('Gabo Martin | DJ & Music Selector', 'Gabo Martin | DJ y Selector Musical'),
      description: localized(
        'Music, DJ sets, and mastering by Gabo Martin.',
        'Música, DJ sets y mastering de Gabo Martin.'
      ),
    },
    hero: {
      eyebrow: localized('DJ / Producer', 'DJ / Productor'),
      title: localized(
        'Gabo Martin',
        'Gabo Martin'
      ),
      summary: localized(
        'Music, DJ sets, and stereo mastering.',
        'Música, DJ sets y mastering stereo.'
      ),
      ctas: [
        { label: localized('Listen now', 'Escuchar ahora'), href: '/music' },
        { label: localized('Mastering', 'Mastering'), href: '/services' },
      ],
    },
    sections: [
      {
        id: 'featured-sets',
        title: localized('Selected sets and playlists', 'Sets y playlists seleccionados'),
        description: localized(
          'Recent mixes, playlists, and listening links.',
          'Mixes, playlists y links para escuchar.'
        ),
      },
      {
        id: 'services-preview',
        title: localized('Stereo mastering for finished mixes', 'Mastering stereo para mezclas terminadas'),
        description: localized(
          'Mastering for finished tracks, singles, and club mixes.',
          'Mastering para tracks terminados, singles y mezclas de club.'
        ),
      },
    ],
  },
  bio: {
    id: 'bio',
    slug: '/bio',
    seo: {
      title: localized('Bio | Gabo Martin', 'Bio | Gabo Martin'),
      description: localized(
        'Bio and background for Gabo Martin.',
        'Bio y trayectoria de Gabo Martin.'
      ),
    },
    hero: {
      eyebrow: localized('Bio', 'Bio'),
      title: localized('Gabo Martin', 'Gabo Martin'),
      summary: localized(
        'DJ and producer.',
        'DJ y productor.'
      ),
      ctas: [],
    },
    sections: [
      {
        id: 'background',
        title: localized('Background', 'Bio'),
        description: localized(
          'Hailing from Viedma, with releases on labels such as Juicebox Music, Mango Alley, and Balkan Connection, Gabo Martin has been shaped by music since childhood. Influenced early by bands like Gorillaz and Pink Floyd, he began exploring music production before starting his path as a DJ at 16. In 2019 he earned a Sound Operator degree, later becoming a reference for mixing and mastering in Rosario, with clients among many of the city\'s biggest artists. With the underground scene as the framework for his beginnings, Gabriel built a sound that now receives support from artists such as Simon Vuarambon, Hernan Cattaneo, DJ Ruby, and many more.',
          'Oriundo de Viedma, con lanzamientos en sellos como Juicebox Music, Mango Alley y Balkan Connection, Gabo Martin fue marcado por la música desde chico. Influenciado por bandas como Gorillaz y Pink Floyd, empezó a investigar la producción musical antes de iniciar su camino como DJ a los 16 años. En 2019 obtuvo el título de Operador de Sonido y luego se convirtió en una referencia de mezcla y mastering en Rosario, trabajando con varios de los artistas más importantes de la ciudad. Con la escena underground como marco de sus comienzos, Gabriel construyó un sonido que hoy recibe apoyo de artistas como Simon Vuarambon, Hernan Cattaneo, DJ Ruby y muchos más.'
        ),
      },
    ],
  },
} as const;
