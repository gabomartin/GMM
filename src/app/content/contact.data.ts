import { ContactInfo } from '../models';
import { localized } from './content-utils';

export const contactInfoData: ContactInfo = {
  intro: localized(
    'Bookings, collaborations, music, and general questions.',
    'Fechas, colaboraciones, música y consultas generales.'
  ),
  responseTime: localized(
    'Typical response time: 1 to 2 business days.',
    'Tiempo de respuesta habitual: 1 a 2 días hábiles.'
  ),
  details: [
    {
      label: localized('Email', 'Correo'),
      value: localized('contact@gabomartin.com', 'contact@gabomartin.com'),
      href: 'mailto:contact@gabomartin.com',
    },
    {
      label: localized('Instagram', 'Instagram'),
      value: localized('@gabo.martin', '@gabo.martin'),
      href: 'https://www.instagram.com/gabo.martin/',
    },
  ],
  presets: [
    {
      id: 'general-booking',
      to: 'contact@gabomartin.com',
      subject: localized('Booking inquiry for Gabo Martin', 'Consulta de contratación para Gabo Martin'),
      body: localized(
        'Hi Gabo,\n\nI would like to enquire about your availability for an upcoming event.\n\nEvent date:\nLocation:\nEvent type:\nBudget:\n\nBest,\n',
        'Hola Gabo,\n\nQuisiera consultar tu disponibilidad para un próximo evento.\n\nFecha del evento:\nLugar:\nTipo de evento:\nPresupuesto:\n\nSaludos,\n'
      ),
      ctaLabel: localized('Send booking email', 'Enviar correo de contratación'),
    },
    {
      id: 'services-request',
      to: 'contact@gabomartin.com',
      subject: localized('Direct inquiry for Gabo Martin', 'Consulta directa para Gabo Martin'),
      body: localized(
        'Hi Gabo,\n\nI am reaching out with a direct inquiry.\n\nTopic:\nDate or timing:\nLinks:\nNotes:\n\nBest,\n',
        'Hola Gabo,\n\nMe contacto por una consulta directa.\n\nTema:\nFecha o tiempos:\nLinks:\nNotas:\n\nSaludos,\n'
      ),
      ctaLabel: localized('Send direct inquiry', 'Enviar consulta directa'),
    },
    {
      id: 'mastering-request',
      to: 'mastering@gabomartin.com',
      subject: localized('Mastering request', 'Solicitud de mastering'),
      body: localized(
        'Hi Gabo,\n\nI am sending a mastering request.\n',
        'Hola Gabo,\n\nTe envio una solicitud de mastering.\n'
      ),
      ctaLabel: localized('Open mastering email', 'Abrir correo de mastering'),
    },
  ],
} as const;

export const contactData = contactInfoData;
