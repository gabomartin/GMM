import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { ContactContentService } from '../../core/services/contact-content.service';
import { PageContentService } from '../../core/services/page-content.service';
import { ContactFormComponent } from '../../shared/components/contact-form.component';
import { HeroComponent } from '../../shared/components/hero.component';

@Component({
  selector: 'app-contact-page',
  imports: [ContactFormComponent, HeroComponent],
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent {
  private readonly languageService = inject(LanguageService);
  private readonly pageContentService = inject(PageContentService);
  private readonly contactContentService = inject(ContactContentService);

  protected readonly language = this.languageService.language;
  protected readonly page = computed(() => this.pageContentService.getPage('contact', this.language()));
  protected readonly contactInfo = computed(() =>
    this.contactContentService.getContactInfo(this.language()),
  );
  protected readonly preset = computed(() =>
    this.contactContentService.getContactPreset(this.language(), 'general-booking'),
  );
}
