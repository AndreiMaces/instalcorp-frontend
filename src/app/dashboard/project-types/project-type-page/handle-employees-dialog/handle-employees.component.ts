import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeIssueFormComponent } from '../project-form/employee-issue-form/employee-issue-form.component';
import { IIssue } from '../../../../core/models/IIssue';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { ProjectTypeFormComponent } from '../../shared/components/project-type-form/project-type-form.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { IssueControllerService } from '../../../../core/api/controllers/issue-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-handle-employees-dialog',
  standalone: true,
  imports: [EmployeeIssueFormComponent, MatProgressSpinner, NgIf, ProjectTypeFormComponent, MatButton],
  templateUrl: './handle-employees.component.html',
  styleUrl: './handle-employees.component.scss',
})
export class HandleEmployeesComponent implements OnInit {
  isLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { issue: Partial<IIssue> },
    private dialog: MatDialog,
    private issueController: IssueControllerService,
    private snackBarService: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    this.isLoading = true;
    this.issueController.getIssue(this.data.issue.id).subscribe({
      next: (res) => {
        this.data.issue = res;
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
