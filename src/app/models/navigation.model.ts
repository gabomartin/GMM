import { LocalizedValue, PageId } from './page.model';

export interface NavigationItem {
  id: PageId;
  path: string;
  label: LocalizedValue<string>;
}
