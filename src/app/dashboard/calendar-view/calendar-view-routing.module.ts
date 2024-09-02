import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './calendar-view.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Calendar' },
    component: CalendarViewComponent,
    children: [
      {
        path: '',
        data: {
          breadcrumb: 'Angajați',
        },
        loadChildren: () => import('./employees-layout/employees-layout.module').then((m) => m.EmployeesLayoutModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarViewRoutingModule {}
