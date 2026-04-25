import { Component, input } from '@angular/core';
import { Language } from '../../models';
import { ResolvedMusicReleaseItem } from '../../core/services/content.types';

@Component({
  selector: 'app-music-release-list',
  templateUrl: './music-release-list.component.html',
})
export class MusicReleaseListComponent {
  readonly items = input.required<readonly ResolvedMusicReleaseItem[]>();
  readonly language = input.required<Language>();
}
