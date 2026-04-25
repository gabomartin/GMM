import { LocalizedPages } from '../models';
import { localized } from './content-utils';

export const musicPages: Pick<LocalizedPages, 'music' | 'djSets' | 'gallery' | 'services' | 'contact'> = {
  music: {
    id: 'music',
    slug: '/music',
    seo: {
      title: localized('Music | Gabo Martin', 'Música | Gabo Martin'),
      description: localized(
        'Music by Gabo Martin.',
        'Musica de Gabo Martin.'
      ),
    },
    hero: {
      eyebrow: localized('Music', 'Música'),
      title: localized('Music', 'Música'),
      summary: localized(
        'Released music.',
        'Musica lanzada.'
      ),
      ctas: [{ label: localized('View DJ sets', 'Ver sesiones'), href: '/dj-sets' }],
    },
    sections: [
      {
        id: 'playlist',
        title: localized('Top tracks', 'Top tracks'),
        description: localized(
          "Spotify's top tracks.",
          'Top tracks de Spotify.'
        ),
      }
    ],
  },
  djSets: {
    id: 'dj-sets',
    slug: '/dj-sets',
    seo: {
      title: localized('DJ Sets | Gabo Martin', 'DJ Sets | Gabo Martin'),
      description: localized(
        'Watch and listen to selected DJ sets, mixes, and live performance references.',
        'Mira y escucha una selección de DJ sets, mixes y referencias de presentaciones en vivo.'
      ),
    },
    hero: {
      eyebrow: localized('DJ Sets', 'DJ Sets'),
      title: localized('DJ Sets', 'DJ Sets'),
      summary: localized(
        'Live DJ sets and mixes.',
        'Sesiones en vivo y mezclas.'
      ),
      ctas: [],
    },
    sections: [],
  },
  gallery: {
    id: 'gallery',
    slug: '/gallery',
    seo: {
      title: localized('Gallery | Gabo Martin', 'Galería | Gabo Martin'),
      description: localized(
        'Photo gallery for Gabo Martin.',
        'Galería de fotos de Gabo Martin.'
      ),
    },
    hero: {
      eyebrow: localized('Gallery', 'Galería'),
      title: localized('Gallery', 'Galería'),
      summary: localized('Photos.', 'Fotos.'),
      ctas: [],
    },
    sections: [],
  },
  services: {
    id: 'services',
    slug: '/services',
    seo: {
      title: localized('Services | Gabo Martin', 'Servicios | Gabo Martin'),
      description: localized(
        'Stereo mastering for finished mixes by Gabo Martin.',
        'Mastering stereo para mezclas terminadas por Gabo Martin.'
      ),
    },
    hero: {
      eyebrow: localized('Mastering', 'Mastering'),
      title: localized('Stereo mastering', 'Mastering stereo'),
      summary: localized(
        'USD 20 per track.',
        'USD 20 por track.'
      ),
      ctas: [],
    },
    sections: [
      {
        id: 'packages',
        title: localized('Mastering offer', 'Propuesta de mastering'),
        description: localized(
          'Send the final mix, a reference track, and any notes about level, tone, or release target.',
          'Enviá la mezcla final, una referencia y notas sobre nivel, tono o destino del lanzamiento.'
        ),
      },
    ],
  },
  contact: {
    id: 'contact',
    slug: '/contact',
    seo: {
      title: localized('Contact | Gabo Martin', 'Contacto | Gabo Martin'),
      description: localized(
        'Contact, booking, social links, and direct inquiries for Gabo Martin.',
        'Contacto, contrataciones, redes y consultas directas para Gabo Martin.'
      ),
    },
    hero: {
      eyebrow: localized('Contact', 'Contacto'),
      title: localized('Contact', 'Contacto'),
      summary: localized(
        'Bookings, collaborations, and mastering inquiries.',
        'Fechas, colaboraciones y consultas de mastering.'
      ),
      ctas: [],
    },
    sections: [
      {
        id: 'contact-details',
        title: localized('Direct details', 'Datos directos'),
        description: localized(
          'Email, social profiles, and expected response time for direct conversations.',
          'Correo, perfiles sociales y tiempo de respuesta para conversaciones directas.'
        ),
      },
    ],
  },
} as const;
