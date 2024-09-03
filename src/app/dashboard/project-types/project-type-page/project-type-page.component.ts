import { Component } from '@angular/core';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { ProjectTypeRowComponent } from '../project-type-row/project-type-row.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectTypeControllerService } from '../../../core/api/controllers/project-type-controller.service';
import { IProjectType } from '../../../core/models/IProjectType';
import { BradcrumbsMenuComponent } from '../../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { ProjectRowComponent } from './project-row/project-row.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectDialogComponent } from './create-project-dialog/create-project-dialog.component';
import { ProjectControllerService } from '../../../core/api/controllers/project-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { EditProjectTypeDialogComponent } from '../shared/components/edit-project-type-dialog/edit-project-type-dialog.component';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-project-type-row-page',
  standalone: true,
  imports: [
    MatAnchor,
    MatButton,
    MatIcon,
    MatProgressSpinner,
    NgForOf,
    NgIf,
    ProjectTypeRowComponent,
    RouterLink,
    BradcrumbsMenuComponent,
    ProjectRowComponent,
    CdkDropList,
    CdkDrag,
    MatFormField,
    MatLabel,
    MatSelect,
    ReactiveFormsModule,
    MatOption,
    MatMenu,
    MatMenuItem,
    MatIconButton,
    MatMenuTrigger,
    JsonPipe,
    MatSlideToggle,
  ],
  host: {
    class: 'flex-grow',
  },
  templateUrl: './project-type-page.component.html',
  styleUrl: './project-type-page.component.scss',
})
export class ProjectTypePageComponent {
  projectType: IProjectType;
  isLoading = false;
  isLoadingIssues = false;
  sortForm = new FormGroup({
    sortingCriteria: new FormControl<string>('order', [Validators.required]),
    sortingOrder: new FormControl<string>('desc', [Validators.required]),
  });

  constructor(
    private projectTypeController: ProjectTypeControllerService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private projectController: ProjectControllerService,
    private snackBarService: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getProjectType();
    this.subscribeToFormValueChange();
    this.subscribeToRouteChange();
    this.prefillForm();
  }

  prefillForm(): void {
    this.sortForm.patchValue(this.route.snapshot.queryParams);
  }

  subscribeToFormValueChange(): void {
    this.sortForm.valueChanges.subscribe(() => {
      this.updateQueryParams();
    });
  }

  updateQueryParams(): void {
    this.router.navigate([], {
      queryParams: this.createGetProjectTypeIssuesPayload(),
    });
  }

  subscribeToRouteChange(): void {
    this.route.queryParams.subscribe(() => {
      this.getProjectTypeIssues();
    });
  }

  getProjectType(): void {
    this.isLoading = true;
    this.projectTypeController.getProjectType(this.route.snapshot.params['id'], this.createGetProjectTypeIssuesPayload()).subscribe({
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

  openCreateIssueDialog(): void {
    this.dialog
      .open(CreateProjectDialogComponent, {
        data: {
          projectType: this.projectType,
        },
        width: '1200px',
        maxWidth: '100%',
        maxHeight: '90vh',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.getProjectType();
        }
      });
  }

  openEditIssueTypeDialog(): void {
    this.dialog
      .open(EditProjectTypeDialogComponent, {
        data: {
          projectType: this.createEditPayload(),
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

  createEditPayload(): IProjectType {
    return {
      title: this.projectType.title,
      color: this.projectType.color,
      description: this.projectType.description,
      id: this.projectType.id,
    };
  }

  deleteIssueType(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          message: `Sunteți sigur că doriți să ștergeți tipul de proiect "${this.projectType.title}"?`,
        },
        width: '800px',
        maxWidth: '100%',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.isLoading = true;
          this.projectTypeController.deleteProjectType(this.projectType.id).subscribe({
            next: () => {
              this.isLoading = false;
              this.router.navigate(['/dashboard/project-types']);
            },
            error: (error) => {
              this.snackBarService.open(error.error.error, 'Close', {
                duration: 3000,
              });
              this.isLoading = false;
            },
          });
        }
      });
  }

  removeIssue(projectId: number): void {
    this.isLoading = true;
    this.projectController.removeProject(projectId).subscribe({
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

  cloneIssue(projectId: number): void {
    this.isLoading = true;
    this.projectController.cloneProject(projectId).subscribe({
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

  getProjectTypeIssues(): void {
    this.isLoadingIssues = true;
    this.projectTypeController.getProjectType(this.route.snapshot.params['id'], this.createGetProjectTypeIssuesPayload()).subscribe({
      next: (projectType) => {
        this.projectType.projects = projectType.projects;
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

  createGetProjectTypeIssuesPayload(): { sortingCriteria: string; sortingOrder: string } {
    return {
      sortingCriteria: this.sortForm.controls.sortingCriteria.value,
      sortingOrder: this.sortForm.controls.sortingOrder.value,
    };
  }

  onSortChange(): void {
    this.getProjectType();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projectType?.projects, event.previousIndex, event.currentIndex);
    this.projectTypeController.updateProjectsOrder(this.projectType).subscribe({
      next: () => {},
      error: (error) => {
        console.error(error);
      },
    });
  }
}
