import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'calendar',
        data: { breadcrumb: 'Calendar' },
        loadChildren: () => import('./calendar-view/calendar-view.module').then((m) => m.CalendarViewModule),
      },
      {
        path: 'project-types',
        data: { breadcrumb: 'Tipuri de proiecte' },
        loadChildren: () => import('./project-types/project-types.module').then((m) => m.ProjectTypesModule),
      },
      {
        path: 'employees',
        data: {
          breadcrumb: 'Angajați',
        },
        loadChildren: () => import('./employees/employees.module').then((m) => m.EmployeesModule),
      },
      {
        path: 'free-days',
        data: {
          breadcrumb: 'Zile libere',
        },
        loadChildren: () => import('./free-days/free-days.module').then((m) => m.FreeDaysModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
