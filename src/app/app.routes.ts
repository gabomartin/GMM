import { Routes } from '@angular/router';
import { BioPageComponent } from './features/pages/bio-page.component';
import { ContactPageComponent } from './features/pages/contact-page.component';
import { DjSetsPageComponent } from './features/pages/dj-sets-page.component';
import { GalleryPageComponent } from './features/pages/gallery-page.component';
import { HomePageComponent } from './features/pages/home-page.component';
import { MusicPageComponent } from './features/pages/music-page.component';
import { NotFoundPageComponent } from './features/pages/not-found-page.component';
import { ServicesPageComponent } from './features/pages/services-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { pageId: 'home' },
  },
  {
    path: 'bio',
    component: BioPageComponent,
    data: { pageId: 'bio' },
  },
  {
    path: 'music',
    component: MusicPageComponent,
    data: { pageId: 'music' },
  },
  {
    path: 'dj-sets',
    component: DjSetsPageComponent,
    data: { pageId: 'djSets' },
  },
  {
    path: 'gallery',
    component: GalleryPageComponent,
    data: { pageId: 'gallery' },
  },
  {
    path: 'services',
    component: ServicesPageComponent,
    data: { pageId: 'services' },
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    data: { pageId: 'contact' },
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
