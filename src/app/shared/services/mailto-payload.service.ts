import { Injectable } from '@angular/core';
import { buildMailtoLink } from '../utils/mailto';

export interface MailtoBodyField {
  label: string;
  value: string;
  multiline?: boolean;
}

export interface MailtoPayloadRequest {
  to: string;
  subject: string;
  intro?: string;
  fields: readonly MailtoBodyField[];
}

@Injectable({ providedIn: 'root' })
export class MailtoPayloadService {
  buildHref({ to, subject, intro, fields }: MailtoPayloadRequest): string {
    const lines = [
      intro?.trim() ?? '',
      intro?.trim() ? '' : '',
      ...fields
        .filter((field) => field.value.trim())
        .flatMap((field) =>
          field.multiline
            ? [`${field.label}:`, field.value.trim(), '']
            : [`${field.label}: ${field.value.trim()}`],
        ),
    ].filter((line, index, all) => {
      if (!line) {
        return Boolean(all[index - 1]) && Boolean(all[index + 1]);
      }

      return true;
    });

    return buildMailtoLink({
      to,
      subject,
      body: lines.join('\n'),
    });
  }
}
