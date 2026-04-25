import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResolvedHeroCta } from '../../core/services/content.types';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly summary = input.required<string>();
  readonly ctas = input<readonly ResolvedHeroCta[]>([]);
}
