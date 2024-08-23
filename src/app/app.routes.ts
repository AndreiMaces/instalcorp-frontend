import { Routes } from '@angular/router';
import { BadGatewayComponent } from "./shared/components/bad-gateway/bad-gateway.component";
import { NotFoundPageComponent } from "./shared/components/not-found-page/not-found-page.component";

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
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];
