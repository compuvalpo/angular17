import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'form',
    loadComponent: () => import('./formulario/formulario.component')
  }
];
