import { InquiryMailtoService } from './inquiry-mailto.service';
import { MailtoPayloadService } from './mailto-payload.service';

describe('InquiryMailtoService', () => {
  it('builds a mastering inquiry href from typed input', () => {
    const service = new InquiryMailtoService(new MailtoPayloadService());

    const href = service.buildMasteringInquiryHref(
      {
        id: 'mastering-request',
        to: 'mastering@gabomartin.com',
        subject: 'Mastering request',
        body: 'Hi Gabo,',
        ctaLabel: 'Open mastering email',
      },
      {
        service: 'Service',
        price: 'Rate',
        name: 'Name',
        audioLinks: 'Audio file links',
        trackDetails: 'Track details',
      },
      {
        serviceTitle: 'Stereo mastering',
        price: 'USD 20 per track',
        name: 'Alex',
        audioLinks: 'https://example.com/song.wav',
        trackDetails: 'Song: Night Drive',
      },
    );

    expect(href).toContain('mailto:mastering@gabomartin.com');
    expect(href).toContain('subject=Mastering+request');
    expect(href).toContain('Service%3A+Stereo+mastering');
    expect(href).toContain('Rate%3A+USD+20+per+track');
  });
});
