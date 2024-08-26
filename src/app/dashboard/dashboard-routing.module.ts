import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
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
        component: CalendarViewComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
