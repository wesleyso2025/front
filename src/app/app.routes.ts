import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'bar-chart',
    loadComponent: () =>
      import('./core/components/bar-chart/bar-chart.component').then(
        (com) => com.BarChartComponent
      ),
  },
  {
    path: 'action-bar',
    loadComponent: () =>
      import('./core/components/action-bar/action-bar.component').then(
        (com) => com.ActionBarComponent
      ),
  },
  {
    path: 'app-bar',
    loadComponent: () =>
      import('./core/components/app-bar/app-bar.component').then(
        (com) => com.AppBarComponent
      ),
  },
  {
    path: 'action-item',
    loadComponent: () =>
      import('./core/components/action-item/action-item.component').then(
        (com) => com.ActionItemComponent
      ),
  },
  {
    path: 'header-bar',
    loadComponent: () =>
      import('./core/components/header-bar/header-bar.component').then(
        (com) => com.HeaderBarComponent
      ),
  },
  {
    path: 'landing-card',
    loadComponent: () =>
      import('./core/components/landing-card/landing-card.component').then(
        (com) => com.LandingCardComponent
      ),
  },
  {
    path: 'multi-value-card',
    loadComponent: () =>
      import(
        './core/components/multi-value-card/multi-value-card.component'
      ).then((com) => com.MultiValueCardComponent),
  },
  {
    path: 'pie-chart',
    loadComponent: () =>
      import('./core/components/pie-chart/pie-chart.component').then(
        (com) => com.PieChartComponent
      ),
  },
  {
    path: 'suscription-card',
    loadComponent: () =>
      import('./core/components/suscription-card/suscription-card.component').then(
        (com) => com.SuscriptionCardComponent
      ),
  },
  {
    path: 'value-card',
    loadComponent: () =>
      import('./core/components/value-card/value-card.component').then(
        (com) => com.ValueCardComponent
      ),
  },
  {
    path: 'value-list-card',
    loadComponent: () =>
      import('./core/components/value-list-card/value-list-card.component').then(
        (com) => com.ValueListCardComponent
      ),
  },
  {
    path: 'calculator',
    loadComponent: () =>
      import('./pages/calculator/calculator.component').then(
        (com) => com.CalculatorComponent
      ),
  },
  {
    path: 'client-list',
    loadComponent: () =>
      import('./pages/client-list/client-list.component').then(
        com => com.ClientListComponent
      ),
    title: 'DNA | Clients',
  },
  {
    path: 'client/:id',
    loadComponent: () =>
      import('./pages/client/client.component').then(
        com => com.ClientComponent
      ),
    title: 'DNA | Client',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.component').then(
        com => com.AuthComponent
      ),
    title: 'DNA | Client',
  },
  {
    path: 'landing',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(
        com => com.LandingComponent
      ),
    title: 'DNA | Client',
  },
  {
    path: 'assets/:clientId',
    loadComponent: () =>
      import('./pages/assets/assets.component').then(
        com => com.AssetsComponent
      ),
    title: 'DNA | Client',
  },

];
