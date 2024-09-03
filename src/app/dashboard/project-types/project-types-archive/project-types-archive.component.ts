import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgForOf, NgIf } from '@angular/common';
import { ProjectTypeRowComponent } from '../project-type-row/project-type-row.component';
import { IProjectType } from '../../../core/models/IProjectType';
import { ProjectTypeControllerService } from '../../../core/api/controllers/project-type-controller.service';
import { MatDialog } from '@angular/material/dialog';
import { ArchivedProjectTypeComponent } from './archived-project-type/archived-project-type.component';
import { RouterLink } from '@angular/router';
import { BradcrumbsMenuComponent } from '../../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';

@Component({
  selector: 'app-project-types-archive',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatProgressSpinner,
    NgForOf,
    NgIf,
    ProjectTypeRowComponent,
    ArchivedProjectTypeComponent,
    MatAnchor,
    RouterLink,
    BradcrumbsMenuComponent,
  ],
  host: {
    class: 'flex-grow',
  },
  templateUrl: './project-types-archive.component.html',
  styleUrl: './project-types-archive.component.scss',
})
export class ProjectTypesArchiveComponent {
  projectTypes: IProjectType[];
  isLoading = true;

  constructor(
    private projectTypeController: ProjectTypeControllerService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getIssueTypesArchive();
  }

  getIssueTypesArchive(): void {
    this.isLoading = true;
    this.projectTypeController.getProjectTypesArchive().subscribe({
      next: (projectTypes) => {
        this.projectTypes = projectTypes;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      },
    });
  }

  restoreIssueType(projectTypeId: number): void {
    this.isLoading = true;
    this.projectTypeController.restoreProjectType(projectTypeId).subscribe({
      next: () => {
        this.getIssueTypesArchive();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
