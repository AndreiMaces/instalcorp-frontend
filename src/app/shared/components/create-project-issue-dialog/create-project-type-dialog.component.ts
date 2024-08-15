import { Component } from '@angular/core';
import { ProjectTypeFormComponent } from '../project-type-form/project-type-form.component';
import { MatButton } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { IIssueType } from '../../../core/models/IIssueType';
import { IssueTypeControllerService } from '../../../core/api/controllers/issue-type-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-create-project-type-dialog',
  standalone: true,
  imports: [ProjectTypeFormComponent, MatButton, NgIf, MatProgressSpinner],
  templateUrl: './create-project-type-dialog.component.html',
  styleUrl: './create-project-type-dialog.component.scss',
})
export class CreateProjectTypeDialogComponent {
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private issueTypeController: IssueTypeControllerService,
    private dialogRef: MatDialogRef<CreateProjectTypeDialogComponent>,
    private snackBarService: MatSnackBar,
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

  createProjectType(newIssueType: Partial<IIssueType>): void {
    this.isLoading = true;
    this.issueTypeController.createIssueType(newIssueType).subscribe({
      next: () => {
        this.isLoading = false;
        this.dialogRef.close(true);
      },
      error: () => {
        this.isLoading = false;
        this.snackBarService.open('A apărut o eroare la crearea tipului de proiect.', 'Close', {
          duration: 3000,
        });
      },
    });
  }
}
