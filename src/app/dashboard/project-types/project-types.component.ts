import { Component, OnInit } from '@angular/core';
import { IssueTypeControllerService } from '../../core/api/controllers/issue-type-controller.service';
import { IIssueType } from '../../core/models/IIssueType';
import { ProjectTypeComponent } from './project-type/project-type.component';
import { NgForOf, NgIf } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectTypeDialogComponent } from './create-project-type-dialog/create-project-type-dialog.component';
import { RouterLink } from '@angular/router';
import { ArchivedProjectTypeComponent } from './project-types-archive/archived-project-type/archived-project-type.component';

@Component({
  selector: 'app-project-types',
  standalone: true,
  imports: [
    ProjectTypeComponent,
    NgForOf,
    NgIf,
    MatProgressSpinner,
    MatButton,
    MatIcon,
    RouterLink,
    MatAnchor,
    ArchivedProjectTypeComponent,
  ],
  host: {
    class: 'flex-grow',
  },
  templateUrl: './project-types.component.html',
  styleUrl: './project-types.component.scss',
})
export class ProjectTypesComponent implements OnInit {
  issueTypes: IIssueType[];
  isLoading = true;

  constructor(
    private issueTypeController: IssueTypeControllerService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getIssueTypes();
  }

  getIssueTypes(): void {
    this.isLoading = true;
    this.issueTypeController.getIssueTypes().subscribe({
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

  openCreateProjectTypeDialog(): void {
    this.dialog
      .open(CreateProjectTypeDialogComponent, {
        maxWidth: '100%',
        width: '800px',
        maxHeight: '90vh',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this.getIssueTypes();
      });
  }

  removeIssueType(issueTypeId: number): void {
    this.isLoading = true;
    this.issueTypeController.deleteIssueType(issueTypeId).subscribe({
      next: () => {
        this.getIssueTypes();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
