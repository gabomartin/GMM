import { Injectable } from '@angular/core';
import { Language, LocalizedValue, getLocalizedValue } from '../../models';
import { servicesData } from '../../content';
import { ResolvedServiceOffer } from './content.types';

@Injectable({ providedIn: 'root' })
export class ServiceOfferContentService {
  getServices(language: Language): readonly ResolvedServiceOffer[] {
    return servicesData.map((service) => ({
      id: service.id,
      title: this.resolve(service.title, language),
      price: this.resolve(service.price, language),
      summary: this.resolve(service.summary, language),
      audience: this.resolve(service.audience, language),
      features: service.features.map((feature) => this.resolve(feature, language)),
      ctaLabel: this.resolve(service.ctaLabel, language),
    }));
  }

  getService(language: Language, serviceId: string): ResolvedServiceOffer | undefined {
    return this.getServices(language).find((service) => service.id === serviceId);
  }

  private resolve<T>(value: LocalizedValue<T>, language: Language): T {
    return getLocalizedValue(value, language);
  }
}
