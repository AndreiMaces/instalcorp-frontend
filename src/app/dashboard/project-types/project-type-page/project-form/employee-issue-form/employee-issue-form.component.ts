import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { EmployeeIssueFormFactory, IEmployeeIssueForm } from './EmployeeIssueFormFactory';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployee } from '../../../../../core/models/IEmployee';
import { ValidationHelperService } from '../../../../../core/helpers/validation-helper.service';
import { MatDatepickerToggle, MatDateRangeInput, MatDateRangePicker, MatEndDate, MatStartDate } from '@angular/material/datepicker';
import { IEmployeeIssue } from '../../../../../core/models/IEmployeeIssue';
import { IIssue } from '../../../../../core/models/IIssue';
import { EmployeeIssueControllerService } from '../../../../../core/api/controllers/employee-issue-controller.service';
import { EmployeeControllerService } from '../../../../../core/api/controllers/employee-controller.service';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-employee-issue-form',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
    DatePipe,
    MatButton,
    MatFormField,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    NgIf,
    MatProgressSpinner,
    MatDateRangeInput,
    MatDateRangePicker,
    MatDatepickerToggle,
    MatEndDate,
    MatError,
    MatLabel,
    MatStartDate,
    MatSuffix,
  ],
  templateUrl: './employee-issue-form.component.html',
  styleUrl: './employee-issue-form.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class EmployeeIssueFormComponent implements OnInit {
  isLoading = false;
  createForm: FormGroup<IEmployeeIssueForm> = EmployeeIssueFormFactory.create();
  employeeIssuesForm: FormArray<FormGroup<IEmployeeIssueForm>> = new FormArray<FormGroup<IEmployeeIssueForm>>([]);
  @Input() issue: Partial<IIssue>;
  employees: Partial<IEmployee>[] = [];

  constructor(
    private employeeIssueController: EmployeeIssueControllerService,
    private employeeController: EmployeeControllerService,
    private snackBarService: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    if (this.issue?.employeeIssues) {
      this.prefillForm();
    }
  }

  prefillForm(): void {
    this?.issue?.employeeIssues.forEach((employeeIssue) => {
      const newGroup = EmployeeIssueFormFactory.create();
      newGroup.patchValue(employeeIssue);
      this.employeeIssuesForm.push(newGroup);
    });
  }

  createEmployee(): void {
    this.isLoading = true;
    this.employeeIssueController.createEmployeeIssue(this.createPayload()).subscribe({
      next: (res) => {
        const newGroup = EmployeeIssueFormFactory.create();
        newGroup.patchValue(res);
        this.employeeIssuesForm.push(newGroup);
        this.employees.push(res);
        this.isLoading = false;
      },
      error: () => {
        this.snackBarService.open('A apărut o eroare la crearea angajatului.', 'Close', {
          duration: 3000,
        });
        this.isLoading = false;
      },
    });
  }

  createPayload(): IEmployeeIssue {
    return {
      employeeId: this.createForm.controls.employee.value.id,
      issueId: this.issue.id,
      startDate: this.createForm.controls.startDate.value,
      endDate: this.createForm.controls.endDate.value,
    };
  }

  getEmployees(): void {
    this.isLoading = true;
    this.employeeController.getEmployees().subscribe({
      next: (res) => {
        this.employees = res;
        this.createForm.controls.employee.setValue(this.employees[0]);
        this.isLoading = false;
      },
      error: () => {
        this.snackBarService.open('A apărut o eroare la preluarea angajatilor.', 'Close', {
          duration: 3000,
        });
        this.isLoading = false;
      },
    });
  }

  protected readonly ValidationHelperService = ValidationHelperService;
}
