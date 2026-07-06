import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/hero.component/hero.component').then(m => m.HeroComponent)
  }
];