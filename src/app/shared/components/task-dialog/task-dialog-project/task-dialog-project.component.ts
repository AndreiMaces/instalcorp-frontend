import { Component, Input } from '@angular/core';
import { ITask } from '../../../../core/models/ITask';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { ProjectControllerService } from '../../../../core/api/controllers/project-controller.service';
import { TaskDialogProjectFilesComponent } from './task-dialog-project-files/task-dialog-project-files.component';
import { TaskDialogProjectStatusComponent } from './task-dialog-project-status/task-dialog-project-status.component';

@Component({
  selector: 'app-task-dialog-project',
  standalone: true,
  imports: [DatePipe, NgForOf, NgIf, TaskDialogProjectFilesComponent, TaskDialogProjectStatusComponent],
  templateUrl: './task-dialog-project.component.html',
  styleUrl: './task-dialog-project.component.scss',
})
export class TaskDialogProjectComponent {
  @Input() task: ITask;

  constructor(private projectController: ProjectControllerService) {}

  updateProjectTitle(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const oldTitle = this.task.project.title;

    if (value && value !== oldTitle) {
      this.task.project.title = value;
      this.projectController
        .editIProject(this.task.project.id, {
          title: value,
        })
        .subscribe({
          next: () => {},
          error: () => {
            this.task.project.title = oldTitle;
          },
        });
    }
  }
}
