import { Component, computed, input, signal } from '@angular/core';
import { DEFAULT_LANGUAGE, GalleryItem, Language, getLocalizedValue } from '../../models';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
})
export class GalleryGridComponent {
  readonly items = input.required<readonly GalleryItem[]>();
  readonly language = input<Language>(DEFAULT_LANGUAGE);

  protected readonly activeIndex = signal(0);
  protected readonly outgoingIndex = signal<number | null>(null);
  protected readonly direction = signal<'next' | 'prev'>('next');
  protected readonly animating = signal(false);
  protected readonly activeItem = computed(() => this.items()[this.activeIndex()]);
  protected readonly outgoingItem = computed(() => {
    const index = this.outgoingIndex();
    return index === null ? null : this.items()[index] ?? null;
  });

  protected alt(item: GalleryItem): string {
    return getLocalizedValue(item.alt, this.language());
  }

  protected next(): void {
    this.navigate(1);
  }

  protected previous(): void {
    this.navigate(-1);
  }

  protected setActive(index: number): void {
    const itemCount = this.items().length;
    if (!itemCount || index === this.activeIndex() || this.animating()) {
      return;
    }

    this.outgoingIndex.set(this.activeIndex());
    this.direction.set(index > this.activeIndex() ? 'next' : 'prev');
    this.animating.set(true);
    this.activeIndex.set(index);
  }

  protected onAnimationEnd(): void {
    this.outgoingIndex.set(null);
    this.animating.set(false);
  }

  protected slideClass(index: number): string {
    if (index === this.activeIndex()) {
      return this.direction() === 'next' ? 'gallery-enter-next' : 'gallery-enter-prev';
    }

    if (index === this.outgoingIndex()) {
      return this.direction() === 'next' ? 'gallery-exit-next' : 'gallery-exit-prev';
    }

    return 'hidden';
  }

  private navigate(step: number): void {
    const itemCount = this.items().length;
    if (!itemCount || this.animating()) {
      return;
    }

    const current = this.activeIndex();
    const nextIndex = (current + step + itemCount) % itemCount;

    this.outgoingIndex.set(current);
    this.direction.set(step > 0 ? 'next' : 'prev');
    this.animating.set(true);
    this.activeIndex.set(nextIndex);
  }
}
