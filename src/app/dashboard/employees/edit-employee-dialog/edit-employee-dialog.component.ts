import { Component, Inject } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ProjectTypeFormComponent } from '../../project-types/shared/components/project-type-form/project-type-form.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { IEmployee } from '../../../core/models/IEmployee';
import { EmployeeControllerService } from '../../../core/api/controllers/employee-controller.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-edit-employee-dialog',
  standalone: true,
  imports: [MatProgressSpinner, NgIf, ProjectTypeFormComponent, EmployeeFormComponent],
  templateUrl: './edit-employee-dialog.component.html',
  styleUrl: './edit-employee-dialog.component.scss',
})
export class EditEmployeeDialogComponent {
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private employeeController: EmployeeControllerService,
    private dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
    private snackBarService: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { employee: IEmployee },
  ) {}

  editEmployee(newEmployee: Partial<IEmployee>): void {
    this.isLoading = true;
    this.employeeController.updateEmployee(this.data.employee.id, this.createPayload(newEmployee)).subscribe({
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

  createPayload(newEmployee: Partial<IEmployee>): IEmployee {
    const value = {
      ...this.data.employee,
      ...newEmployee,
    };
    if (value?.phone?.length === 0) delete value.phone;
    return value;
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
