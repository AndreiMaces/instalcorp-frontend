import { Component, Inject } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ProjectTypeFormComponent } from '../../shared/components/project-type-form/project-type-form.component';
import { ConfirmationDialogComponent } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IssueTypeControllerService } from '../../../../core/api/controllers/issue-type-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IIssueType } from '../../../../core/models/IIssueType';

@Component({
  selector: 'app-edit-project-type-dialog',
  standalone: true,
  imports: [MatProgressSpinner, NgIf, ProjectTypeFormComponent],
  templateUrl: './edit-project-type-dialog.component.html',
  styleUrl: './edit-project-type-dialog.component.scss',
})
export class EditProjectTypeDialogComponent {
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private issueTypeController: IssueTypeControllerService,
    private dialogRef: MatDialogRef<EditProjectTypeDialogComponent>,
    private snackBarService: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { issueType: IIssueType },
  ) {}

  editProjectType(newIssueType: Partial<IIssueType>): void {
    this.isLoading = true;
    this.issueTypeController.updateIssueType(this.createPayload(newIssueType)).subscribe({
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

  createPayload(newIssueType: Partial<IIssueType>): IIssueType {
    return {
      ...this.data.issueType,
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
