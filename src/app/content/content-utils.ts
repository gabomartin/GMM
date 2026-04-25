import { Language } from '../models/language.model';
import { LocalizedValue } from '../models/page.model';

export const localized = <T>(en: T, es: T): LocalizedValue<T> => ({ en, es });

export const pickLocalized = <T>(value: LocalizedValue<T>, language: Language): T => value[language];

