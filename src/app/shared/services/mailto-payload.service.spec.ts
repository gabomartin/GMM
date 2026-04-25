import { MailtoPayloadService } from './mailto-payload.service';

describe('MailtoPayloadService', () => {
  it('builds a mailto href from structured fields', () => {
    const service = new MailtoPayloadService();

    const href = service.buildHref({
      to: 'mastering@gabomartin.com',
      subject: 'Mastering request',
      intro: 'Hi Gabo,',
      fields: [
        { label: 'Name', value: 'Alex' },
        { label: 'Audio links', value: 'https://example.com/track.wav', multiline: true },
        { label: 'Track details', value: '124 BPM / A minor', multiline: true },
      ],
    });

    expect(href).toContain('mailto:mastering@gabomartin.com');
    expect(href).toContain('subject=Mastering+request');
    expect(href).toContain('Name%3A+Alex');
    expect(href).toContain('Audio+links%3A%0Ahttps%3A%2F%2Fexample.com%2Ftrack.wav');
    expect(href).toContain('Track+details%3A%0A124+BPM+%2F+A+minor');
  });
});
