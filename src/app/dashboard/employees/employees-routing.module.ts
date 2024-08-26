import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
  },
  {
    path: ':id/:name',
    data: {
      breadcrumb: 'Employee',
    },
    component: EmployeePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
