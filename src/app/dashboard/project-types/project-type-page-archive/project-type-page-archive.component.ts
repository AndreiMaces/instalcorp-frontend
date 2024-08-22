import { Component, OnInit } from '@angular/core';
import { BradcrumbsMenuComponent } from '../../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgForOf, NgIf } from '@angular/common';
import { ProjectTypeIssueComponent } from '../project-type-page/project-type-issue/project-type-issue.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IssueTypeControllerService } from '../../../core/api/controllers/issue-type-controller.service';
import { IssueControllerService } from '../../../core/api/controllers/issue-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IIssueType } from '../../../core/models/IIssueType';
import { ArchivedProjectComponent } from './archived-project/archived-project.component';

@Component({
  selector: 'app-project-type-page-archive',
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
    ProjectTypeIssueComponent,
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
  projectType: IIssueType;
  isLoading = false;

  constructor(
    private issueTypeController: IssueTypeControllerService,
    private route: ActivatedRoute,
    private issueController: IssueControllerService,
    private snackBarService: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getProjectArchive();
  }

  restoreProject(issueId: number): void {
    this.isLoading = true;
    this.issueController.restoreIssue(issueId).subscribe({
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
    this.issueTypeController.getArchive(this.route.snapshot.params['id']).subscribe({
      next: (projectType) => {
        this.projectType = projectType;
        this.projectType.issues.map((issue) => {
          return {
            ...issue,
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
