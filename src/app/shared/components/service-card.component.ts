import { Component, input } from '@angular/core';
import { ResolvedServiceOffer } from '../../core/services/content.types';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent {
  readonly service = input.required<ResolvedServiceOffer>();
  readonly href = input.required<string>();
}
