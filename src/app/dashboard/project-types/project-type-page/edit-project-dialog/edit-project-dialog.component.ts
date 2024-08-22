import { Component, Inject } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { ConfirmationDialogComponent } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IIssueType } from '../../../../core/models/IIssueType';
import { CreateProjectDialogComponent } from '../create-project-dialog/create-project-dialog.component';
import { IIssue } from '../../../../core/models/IIssue';
import { IssueControllerService } from '../../../../core/api/controllers/issue-controller.service';

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
    private issueController: IssueControllerService,
    private snackBarService: MatSnackBar,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<CreateProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { issue: IIssue },
  ) {}

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

  editProject(newIssue: Partial<IIssueType>): void {
    this.isLoading = true;
    this.issueController.editIssue(this.data.issue.id, newIssue).subscribe({
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
