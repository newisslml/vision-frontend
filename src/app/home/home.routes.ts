import { Routes } from '@angular/router';
import { LoginPage } from './home.page';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPage,
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
];
