import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  updatePage(title: string, description: string, language: string): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.document.documentElement.lang = language;
  }
}
