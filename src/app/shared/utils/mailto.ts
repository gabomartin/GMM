export interface MailtoOptions {
  to: string;
  subject: string;
  body: string;
}

export const buildMailtoLink = ({ to, subject, body }: MailtoOptions): string => {
  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${to}?${params.toString()}`;
};
