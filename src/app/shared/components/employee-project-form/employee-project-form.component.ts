import { Component, Input, output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgForOf, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidationHelperService } from '../../../core/helpers/validation-helper.service';
import { EmployeeProjectFormFactory } from './EmployeeProjectFormFactory';
import { IEmployeeProject } from '../../../core/models/IEmployeeProject';
import { IEmployee } from '../../../core/models/IEmployee';
import { EmployeeControllerService } from '../../../core/api/controllers/employee-controller.service';
import { ProjectControllerService } from '../../../core/api/controllers/project-controller.service';
import { IProjectType } from '../../../core/models/IProjectType';
import { MatOptgroup, MatOption, provideNativeDateAdapter } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatDatepickerToggle, MatDateRangeInput, MatDateRangePicker, MatEndDate, MatStartDate } from '@angular/material/datepicker';

@Component({
  selector: 'app-employee-project-form',
  standalone: true,
  imports: [
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule,
    MatOption,
    MatSelect,
    NgForOf,
    MatDateRangeInput,
    MatDateRangePicker,
    MatDatepickerToggle,
    MatEndDate,
    MatStartDate,
    MatSuffix,
    MatOptgroup,
  ],
  templateUrl: './employee-project-form.component.html',
  styleUrl: './employee-project-form.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class EmployeeProjectFormComponent {
  employeeProjectForm = EmployeeProjectFormFactory.create();
  @Input() employeeProject: IEmployeeProject;
  _submit = output<Partial<IEmployeeProject>>();
  close = output<void>();
  isLoading = false;
  employees: IEmployee[];
  projectTypes: Partial<IProjectType>[];
  today = new Date();

  constructor(
    private snackBarService: MatSnackBar,
    private employeesController: EmployeeControllerService,
    private projectController: ProjectControllerService,
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    this.getProjects();
    this.prefillForm();
  }

  getProjects(): void {
    this.isLoading = true;
    this.projectController.getDropdown().subscribe({
      next: (projects) => {
        this.projectTypes = projects;
        this.prefillForm();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.snackBarService.open('A apărut o eroare la preluarea proiectelor.', 'Close', {
          duration: 3000,
        });
      },
    });
  }

  getEmployees(): void {
    this.isLoading = true;
    this.employeesController.getEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
        this.prefillForm();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.snackBarService.open('A apărut o eroare la preluarea angajatilor.', 'Close', {
          duration: 3000,
        });
      },
    });
  }

  prefillForm(): void {
    if (this.employeeProject) {
      this.employeeProjectForm.controls.startDate.setValue(new Date(this.employeeProject.startDate));
      this.employeeProjectForm.controls.endDate.setValue(new Date(this.employeeProject.endDate));
      this.employeeProjectForm.controls.employee.setValue(this.employees?.find((e) => e.id === this.employeeProject.employeeId));
      this.employeeProjectForm.controls.project.setValue(
        this.projectTypes
          ?.find((p) => p.projects?.find((pp) => pp.id === this.employeeProject.projectId))
          ?.projects?.find((pp) => pp.id === this.employeeProject.projectId),
      );
    }
  }

  onSubmit() {
    this.employeeProjectForm.markAllAsTouched();
    if (this.employeeProjectForm.valid) {
      this._submit.emit(this.createPayload());
    } else {
      this.snackBarService.open('Informațiile introduse sunt incorecte', 'Close', {
        duration: 3000,
      });
    }
  }

  createPayload(): Partial<IEmployeeProject> {
    return {
      employeeId: this.employeeProjectForm.value.employee.id,
      projectId: this.employeeProjectForm.value.project.id,
      startDate: this.employeeProjectForm.value.startDate,
      endDate: this.employeeProjectForm.value.endDate,
    };
  }

  protected readonly ValidationHelperService = ValidationHelperService;
}
