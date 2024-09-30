import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTypesComponent } from './project-types.component';
import { ProjectTypesArchiveComponent } from './project-types-archive/project-types-archive.component';
import { ProjectTypePageComponent } from './project-type-page/project-type-page.component';
import { ProjectTypePageArchiveComponent } from './project-type-page-archive/project-type-page-archive.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectTypesComponent,
    pathMatch: 'full',
  },
  {
    path: 'archive',
    data: { breadcrumb: 'Arhivă' },
    component: ProjectTypesArchiveComponent,
  },
  {
    path: ':id/:name',
    data: { breadcrumb: 'Project Type' },
    children: [
      {
        path: '',
        component: ProjectTypePageComponent,
      },
      {
        path: 'archive',
        data: { breadcrumb: 'Arhivă' },
        component: ProjectTypePageArchiveComponent,
      },
      {
        path: ':projectId/:projectName',
        data: {
          breadcrumb: 'Issue',
        },
        loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectTypesRoutingModule {}
