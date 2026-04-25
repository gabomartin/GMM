import { Component, computed, inject, input, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Language, MasteringInquiryDraft } from '../../models';
import { ResolvedContactPreset } from '../../core/services/content.types';
import { InquiryMailtoService } from '../services/inquiry-mailto.service';

@Component({
  selector: 'app-mastering-inquiry-form',
  imports: [ReactiveFormsModule],
  templateUrl: './mastering-inquiry-form.component.html',
})
export class MasteringInquiryFormComponent {
  private readonly inquiryMailtoService = inject(InquiryMailtoService);

  readonly language = input.required<Language>();
  readonly preset = input.required<ResolvedContactPreset>();
  readonly price = input.required<string>();

  protected readonly submitted = signal(false);
  protected readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    audioLinks: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    trackDetails: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  protected readonly labels = computed(() =>
    this.language() === 'en'
      ? {
          title: 'Submit a mastering request',
          subtitle: 'Send a premaster link, a reference track, and any notes for the final sound.',
          priceLabel: 'Rate',
          name: 'Name',
          audioLinks: 'Audio file links',
          trackDetails: 'Track details',
          action: this.preset().ctaLabel,
          invalid: 'Please complete all required fields before continuing.',
          preview: 'Open email draft',
          service: 'Service',
        }
      : {
          title: 'Enviar solicitud de mastering',
          subtitle: 'Compartí el link del premaster, una referencia y notas sobre el sonido final.',
          priceLabel: 'Tarifa',
          name: 'Nombre',
          audioLinks: 'Links de audio',
          trackDetails: 'Detalles del track',
          action: this.preset().ctaLabel,
          invalid: 'Completá todos los campos obligatorios antes de continuar.',
          preview: 'Abrir borrador',
          service: 'Servicio',
        },
  );

  protected readonly mailtoHref = computed(() => {
    const value = this.form.getRawValue();
    const draft: MasteringInquiryDraft = {
      serviceTitle: this.language() === 'en' ? 'Stereo mastering' : 'Mastering stereo',
      price: this.price(),
      name: value.name,
      audioLinks: value.audioLinks,
      trackDetails: value.trackDetails,
    };

    return this.inquiryMailtoService.buildMasteringInquiryHref(
      this.preset(),
      {
        service: this.labels().service,
        price: this.labels().priceLabel,
        name: this.labels().name,
        audioLinks: this.labels().audioLinks,
        trackDetails: this.labels().trackDetails,
      },
      draft,
    );
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
