import { Component, Inject } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ProjectTypeFormComponent } from '../project-type-form/project-type-form.component';
import { ConfirmationDialogComponent } from '../../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectTypeControllerService } from '../../../../../core/api/controllers/project-type-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProjectType } from '../../../../../core/models/IProjectType';

@Component({
  selector: 'app-edit-project-type-row-dialog',
  standalone: true,
  imports: [MatProgressSpinner, NgIf, ProjectTypeFormComponent],
  templateUrl: './edit-project-type-dialog.component.html',
  styleUrl: './edit-project-type-dialog.component.scss',
})
export class EditProjectTypeDialogComponent {
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private projectTypeController: ProjectTypeControllerService,
    private dialogRef: MatDialogRef<EditProjectTypeDialogComponent>,
    private snackBarService: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { projectType: IProjectType },
  ) {}

  editProjectType(newIssueType: Partial<IProjectType>): void {
    this.isLoading = true;
    this.projectTypeController.updateProjectType(this.createPayload(newIssueType)).subscribe({
      next: () => {
        this.isLoading = false;
        this.dialogRef.close(true);
      },
      error: () => {
        this.isLoading = false;
        this.snackBarService.open('A apărut o eroare la editarea tipului de proiect.', 'Close', {
          duration: 3000,
        });
      },
    });
  }

  createPayload(newIssueType: Partial<IProjectType>): IProjectType {
    return {
      ...this.data.projectType,
      ...newIssueType,
    };
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
}
