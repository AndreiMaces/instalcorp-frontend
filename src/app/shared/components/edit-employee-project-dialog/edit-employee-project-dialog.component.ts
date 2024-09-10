import { Component, Inject } from '@angular/core';
import { EmployeeProjectFormComponent } from '../employee-project-form/employee-project-form.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { IEmployeeProject } from '../../../core/models/IEmployeeProject';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmployeeProjectControllerService } from '../../../core/api/controllers/employee-project-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-employee-project-dialog',
  standalone: true,
  imports: [EmployeeProjectFormComponent, MatProgressSpinner, NgIf],
  templateUrl: './edit-employee-project-dialog.component.html',
  styleUrl: './edit-employee-project-dialog.component.scss',
})
export class EditEmployeeProjectDialogComponent {
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private employeeProjectController: EmployeeProjectControllerService,
    private dialogRef: MatDialogRef<EditEmployeeProjectDialogComponent>,
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

  editEmployeeProject(newEmployeeProject: Partial<IEmployeeProject>): void {
    this.isLoading = true;
    this.employeeProjectController.editEmployeeProject(this.data.employeeProject.id, newEmployeeProject).subscribe({
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
