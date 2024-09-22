import { Component, ViewChild } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TaskControllerService } from '../../../core/api/controllers/task-controller.service';
import { ITask } from '../../../core/models/ITask';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ValidationHelperService } from '../../../core/helpers/validation-helper.service';
import { MatDatepickerToggle, MatDateRangeInput, MatDateRangePicker, MatEndDate, MatStartDate } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectControllerService } from '../../../core/api/controllers/project-controller.service';
import { EmployeeControllerService } from '../../../core/api/controllers/employee-controller.service';
import { IEmployee } from '../../../core/models/IEmployee';
import { IProjectType } from '../../../core/models/IProjectType';
import { MatOptgroup, MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { IProject } from '../../../core/models/IProject';
import { ActivatedRoute } from '@angular/router';
import { QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent } from 'ngx-quill';
import { ColorHelperService } from '../../../core/helpers/color-helper.service';
import { EmployeeComponent } from '../../../dashboard/employees/employee/employee.component';
import { EStatus } from '../../../dashboard/project-types/shared/enums/EStatus';
import { TaskStatusComponent } from './task-status/task-status.component';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatFormField,
    MatAccordion,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatExpansionPanel,
    DatePipe,
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
    ReactiveFormsModule,
    NgForOf,
    FormsModule,
    MatOption,
    MatSelect,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatOptgroup,
    QuillEditorComponent,
    MatButton,
    QuillViewComponent,
    QuillViewHTMLComponent,
    EmployeeComponent,
    TaskStatusComponent,
  ],
  host: {
    class: 'flex-grow h-full',
  },
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.scss',
  providers: [DatePipe],
})
export class TaskDialogComponent {
  isLoadingArray: boolean[] = [];
  task: ITask;
  employees: IEmployee[];
  projectTypes: Partial<IProjectType>[];
  isDescriptionOpen = false;
  cachedDescription: string;
  @ViewChild('quillEditorComponent') editor: QuillEditorComponent;

  constructor(
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    private taskController: TaskControllerService,
    private matSnackBar: MatSnackBar,
    private projectController: ProjectControllerService,
    private employeesController: EmployeeControllerService,
    private dialog: MatDialog,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getTask(parseInt(this.route.snapshot.queryParams['taskId']));
  }

  getTask(taskId: number): void {
    this.isLoading = true;
    this.taskController.getTask(taskId).subscribe({
      next: (task) => {
        this.task = task;
        this.getEmployees();
        this.getProjectTypes();
        this.isLoading = false;
      },
      error: () => {
        this.matSnackBar.open('Failed to get task', 'Close', { duration: 3000 });
        this.dialogRef.close();
        this.isLoading = false;
      },
    });
  }

  saveDescription(): void {
    this.toggleDescription();
    this.updateTaskDescription();
  }

  closeDescription(): void {
    this.toggleDescription();
    this.task.description = this.cachedDescription;
  }

  openDescription(): void {
    this.cachedDescription = this.task.description;
    this.toggleDescription();
  }

  toggleDescription(): void {
    this.cachedDescription = this.task.description;
    this.isDescriptionOpen = !this.isDescriptionOpen;
    if (this.isDescriptionOpen)
      setTimeout(() => {
        this.editor.quillEditor.focus();
      }, 0);
  }

  updateTaskDescription(): void {
    this.taskController
      .editTask(this.task.id, {
        description: this.task.description,
      })
      .subscribe({
        next: () => {},
        error: () => {
          this.matSnackBar.open('Eroare la actualizarea descrierii.', 'Close', { duration: 3000 });
          this.isLoading = false;
        },
      });
  }

  getEmployees(): void {
    this.isLoading = true;
    this.employeesController.getEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
        this.task.employee = employees.find((employee) => employee.id === this.task.employee.id);
        this.isLoading = false;
      },
      error: () => {
        this.matSnackBar.open('Eroare la încărcarea angajaților.', 'Close', { duration: 3000 });
        this.isLoading = false;
      },
    });
  }

  getProjectTypes(): void {
    this.isLoading = true;
    this.projectController.getDropdown().subscribe({
      next: (projectTypes) => {
        this.projectTypes = projectTypes;
        const selectedProject = projectTypes
          ?.find((projectType) => projectType?.id === this?.task?.project?.type?.id)
          ?.projects?.find((project) => project.id === this.task?.project?.id);
        this.updateTaskProject(selectedProject);
        this.isLoading = false;
      },
      error: () => {
        this.matSnackBar.open('Eroare la încărcarea tipurilor de proiecte.', 'Close', { duration: 3000 });
        this.isLoading = false;
      },
    });
  }

  updateTaskTitle(evt: Event) {
    const title = (evt.target as HTMLInputElement).value;
    const oldValue = this.task.title;
    if (title === this.task.title) return;

    this.task.title = title;

    this.taskController
      .editTask(this.task.id, {
        title: this.task.title,
        employeeId: this.task.employeeId,
        projectId: this.task.projectId,
      })
      .subscribe({
        next: () => {},
        error: () => {
          this.task.title = oldValue;
          this.matSnackBar.open('Failed to update task', 'Close', { duration: 3000 });
        },
      });
  }

  updateTaskEmployee(newEmployee: IEmployee) {
    const oldEmployee = this.task.employee;
    this.task.employee = newEmployee;
    this.taskController
      .editTask(this.task.id, {
        projectId: this.task.projectId,
        employeeId: newEmployee.id,
      })
      .subscribe({
        next: () => {},
        error: () => {
          this.task.employee = oldEmployee;
          this.matSnackBar.open('Eroare la actualizarea angajatului.', 'Close', { duration: 3000 });
        },
      });
  }

  updateTaskStartDate(evt: Event) {
    const startDate = new Date((evt.target as HTMLInputElement).value);
    const oldStartDate = this.task.startDate;
    this.task.startDate = startDate;
    this.taskController
      .editTask(this.task.id, {
        startDate: this.task.startDate,
        employeeId: this.task.employeeId,
        projectId: this.task.projectId,
      })
      .subscribe({
        next: () => {},
        error: () => {
          this.task.startDate = oldStartDate;
          this.matSnackBar.open('Eroare la actualizarea datei de inceput.', 'Close', { duration: 3000 });
        },
      });
  }

  updateTaskEndDate(evt: Event) {
    const endDate = new Date((evt.target as HTMLInputElement).value);
    const oldEndDate = this.task.endDate;
    this.task.endDate = endDate;
    this.taskController
      .editTask(this.task.id, {
        endDate: this.task.endDate,
        employeeId: this.task.employeeId,
        projectId: this.task.projectId,
      })
      .subscribe({
        next: () => {},
        error: () => {
          this.task.endDate = oldEndDate;
          this.matSnackBar.open('Eroare la actualizarea datei de final.', 'Close', { duration: 3000 });
        },
      });
  }

  updateTaskRange(startDate: string, endDate: string): void {
    const newStartDate = new Date(startDate);
    const newEndDate = new Date(endDate);
    const oldStartDate = this.task.startDate;
    const oldEndDate = this.task.endDate;
    this.taskController
      .editTask(this.task.id, {
        startDate: newStartDate,
        endDate: newEndDate,
        employeeId: this.task.employeeId,
        projectId: this.task.projectId,
      })
      .subscribe({
        next: () => {},
        error: () => {
          this.task.startDate = oldStartDate;
          this.task.endDate = oldEndDate;
          this.matSnackBar.open('Eroare la actualizarea datelor.', 'Close', { duration: 3000 });
        },
      });
  }

  updateTaskProject(newProject: IProject) {
    const oldProject = this.task.project;
    this.task.project = newProject;
    this.taskController
      .editTask(this.task.id, {
        projectId: newProject.id,
        employeeId: this.task.employeeId,
        color: newProject.color,
      })
      .subscribe({
        next: () => {
          this.projectController.getProject(this.task.project.id).subscribe({
            next: (project) => {
              this.task.project.tasks = project.tasks;
              this.task.project.media = project.media;
            },
            error: () => {
              this.task.project = oldProject;
              this.matSnackBar.open('Eroare la actualizarea proiectului.', 'Close', { duration: 3000 });
            },
          });
        },
        error: () => {
          this.task.project = oldProject;
          this.matSnackBar.open('Eroare la actualizarea proiectului.', 'Close', { duration: 3000 });
        },
      });
  }

  updateProjectColor(evt: Event) {
    const color = (evt.target as HTMLInputElement).value;
    const oldColor = this.task.project.color;
    this.task.project.color = color;
    this.projectController.editProjectColor(this.task.project.id, color).subscribe({
      next: () => {},
      error: () => {
        this.task.project.color = oldColor;
        this.matSnackBar.open('Culoarea nu a putut fi actualizată.', 'Close', { duration: 3000 });
      },
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  openDeleteTaskDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        maxWidth: '100%',
        width: '800px',
        maxHeight: '90vh',
        disableClose: true,
        data: {
          message: `Sunteți sigur că doriți să ștergeți intervalul de lucru
                    <b>${this.datePipe.transform(this.task.startDate)} - ${this.datePipe.transform(this.task.endDate)}</b>
                     al angajatului <b>${this.task.employee.firstName} ${this.task.employee.lastName}</b>
                     la proiectul <b>${this.task.project.title}</b>?`,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this.deleteTaskRequest();
      });
  }

  deleteTaskRequest(): void {
    this.isLoading = true;
    this.taskController.deleteTask(this.task.id).subscribe({
      next: () => {
        this.dialogRef.close();
        this.isLoading = false;
      },
      error: () => {
        this.matSnackBar.open('Ștergerea sarcinii a eșuat.', 'Close', { duration: 3000 });
        this.isLoading = false;
      },
    });
  }

  set isLoading(value: boolean) {
    if (value === true) this.isLoadingArray.push(true);
    if (value === false) this.isLoadingArray.pop();
  }

  get isLoading(): boolean {
    return this.isLoadingArray.includes(true);
  }

  protected readonly ValidationHelperService = ValidationHelperService;
  protected readonly setTimeout = setTimeout;
  protected readonly ColorHelperService = ColorHelperService;
  protected readonly EStatus = EStatus;
}
