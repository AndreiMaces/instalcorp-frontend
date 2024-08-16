import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgForOf, NgIf } from '@angular/common';
import { ProjectTypeComponent } from '../project-type/project-type.component';
import { IIssueType } from '../../../core/models/IIssueType';
import { IssueTypeControllerService } from '../../../core/api/controllers/issue-type-controller.service';
import { MatDialog } from '@angular/material/dialog';
import { ArchivedProjectTypeComponent } from './archived-project-type/archived-project-type.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-types-archive',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatProgressSpinner,
    NgForOf,
    NgIf,
    ProjectTypeComponent,
    ArchivedProjectTypeComponent,
    MatAnchor,
    RouterLink,
  ],
  host: {
    class: 'flex-grow',
  },
  templateUrl: './project-types-archive.component.html',
  styleUrl: './project-types-archive.component.scss',
})
export class ProjectTypesArchiveComponent {
  issueTypes: IIssueType[];
  isLoading = true;

  constructor(
    private issueTypeController: IssueTypeControllerService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getIssueTypesArchive();
  }

  getIssueTypesArchive(): void {
    this.isLoading = true;
    this.issueTypeController.getIssueTypesArchive().subscribe({
      next: (issueTypes) => {
        this.issueTypes = issueTypes;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      },
    });
  }

  restoreIssueType(issueTypeId: number): void {
    this.isLoading = true;
    this.issueTypeController.restoreIssueType(issueTypeId).subscribe({
      next: () => {
        this.getIssueTypesArchive();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
