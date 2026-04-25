import { Injectable } from '@angular/core';
import { Language, getLocalizedValue } from '../../models';
import { navigationData } from '../../content';
import { ResolvedNavigationItem } from './content.types';

@Injectable({ providedIn: 'root' })
export class NavigationContentService {
  getNavigation(language: Language): readonly ResolvedNavigationItem[] {
    return navigationData.map((item) => ({
      id: item.id,
      path: item.path,
      label: getLocalizedValue(item.label, language),
    }));
  }
}
