import { Injectable } from '@angular/core';
import { GeneralInquiryDraft, MasteringInquiryDraft } from '../../models';
import { ResolvedContactPreset } from '../../core/services/content.types';
import { MailtoPayloadService } from './mailto-payload.service';

export interface GeneralInquiryLabels {
  name: string;
  email: string;
  eventDate: string;
  location: string;
  service: string;
  message: string;
}

export interface MasteringInquiryLabels {
  service: string;
  price: string;
  name: string;
  audioLinks: string;
  trackDetails: string;
}

@Injectable({ providedIn: 'root' })
export class InquiryMailtoService {
  constructor(private readonly mailtoPayloadService: MailtoPayloadService) {}

  buildGeneralInquiryHref(
    preset: ResolvedContactPreset,
    labels: GeneralInquiryLabels,
    draft: GeneralInquiryDraft,
  ): string {
    return this.mailtoPayloadService.buildHref({
      to: preset.to,
      subject: preset.subject,
      intro: preset.body,
      fields: [
        { label: labels.name, value: draft.name },
        { label: labels.email, value: draft.email },
        { label: labels.eventDate, value: draft.eventDate },
        { label: labels.location, value: draft.location },
        { label: labels.service, value: draft.serviceTitle ?? '' },
        { label: labels.message, value: draft.message, multiline: true },
      ],
    });
  }

  buildMasteringInquiryHref(
    preset: ResolvedContactPreset,
    labels: MasteringInquiryLabels,
    draft: MasteringInquiryDraft,
  ): string {
    return this.mailtoPayloadService.buildHref({
      to: preset.to,
      subject: preset.subject,
      intro: preset.body,
      fields: [
        { label: labels.service, value: draft.serviceTitle },
        { label: labels.price, value: draft.price },
        { label: labels.name, value: draft.name },
        { label: labels.audioLinks, value: draft.audioLinks, multiline: true },
        { label: labels.trackDetails, value: draft.trackDetails, multiline: true },
      ],
    });
  }
}
