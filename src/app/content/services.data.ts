import { ServiceOffer } from '../models';
import { localized } from './content-utils';

export const servicesData: readonly ServiceOffer[] = [
  {
    id: 'mastering',
    title: localized('Stereo mastering', 'Mastering stereo'),
    price: localized('USD 20 per track', 'USD 20 por track'),
    summary: localized(
      'Mastering for finished mixes.',
      'Mastering para mezclas terminadas.'
    ),
    audience: localized(
      'USD 20 per track',
      'USD 20 por track'
    ),
    features: [
      localized(
        'Premaster WAV or high-quality link',
        'Premaster WAV o link en alta calidad'
      ),
      localized(
        'Reference track and notes',
        'Referencia y notas'
      ),
    ],
    ctaLabel: localized('Start mastering request', 'Iniciar solicitud de mastering'),
  },
] as const;

export const serviceData = servicesData;
