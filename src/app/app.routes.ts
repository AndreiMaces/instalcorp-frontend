import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    data: { breadcrumb: 'Dashboard' },
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];
