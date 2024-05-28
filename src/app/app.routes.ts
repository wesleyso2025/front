import { Routes } from '@angular/router';
import { AccordionComponent } from './presentation/pages/accordion/accordion.component';
import { ActionComponent } from './presentation/pages/action/action.component';
import { CarrouselComponent } from './presentation/pages/carrousel/carrousel.component';

export const routes: Routes = [
  {
    path: 'action',
    loadComponent: () =>
      import('./presentation/pages/action/action.component').then(
        (mod) => mod.ActionComponent
      ),
  },
  {
    path: 'carrousel',
    loadComponent: () =>
      import('./presentation/pages/carrousel/carrousel.component').then(
        (mod) => mod.CarrouselComponent
      ),
  },
  {
    path: 'accordion',
    loadComponent: () =>
      import('./presentation/pages/accordion/accordion.component').then(
        (mod) => mod.AccordionComponent
      ),
  },
  { path: '**', redirectTo: '/accordion', pathMatch: 'full' },
];
