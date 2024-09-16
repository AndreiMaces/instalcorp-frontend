import { Component, Inject } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ITask } from '../../../core/models/ITask';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TaskControllerService } from '../../../core/api/controllers/task-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-employee-project-dialog',
  standalone: true,
  imports: [TaskFormComponent, MatProgressSpinner, NgIf],
  templateUrl: './edit-employee-project-dialog.component.html',
  styleUrl: './edit-employee-project-dialog.component.scss',
})
export class EditEmployeeProjectDialogComponent {
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private taskController: TaskControllerService,
    private dialogRef: MatDialogRef<EditEmployeeProjectDialogComponent>,
    private snackBarService: MatSnackBar,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      task: ITask;
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

  editEmployeeProject(newEmployeeProject: Partial<ITask>): void {
    this.isLoading = true;
    this.taskController.editTask(this.data.task.id, newEmployeeProject).subscribe({
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
