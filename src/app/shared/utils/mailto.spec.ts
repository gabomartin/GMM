import { buildMailtoLink } from './mailto';

describe('buildMailtoLink', () => {
  it('builds a query-string encoded mailto link', () => {
    const href = buildMailtoLink({
      to: 'booking@gabomartin.com',
      subject: 'Booking inquiry',
      body: 'Line one\nLine two',
    });

    expect(href).toContain('mailto:booking@gabomartin.com');
    expect(href).toContain('subject=Booking+inquiry');
    expect(href).toContain('body=Line+one%0ALine+two');
  });
});
