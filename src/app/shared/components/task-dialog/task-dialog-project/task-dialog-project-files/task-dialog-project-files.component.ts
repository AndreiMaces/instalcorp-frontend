import { Component, Input } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgForOf, NgIf } from '@angular/common';
import { FileControllerService } from '../../../../../core/api/controllers/file-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITask } from '../../../../../core/models/ITask';
import { ProjectControllerService } from '../../../../../core/api/controllers/project-controller.service';

@Component({
  selector: 'app-task-dialog-project-files',
  standalone: true,
  imports: [MatButton, MatIcon, MatIconButton, MatProgressSpinner, NgForOf, NgIf],
  templateUrl: './task-dialog-project-files.component.html',
  styleUrl: './task-dialog-project-files.component.scss',
})
export class TaskDialogProjectFilesComponent {
  @Input() task: ITask;
  isLoading = false;

  constructor(
    private fileController: FileControllerService,
    private snackBarService: MatSnackBar,
    private projectController: ProjectControllerService,
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    Array.prototype.forEach.call(target.files, (file) => this.uploadFile(file));
  }

  updateProjectFiles(): void {
    this.isLoading = true;
    this.projectController.editIProject(this.task.project.id, { media: this.task.project.media }).subscribe({
      next: () => {},
      error: (err: { message: string }) => {
        if (err.message.includes('format')) {
        } else
          this.snackBarService.open('Eroare la actualizarea proiectului.', 'Close', {
            duration: 3000,
          });
        this.isLoading = false;
      },
    });
    this.isLoading = false;
  }

  uploadFile(file: File): void {
    this.isLoading = true;
    this.fileController.uploadFile(file).subscribe({
      next: (res) => {
        this.task.project.media.push(res.url);
        this.updateProjectFiles();
      },
      error: () => {
        this.snackBarService.open('Eroare la incarcarea fisierului.', 'Close', {
          duration: 3000,
        });
        this.isLoading = false;
      },
    });
  }
}
