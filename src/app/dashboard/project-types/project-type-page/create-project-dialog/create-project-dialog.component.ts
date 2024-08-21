import { Component, Inject } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ProjectTypeFormComponent } from '../../shared/components/project-type-form/project-type-form.component';
import { ConfirmationDialogComponent } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IIssueType } from '../../../../core/models/IIssueType';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { IIssue } from '../../../../core/models/IIssue';
import { IssueControllerService } from '../../../../core/api/controllers/issue-controller.service';

@Component({
  selector: 'app-create-project-dialog',
  standalone: true,
  imports: [MatProgressSpinner, NgIf, ProjectTypeFormComponent, ProjectFormComponent],
  templateUrl: './create-project-dialog.component.html',
  styleUrl: './create-project-dialog.component.scss',
})
export class CreateProjectDialogComponent {
  isLoading = false;
  project: Partial<IIssue>;

  constructor(
    private issueController: IssueControllerService,
    private snackBarService: MatSnackBar,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<CreateProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { issueType: IIssueType },
  ) {}

  ngOnInit(): void {
    this.initType();
  }

  initType(): void {
    this.project = {
      typeId: this?.data?.issueType?.id,
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

  createProject(newIssue: Partial<IIssue>): void {
    this.isLoading = true;
    this.issueController.createIssue(newIssue).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.dialogRef.close(res);
      },
      error: () => {
        this.isLoading = false;
        this.snackBarService.open('A apărut o eroare la crearea proiectului.', 'Close', {
          duration: 3000,
        });
      },
    });
  }
}
