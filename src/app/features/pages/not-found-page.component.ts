import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  templateUrl: './not-found-page.component.html',
})
export class NotFoundPageComponent {
  protected readonly language = inject(LanguageService).language;
}
