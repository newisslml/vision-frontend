import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadChildren: () => import('./register/register.routes').then((m) => m.routes),
  }
];
