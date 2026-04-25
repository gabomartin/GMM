import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.component.html',
})
export class LanguageToggleComponent {
  protected readonly languageService = inject(LanguageService);
  protected readonly language = this.languageService.language;
}
