import { Component, Input } from '@angular/core';
import { ITask } from '../../../../core/models/ITask';
import { NgForOf, NgIf } from '@angular/common';
import { EStatus } from '../../../../dashboard/project-types/shared/enums/EStatus';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatOption, MatSelect } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { TaskControllerService } from '../../../../core/api/controllers/task-controller.service';

@Component({
  selector: 'app-task-status',
  standalone: true,
  imports: [NgIf, MatIconButton, MatIcon, MatSelect, MatOption, NgForOf, FormsModule],
  templateUrl: './task-status.component.html',
  styleUrl: './task-status.component.scss',
})
export class TaskStatusComponent {
  @Input() task: ITask;

  constructor(private taskController: TaskControllerService) {}

  updateTaskStatus(status: EStatus) {
    const oldStatus = this.task.status;

    if (oldStatus === status) {
      return;
    }

    this.taskController
      .editTask(this.task.id, {
        status,
      })
      .subscribe(() => {
        this.task.status = status;
      });
  }

  protected readonly EStatus = EStatus;
}
