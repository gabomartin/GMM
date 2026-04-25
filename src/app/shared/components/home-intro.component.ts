import { Component, OnDestroy, output } from '@angular/core';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrl: './home-intro.component.css',
})
export class HomeIntroComponent implements OnDestroy {
  readonly introDone = output<void>();

  private readonly timeoutId = setTimeout(() => this.introDone.emit(), 1650);

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }
}
