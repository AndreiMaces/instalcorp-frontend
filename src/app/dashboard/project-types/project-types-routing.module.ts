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
        path: ':issueId/:issueName',
        data: {
          breadcrumb: 'Issue',
        },
        loadChildren: () => import('./issues/issues.module').then((m) => m.IssuesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectTypesRoutingModule {}
