import { Component, OnInit } from '@angular/core';
import { BradcrumbsMenuComponent } from '../../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgForOf, NgIf } from '@angular/common';
import { ProjectRowComponent } from '../project-type-page/project-row/project-row.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectTypeControllerService } from '../../../core/api/controllers/project-type-controller.service';
import { ProjectControllerService } from '../../../core/api/controllers/project-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProjectType } from '../../../core/models/IProjectType';
import { ArchivedProjectComponent } from './archived-project/archived-project.component';

@Component({
  selector: 'app-project-type-row-page-archive',
  standalone: true,
  imports: [
    BradcrumbsMenuComponent,
    CdkDrag,
    CdkDropList,
    MatAnchor,
    MatButton,
    MatIcon,
    MatProgressSpinner,
    NgForOf,
    NgIf,
    ProjectRowComponent,
    RouterLink,
    ArchivedProjectComponent,
  ],
  host: {
    class: 'flex-grow',
  },
  templateUrl: './project-type-page-archive.component.html',
  styleUrl: './project-type-page-archive.component.scss',
})
export class ProjectTypePageArchiveComponent implements OnInit {
  projectType: IProjectType;
  isLoading = false;

  constructor(
    private projectTypeController: ProjectTypeControllerService,
    private route: ActivatedRoute,
    private projectController: ProjectControllerService,
    private snackBarService: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getProjectArchive();
  }

  restoreProject(projectId: number): void {
    this.isLoading = true;
    this.projectController.restoreProject(projectId).subscribe({
      next: () => {
        this.getProjectArchive();
      },
      error: () => {
        this.snackBarService.open('Proiectul nu a putut fi restaurat.', 'Close', {
          duration: 3000,
        });
        this.isLoading = false;
      },
    });
  }

  getProjectArchive(): void {
    this.isLoading = true;
    this.projectTypeController.getArchive(this.route.snapshot.params['id']).subscribe({
      next: (projectType) => {
        this.projectType = projectType;
        this.projectType.projects.map((project) => {
          return {
            ...project,
            typeId: this.projectType.id,
            type: {
              id: this.projectType.id,
              title: this.projectType.title,
            },
          };
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      },
    });
  }
}
