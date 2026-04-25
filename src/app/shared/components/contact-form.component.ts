import { Component, computed, inject, input, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralInquiryDraft, Language } from '../../models';
import { ResolvedContactPreset, ResolvedServiceOffer } from '../../core/services/content.types';
import { InquiryMailtoService } from '../services/inquiry-mailto.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  private readonly inquiryMailtoService = inject(InquiryMailtoService);

  readonly language = input.required<Language>();
  readonly preset = input.required<ResolvedContactPreset>();
  readonly serviceOptions = input<readonly ResolvedServiceOffer[]>([]);

  protected readonly submitted = signal(false);
  protected readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    eventDate: new FormControl('', { nonNullable: true }),
    location: new FormControl('', { nonNullable: true }),
    serviceId: new FormControl('', { nonNullable: true }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  protected readonly labels = computed(() =>
    this.language() === 'en'
      ? {
          title: 'Send an inquiry',
          subtitle: 'Share the key details and the best way to reach you.',
          name: 'Name',
          email: 'Email',
          eventDate: 'Event date',
          location: 'Location',
          service: 'Service',
          message: 'Message',
          action: this.preset().ctaLabel,
          invalid: 'Please complete the required fields before continuing.',
          preview: 'Open email draft',
        }
      : {
          title: 'Enviar consulta',
          subtitle: 'Compartí los datos clave y la mejor forma de contactarte.',
          name: 'Nombre',
          email: 'Correo',
          eventDate: 'Fecha del evento',
          location: 'Lugar',
          service: 'Servicio',
          message: 'Mensaje',
          action: this.preset().ctaLabel,
          invalid: 'Completá los campos obligatorios antes de continuar.',
          preview: 'Abrir borrador',
        },
  );

  protected readonly mailtoHref = computed(() => {
    const value = this.form.getRawValue();
    const selectedService = this.serviceOptions().find((option) => option.id === value.serviceId);
    const draft: GeneralInquiryDraft = {
      name: value.name,
      email: value.email,
      eventDate: value.eventDate,
      location: value.location,
      serviceTitle: selectedService?.title,
      message: value.message,
    };

    return this.inquiryMailtoService.buildGeneralInquiryHref(this.preset(), this.labels(), draft);
  });

  protected submit(): void {
    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    globalThis.location.href = this.mailtoHref();
  }
}
