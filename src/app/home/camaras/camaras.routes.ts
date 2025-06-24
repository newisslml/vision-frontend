import { Routes } from '@angular/router';
import { CamarasPage } from './camaras.page';

export const routes: Routes = [
    {
        path: 'camaras',
        component: CamarasPage,
    },
    {
        path: '',
        redirectTo: '/camaras',
        pathMatch: 'full',
    },
];
