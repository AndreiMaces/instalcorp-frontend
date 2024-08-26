import { Component, Inject } from '@angular/core';
import { EmployeeIssueFormComponent } from '../project-form/employee-issue-form/employee-issue-form.component';
import { IIssue } from '../../../../core/models/IIssue';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ProjectTypeFormComponent } from '../../shared/components/project-type-form/project-type-form.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-handle-employees-dialog',
  standalone: true,
  imports: [EmployeeIssueFormComponent, MatProgressSpinner, NgIf, ProjectTypeFormComponent, MatButton],
  templateUrl: './handle-employees.component.html',
  styleUrl: './handle-employees.component.scss',
})
export class HandleEmployeesComponent {
  isLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { issue: Partial<IIssue> },
    private dialog: MatDialog,
  ) {}

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
