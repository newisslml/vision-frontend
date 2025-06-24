import { Routes } from '@angular/router';
import { RegisterPage } from './register.page';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterPage,
  },
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full',
  },
];

