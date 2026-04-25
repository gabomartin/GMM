import { Component, input } from '@angular/core';
import { ResolvedSocialLink } from '../../core/services/content.types';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
})
export class SocialLinksComponent {
  readonly title = input.required<string>();
  readonly description = input<string>('');
  readonly links = input.required<readonly ResolvedSocialLink[]>();
}
