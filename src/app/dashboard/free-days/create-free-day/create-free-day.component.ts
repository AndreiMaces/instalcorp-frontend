import { Component } from '@angular/core';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { EmployeeFormComponent } from '../../employees/employee-form/employee-form.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FreeDayControllerService } from '../../../core/api/controllers/free-day-controller.service';
import { IFreeDay } from '../../../core/models/IFreeDay';
import { FreeDayFormComponent } from '../free-day-form/free-day-form.component';

@Component({
  selector: 'app-create-free-day',
  standalone: true,
  imports: [EmployeeFormComponent, MatProgressSpinner, NgIf, FreeDayFormComponent],
  templateUrl: './create-free-day.component.html',
  styleUrl: './create-free-day.component.scss',
})
export class CreateFreeDayComponent {
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private freeDayController: FreeDayControllerService,
    private dialogRef: MatDialogRef<CreateFreeDayComponent>,
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

  createFreeDay(newFreeDay: Partial<IFreeDay>): void {
    this.isLoading = true;
    this.freeDayController.createFreeDay(newFreeDay).subscribe({
      next: () => {
        this.isLoading = false;
        this.dialogRef.close(true);
      },
      error: () => {
        this.isLoading = false;
        this.snackBarService.open('A apărut o eroare la adăugarea zilei libere.', 'Close', {
          duration: 3000,
        });
      },
    });
  }
}
