import { Component, Inject, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ProjectTypeFormComponent } from '../../shared/components/project-type-form/project-type-form.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeProjectFormComponent } from '../project-form/employee-project-form/employee-project-form.component';
import { ProjectControllerService } from '../../../../core/api/controllers/project-controller.service';
import { IProject } from '../../../../core/models/IProject';

@Component({
  selector: 'app-handle-employees-dialog',
  standalone: true,
  imports: [EmployeeProjectFormComponent, MatProgressSpinner, NgIf, ProjectTypeFormComponent, MatButton],
  templateUrl: './handle-employees.component.html',
  styleUrl: './handle-employees.component.scss',
})
export class HandleEmployeesComponent implements OnInit {
  isLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { project: Partial<IProject> },
    private dialog: MatDialog,
    private projectController: ProjectControllerService,
    private snackBarService: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    this.isLoading = true;
    this.projectController.getProject(this.data.project.id).subscribe({
      next: (res) => {
        this.data.project = res;
        this.isLoading = false;
      },
      error: () => {
        this.snackBarService.open('Ceva nu a mers bine', 'OK', { duration: 3000 });
        this.isLoading = false;
      },
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
