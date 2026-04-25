import { Injectable } from '@angular/core';
import { ContactPreset, Language, LocalizedValue, getLocalizedValue } from '../../models';
import { contactInfoData } from '../../content';
import { ResolvedContactInfo, ResolvedContactPreset } from './content.types';

@Injectable({ providedIn: 'root' })
export class ContactContentService {
  getContactInfo(language: Language): ResolvedContactInfo {
    return {
      intro: this.resolve(contactInfoData.intro, language),
      responseTime: this.resolve(contactInfoData.responseTime, language),
      details: contactInfoData.details.map((detail) => ({
        label: this.resolve(detail.label, language),
        value: this.resolve(detail.value, language),
        href: detail.href,
      })),
      presets: contactInfoData.presets.map((preset) => this.resolvePreset(preset, language)),
    };
  }

  getContactPreset(language: Language, presetId: string): ResolvedContactPreset {
    const preset = contactInfoData.presets.find((item) => item.id === presetId);

    if (!preset) {
      throw new Error(`Unknown contact preset: ${presetId}`);
    }

    return this.resolvePreset(preset, language);
  }

  private resolvePreset(preset: ContactPreset, language: Language): ResolvedContactPreset {
    return {
      id: preset.id,
      to: preset.to,
      subject: this.resolve(preset.subject, language),
      body: this.resolve(preset.body, language),
      ctaLabel: this.resolve(preset.ctaLabel, language),
    };
  }

  private resolve<T>(value: LocalizedValue<T>, language: Language): T {
    return getLocalizedValue(value, language);
  }
}
