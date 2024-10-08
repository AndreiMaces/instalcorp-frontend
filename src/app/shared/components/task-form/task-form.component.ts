import { Component, Input, output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgForOf, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidationHelperService } from '../../../core/helpers/validation-helper.service';
import { TaskFormFactory } from './TaskFormFactory';
import { ITask } from '../../../core/models/ITask';
import { IEmployee } from '../../../core/models/IEmployee';
import { EmployeeControllerService } from '../../../core/api/controllers/employee-controller.service';
import { ProjectControllerService } from '../../../core/api/controllers/project-controller.service';
import { IProjectType } from '../../../core/models/IProjectType';
import { MatOptgroup, MatOption, provideNativeDateAdapter } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatDatepickerToggle, MatDateRangeInput, MatDateRangePicker, MatEndDate, MatStartDate } from '@angular/material/datepicker';

@Component({
  selector: 'app-task-form',
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
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class TaskFormComponent {
  taskForm = TaskFormFactory.create();
  @Input() task: ITask;
  _submit = output<Partial<ITask>>();
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

  updateTaskColor(color: string): void {
    this.taskForm.controls.color.setValue(color);
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
    if (this.task) {
      this.taskForm.controls.startDate.setValue(new Date(this.task.startDate));
      this.taskForm.controls.endDate.setValue(new Date(this.task.endDate));
      this.taskForm.controls.employee.setValue(this.employees?.find((e) => e.id === this.task.employeeId));
      this.taskForm.controls.project.setValue(
        this.projectTypes
          ?.find((p) => p.projects?.find((pp) => pp.id === this.task.projectId))
          ?.projects?.find((pp) => pp.id === this.task.projectId),
      );
      if (this.task.title) this.taskForm.controls.title.setValue(this.task.title);
      if (this.task.color) this.taskForm.controls.color.setValue(this.task.color);
    }
  }

  onSubmit() {
    this.taskForm.markAllAsTouched();
    if (this.taskForm.valid) {
      this._submit.emit(this.createPayload());
    } else {
      this.snackBarService.open('Informațiile introduse sunt incorecte', 'Close', {
        duration: 3000,
      });
    }
  }

  createPayload(): Partial<ITask> {
    return {
      employeeId: this.taskForm.value.employee.id,
      projectId: this.taskForm.value.project.id,
      startDate: this.taskForm.value.startDate,
      endDate: this.taskForm.value.endDate,
      title: this.taskForm.value.title,
      color: this.taskForm.value.color,
    };
  }

  protected readonly ValidationHelperService = ValidationHelperService;
}
