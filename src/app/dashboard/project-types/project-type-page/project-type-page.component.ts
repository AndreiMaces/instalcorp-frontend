import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgForOf, NgIf } from '@angular/common';
import { ProjectTypeComponent } from '../project-type/project-type.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IssueTypeControllerService } from '../../../core/api/controllers/issue-type-controller.service';
import { IIssueType } from '../../../core/models/IIssueType';
import { BradcrumbsMenuComponent } from '../../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { ProjectTypeIssueComponent } from './project-type-issue/project-type-issue.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectDialogComponent } from './create-project-dialog/create-project-dialog.component';
import { IssueControllerService } from '../../../core/api/controllers/issue-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-project-type-page',
  standalone: true,
  imports: [
    MatAnchor,
    MatButton,
    MatIcon,
    MatProgressSpinner,
    NgForOf,
    NgIf,
    ProjectTypeComponent,
    RouterLink,
    BradcrumbsMenuComponent,
    ProjectTypeIssueComponent,
    CdkDropList,
    CdkDrag,
  ],
  host: {
    class: 'flex-grow',
  },
  templateUrl: './project-type-page.component.html',
  styleUrl: './project-type-page.component.scss',
})
export class ProjectTypePageComponent {
  projectType: IIssueType;
  isLoading = false;

  constructor(
    private issueTypeController: IssueTypeControllerService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private issueController: IssueControllerService,
    private snackBarService: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getProjectType();
  }

  getProjectType(): void {
    this.isLoading = true;
    this.issueTypeController.getIssueType(this.route.snapshot.params['id']).subscribe({
      next: (projectType) => {
        this.projectType = projectType;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      },
    });
  }

  openCreateIssueDialog(): void {
    this.dialog
      .open(CreateProjectDialogComponent, {
        data: {
          issueType: this.projectType,
        },
        width: '1200px',
        maxWidth: '100%',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.getProjectType();
        }
      });
  }

  removeIssue(issueId: number): void {
    this.isLoading = true;
    this.issueController.removeIssue(issueId).subscribe({
      next: () => {
        this.getProjectType();
      },
      error: (error) => {
        this.snackBarService.open(error.error.error, 'Close', {
          duration: 3000,
        });
      },
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projectType?.issues, event.previousIndex, event.currentIndex);
  }
}
