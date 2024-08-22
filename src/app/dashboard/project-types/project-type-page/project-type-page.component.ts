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
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    MatFormField,
    MatLabel,
    MatSelect,
    ReactiveFormsModule,
    MatOption,
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
  isLoadingIssues = false;
  sortForm = new FormGroup({
    sortingCriteria: new FormControl<string>('order', [Validators.required]),
  });

  constructor(
    private issueTypeController: IssueTypeControllerService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private issueController: IssueControllerService,
    private snackBarService: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getProjectType();
    this.subscribeToSortingCriteriaChange();
  }

  subscribeToSortingCriteriaChange(): void {
    this.sortForm.controls.sortingCriteria.valueChanges.subscribe((res) => {
      this.getProjectTypeIssues(res);
    });
  }

  getProjectType(): void {
    this.isLoading = true;
    this.issueTypeController
      .getIssueType(this.route.snapshot.params['id'], { sortingCriteria: this.sortForm.controls.sortingCriteria.value })
      .subscribe({
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

  cloneIssue(issueId: number): void {
    this.isLoading = true;
    this.issueController.cloneIssue(issueId).subscribe({
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

  getProjectTypeIssues(sortingCriteria: string): void {
    this.isLoadingIssues = true;
    this.issueTypeController.getIssueType(this.route.snapshot.params['id'], { sortingCriteria }).subscribe({
      next: (projectType) => {
        this.projectType.issues = projectType.issues;
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
        this.isLoadingIssues = false;
      },
      error: () => {
        this.snackBarService.open('A apărut o eroare la sortarea proiectelor.', 'Close', {
          duration: 3000,
        });
        this.isLoadingIssues = false;
      },
    });
  }

  onSortChange(): void {
    this.getProjectType();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projectType?.issues, event.previousIndex, event.currentIndex);
    this.issueTypeController.updateIssuesOrder(this.projectType).subscribe({
      next: () => {},
      error: (error) => {
        console.error(error);
      },
    });
  }
}
