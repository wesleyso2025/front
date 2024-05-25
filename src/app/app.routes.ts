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
  { path: 'carrousel', component: CarrouselComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: '**', redirectTo: '/accordion', pathMatch: 'full' },
];
