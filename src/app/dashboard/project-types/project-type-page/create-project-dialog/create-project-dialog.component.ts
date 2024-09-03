import { Component, Inject } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ProjectTypeFormComponent } from '../../shared/components/project-type-form/project-type-form.component';
import { ConfirmationDialogComponent } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IProjectType } from '../../../../core/models/IProjectType';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { IProject } from '../../../../core/models/IProject';
import { ProjectControllerService } from '../../../../core/api/controllers/project-controller.service';

@Component({
  selector: 'app-create-project-dialog',
  standalone: true,
  imports: [MatProgressSpinner, NgIf, ProjectTypeFormComponent, ProjectFormComponent],
  templateUrl: './create-project-dialog.component.html',
  styleUrl: './create-project-dialog.component.scss',
})
export class CreateProjectDialogComponent {
  isLoading = false;
  project: Partial<IProject>;

  constructor(
    private projectController: ProjectControllerService,
    private snackBarService: MatSnackBar,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<CreateProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { projectType: IProjectType },
  ) {}

  ngOnInit(): void {
    this.initType();
  }

  initType(): void {
    this.project = {
      color: this.data?.projectType.color,
      typeId: this?.data?.projectType?.id,
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

  createProject(newIssue: Partial<IProject>): void {
    this.isLoading = true;
    this.projectController.createProject(newIssue).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.dialogRef.close(res);
      },
      error: () => {
        this.isLoading = false;
        this.snackBarService.open('A apărut o eroare la crearea proiectului.', 'Close', {
          duration: 3000,
        });
      },
    });
  }
}
