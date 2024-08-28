import { Component } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ProjectTypeFormComponent } from '../../project-types/shared/components/project-type-form/project-type-form.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { IEmployee } from '../../../core/models/IEmployee';
import { EmployeeControllerService } from '../../../core/api/controllers/employee-controller.service';

@Component({
  selector: 'app-create-employee-dialog',
  standalone: true,
  imports: [MatProgressSpinner, NgIf, ProjectTypeFormComponent, EmployeeFormComponent],
  templateUrl: './create-employee-dialog.component.html',
  styleUrl: './create-employee-dialog.component.scss',
})
export class CreateEmployeeDialogComponent {
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private employeeController: EmployeeControllerService,
    private dialogRef: MatDialogRef<CreateEmployeeDialogComponent>,
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

  createEmployee(newEmployee: Partial<IEmployee>): void {
    this.isLoading = true;
    this.employeeController.createEmployee(newEmployee).subscribe({
      next: () => {
        this.isLoading = false;
        this.dialogRef.close(true);
      },
      error: () => {
        this.isLoading = false;
        this.snackBarService.open('A apărut o eroare la adăugarea angajatului.', 'Close', {
          duration: 3000,
        });
      },
    });
  }
}
