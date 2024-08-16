import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTypesComponent } from './project-types.component';
import { ProjectTypesArchiveComponent } from './project-types-archive/project-types-archive.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectTypesComponent,
    pathMatch: 'full',
  },
  {
    path: 'archive',
    component: ProjectTypesArchiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectTypesRoutingModule {}
