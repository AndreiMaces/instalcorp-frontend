import { Routes } from '@angular/router';
import { BadGatewayComponent } from "./shared/components/bad-gateway/bad-gateway.component";

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
  {
    path:'maintenance',
    component: BadGatewayComponent,
  }
];
