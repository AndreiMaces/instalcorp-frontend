import { Component, Input } from '@angular/core';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDateRangeInput, MatDateRangePicker, MatEndDate, MatStartDate } from '@angular/material/datepicker';
import { MatIcon } from '@angular/material/icon';
import { MatOptgroup, MatOption } from '@angular/material/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSelect } from '@angular/material/select';
import { QuillEditorComponent, QuillViewHTMLComponent } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskStatusComponent } from '../../task-status/task-status.component';
import { ITask } from '../../../../../core/models/ITask';
import { EStatus } from '../../../../../dashboard/project-types/shared/enums/EStatus';
import { ProjectControllerService } from '../../../../../core/api/controllers/project-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-task-dialog-project-status',
  standalone: true,
  imports: [
    DatePipe,
    MatButton,
    MatDateRangeInput,
    MatDateRangePicker,
    MatEndDate,
    MatIcon,
    MatIconButton,
    MatOptgroup,
    MatOption,
    MatProgressSpinner,
    MatSelect,
    MatStartDate,
    NgForOf,
    NgIf,
    QuillEditorComponent,
    QuillViewHTMLComponent,
    ReactiveFormsModule,
    TaskStatusComponent,
    FormsModule,
  ],
  templateUrl: './task-dialog-project-status.component.html',
  styleUrl: './task-dialog-project-status.component.scss',
})
export class TaskDialogProjectStatusComponent {
  @Input() task: ITask;

  constructor(
    private projectController: ProjectControllerService,
    private matSnackbar: MatSnackBar,
    private matDialog: MatDialog,
  ) {}

  openConfirmationDialog(status: EStatus) {
    const oldStatus = this.task?.project?.status;
    this.matDialog
      .open(ConfirmationDialogComponent, {
        data: {
          message:
            'Esti sigur ca vrei sa schimbi statusul proiectului? Asta va schimba si statusurile sarcinilor. Acest lucru este ireversibil.',
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.updateTaskStatus(status);
        } else {
          this.task.project.status = oldStatus;
        }
      });
  }

  updateTaskStatus(status: EStatus) {
    const oldStatus = this.task?.project?.status;
    this.task.project.status = status;
    this.projectController.changeStatus(this.task.project.id, status).subscribe({
      next: () => {
        if (this.task.status === EStatus.IN_PROGRESS || this.task.status === EStatus.NOT_STARTED) {
          this.task.status = status;
        }
        this.task.project.status = status;
      },
      error: () => {
        this.task.status = oldStatus;
        this.matSnackbar.open('Eroare la actualizarea statutului.', 'Close');
      },
    });
  }

  protected readonly EStatus = EStatus;
}
