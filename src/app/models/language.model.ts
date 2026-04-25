export const LANGUAGES = ['en', 'es'] as const;

export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = 'en';
