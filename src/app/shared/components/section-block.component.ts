import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResolvedSection } from '../../core/services/content.types';

@Component({
  selector: 'app-section-block',
  imports: [RouterLink],
  templateUrl: './section-block.component.html',
})
export class SectionBlockComponent {
  readonly section = input.required<ResolvedSection>();
}
