import { Component, Inject } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ProjectTypeFormComponent } from '../../../dashboard/project-types/shared/components/project-type-form/project-type-form.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { EmployeeProjectControllerService } from '../../../core/api/controllers/employee-project-controller.service';
import { IEmployeeProject } from '../../../core/models/IEmployeeProject';
import { EmployeeProjectFormComponent } from '../employee-project-form/employee-project-form.component';

@Component({
  selector: 'app-create-employee-project-dialog',
  standalone: true,
  imports: [MatProgressSpinner, NgIf, ProjectTypeFormComponent, EmployeeProjectFormComponent],
  templateUrl: './create-employee-project-dialog.component.html',
  styleUrl: './create-employee-project-dialog.component.scss',
})
export class CreateEmployeeProjectDialogComponent {
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private employeeProjectController: EmployeeProjectControllerService,
    private dialogRef: MatDialogRef<CreateEmployeeProjectDialogComponent>,
    private snackBarService: MatSnackBar,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      employeeProject: IEmployeeProject;
    },
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

  createEmployeeProject(newEmployeeProject: Partial<IEmployeeProject>): void {
    this.isLoading = true;
    this.employeeProjectController.createEmployeeProject(newEmployeeProject).subscribe({
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
