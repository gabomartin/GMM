import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { ContactContentService } from '../../core/services/contact-content.service';
import { PageContentService } from '../../core/services/page-content.service';
import { ServiceOfferContentService } from '../../core/services/service-offer-content.service';
import { HeroComponent } from '../../shared/components/hero.component';
import { MasteringInquiryFormComponent } from '../../shared/components/mastering-inquiry-form.component';
import { SectionBlockComponent } from '../../shared/components/section-block.component';
import { ServiceCardComponent } from '../../shared/components/service-card.component';

@Component({
  selector: 'app-services-page',
  imports: [HeroComponent, MasteringInquiryFormComponent, SectionBlockComponent, ServiceCardComponent],
  templateUrl: './services-page.component.html',
})
export class ServicesPageComponent {
  private readonly languageService = inject(LanguageService);
  private readonly pageContentService = inject(PageContentService);
  private readonly serviceOfferContentService = inject(ServiceOfferContentService);
  private readonly contactContentService = inject(ContactContentService);

  protected readonly language = this.languageService.language;
  protected readonly page = computed(() => this.pageContentService.getPage('services', this.language()));
  protected readonly services = computed(() => this.serviceOfferContentService.getServices(this.language()));
  protected readonly mastering = computed(() =>
    this.serviceOfferContentService.getService(this.language(), 'mastering'),
  );
  protected readonly preset = computed(() =>
    this.contactContentService.getContactPreset(this.language(), 'mastering-request'),
  );
}
