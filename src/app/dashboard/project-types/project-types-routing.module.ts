import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTypesComponent } from './project-types.component';
import { ProjectTypesArchiveComponent } from './project-types-archive/project-types-archive.component';
import { ProjectTypePageComponent } from './project-type-page/project-type-page.component';

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
  {
    path: ':id',
    component: ProjectTypePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectTypesRoutingModule {}
