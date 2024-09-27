import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeDaysComponent } from './free-days.component';

const routes: Routes = [
  {
    path: '',
    component: FreeDaysComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeDaysRoutingModule {}
