import { Component, Inject } from '@angular/core';
import { EmployeeFormComponent } from '../../employees/employee-form/employee-form.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { IFreeDay } from '../../../core/models/IFreeDay';
import { FreeDayFormComponent } from '../free-day-form/free-day-form.component';
import { FreeDayControllerService } from '../../../core/api/controllers/free-day-controller.service';

@Component({
  selector: 'app-edit-free-day',
  standalone: true,
  imports: [EmployeeFormComponent, MatProgressSpinner, NgIf, FreeDayFormComponent],
  templateUrl: './edit-free-day.component.html',
  styleUrl: './edit-free-day.component.scss',
})
export class EditFreeDayComponent {
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private freeDayController: FreeDayControllerService,
    private dialogRef: MatDialogRef<EditFreeDayComponent>,
    private snackBarService: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { freeDay: IFreeDay },
  ) {}

  editEmployee(newFreeDay: Partial<IFreeDay>): void {
    this.isLoading = true;
    this.freeDayController.updateFreeDay(this.data.freeDay.id, this.createPayload(newFreeDay)).subscribe({
      next: () => {
        this.isLoading = false;
        this.dialogRef.close(true);
      },
      error: () => {
        this.isLoading = false;
        this.snackBarService.open('A apărut o eroare la editarea zilei libere.', 'Close', {
          duration: 3000,
        });
      },
    });
  }

  createPayload(newFreeDay: Partial<IFreeDay>): IFreeDay {
    return {
      ...this.data.freeDay,
      ...newFreeDay,
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
