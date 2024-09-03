import { Component, Inject } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { ConfirmationDialogComponent } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IProjectType } from '../../../../core/models/IProjectType';
import { CreateProjectDialogComponent } from '../create-project-dialog/create-project-dialog.component';
import { IProject } from '../../../../core/models/IProject';
import { ProjectControllerService } from '../../../../core/api/controllers/project-controller.service';

@Component({
  selector: 'app-edit-project-dialog',
  standalone: true,
  imports: [MatProgressSpinner, NgIf, ProjectFormComponent],
  templateUrl: './edit-project-dialog.component.html',
  styleUrl: './edit-project-dialog.component.scss',
})
export class EditProjectDialogComponent {
  isLoading = false;

  constructor(
    private projectController: ProjectControllerService,
    private snackBarService: MatSnackBar,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<CreateProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { project: IProject },
  ) {}

  ngOnInit(): void {
    this.getProject();
  }

  openDenyConfirmationDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        maxWidth: '100%',
        width: '800px',
        disableClose: true,
        data: {
          message: 'Sunteți sigur că doriți să anulați? Toate modificările vor fi pierdute.',
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this.dialog.closeAll();
      });
  }

  getProject(): void {
    this.isLoading = true;
    this.projectController.getProject(this.data.project.id).subscribe({
      next: (project) => {
        this.data.project = project;
        this.isLoading = false;
      },
      error: () => {
        this.snackBarService.open('A apărut o eroare la preluarea proiectului.', 'Close', {
          duration: 3000,
        });
        this.isLoading = false;
      },
    });
  }

  editProject(newIssue: Partial<IProjectType>): void {
    this.isLoading = true;
    this.projectController.editIProject(this.data.project.id, newIssue).subscribe({
      next: () => {
        this.isLoading = false;
        this.dialogRef.close(true);
      },
      error: () => {
        this.snackBarService.open('A apărut o eroare la editarea proiectului.', 'Close', {
          duration: 3000,
        });
        this.isLoading = false;
      },
    });
  }
}
