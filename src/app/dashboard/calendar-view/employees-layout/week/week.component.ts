import { Component, Input } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  copyArrayItem,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DatePipe, JsonPipe, NgForOf, NgIf, SlicePipe } from '@angular/common';
import { ResizeableProjectComponent } from './resizeable-project/resizeable-project.component';
import { EmployeesCalendarController } from '../../../../core/api/controllers/employees-calendar-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployee } from '../../../../core/models/IEmployee';
import { ITask } from '../../../../core/models/ITask';
import { DateHelperService } from '../../../../core/helpers/date-helper.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatTooltip } from '@angular/material/tooltip';
import { ResizableModule } from 'angular-resizable-element';
import { MatIcon } from '@angular/material/icon';
import { TaskControllerService } from '../../../../core/api/controllers/task-controller.service';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../../core/api/api.service';
import { Observable } from 'rxjs';
import { IProject } from '../../../../core/models/IProject';

export interface IDay {
  name: string;
  id: number;
}

@Component({
  selector: 'app-week',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
    NgForOf,
    ResizeableProjectComponent,
    DragDropModule,
    NgIf,
    MatProgressSpinner,
    SlicePipe,
    DatePipe,
    MatTooltip,
    ResizableModule,
    MatIcon,
    JsonPipe,
  ],
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss',
})
export class WeekComponent {
  employees: IEmployee[];
  isLoading = false;
  @Input() referenceDate: Date = new Date();
  @Input() reloadObservable: Observable<void>;

  constructor(
    private employeesCalendarController: EmployeesCalendarController,
    private taskController: TaskControllerService,
    private snackBarService: MatSnackBar,
    private dialog: MatDialog,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.getWeek();
    this.reloadObservable.subscribe(() => this.getWeek());
  }

  getWeek(): void {
    this.isLoading = true;
    this.employeesCalendarController.getWeek(this.referenceDate).subscribe({
      next: (employees) => {
        this.employees = employees;
        this.isLoading = false;
      },
      error: () => {
        this.snackBarService.open('A apărut o eroare la obtinerea listei de angajati.', 'Close', {
          duration: 3000,
        });
        this.isLoading = false;
      },
    });
  }

  getWeekSilent(): void {
    this.employeesCalendarController.getWeek(this.referenceDate).subscribe({
      next: (employees) => {
        this.employees = employees;
      },
    });
  }

  getWeekDayDate(day: number): string {
    return DateHelperService.getWeekDayDate(this.referenceDate, day);
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.reorder(event);
    } else {
      const currentEmployee = this.employees.find((employee) => employee.tasks === event.container.data);
      const movedProject = event.previousContainer.data[event.previousIndex];
      if (movedProject?.projectId) {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        this.taskController
          .editTask(movedProject.id, {
            startDate: movedProject.startDate,
            endDate: movedProject.endDate,
            projectId: movedProject.projectId,
            employeeId: currentEmployee.id,
          })
          .subscribe({
            next: () => {
              this.reorder(event);
            },
            error: () => {
              this.snackBarService.open('A apărut o eroare la reordonarea proiectelor.', 'Close', {
                duration: 3000,
              });
            },
          });
      } else {
        copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        let newEmployeeProject = movedProject as ITask;
        newEmployeeProject.projectId = movedProject.id;
        newEmployeeProject.startDate = DateHelperService.getMonday(this.referenceDate);
        newEmployeeProject.endDate = DateHelperService.getMonday(this.referenceDate);
        newEmployeeProject.employeeId = currentEmployee.id;
        newEmployeeProject.employee = { ...currentEmployee, tasks: [] } as IEmployee;
        const realMovedProject = movedProject as unknown as IProject;
        newEmployeeProject.project = {
          color: realMovedProject.color,
          title: realMovedProject.title,
          id: realMovedProject.id,
          name: realMovedProject.name,
          startDate: realMovedProject.startDate,
          endDate: realMovedProject.endDate,
        } as IProject;

        this.taskController
          .createTask({
            startDate: newEmployeeProject.startDate,
            endDate: newEmployeeProject.endDate,
            projectId: newEmployeeProject.projectId,
            employeeId: newEmployeeProject.employeeId,
          })
          .subscribe({
            next: (task: ITask) => {
              movedProject.id = task.id;
              this.reorder(event);
            },
            error: () => {
              this.snackBarService.open('A apărut o eroare la reordonarea sarcinilor.', 'Close', {
                duration: 3000,
              });
            },
          });
      }
    }
  }

  reorder(event: CdkDragDrop<ITask[]>): void {
    this.employeesCalendarController.reorderTasks(event.container.data[event.currentIndex].id, event.container.data).subscribe(
      () => {
        this.getWeekSilent();
      },
      () => {
        this.snackBarService.open('A apărut o eroare la reordonarea proiectelor.', 'Close', {
          duration: 3000,
        });
      },
    );
  }

  deleteTask(task: ITask): void {
    this.employees.find((employee) => employee.id === task.employeeId).tasks = this.employees
      .find((employee) => employee.id === task.employeeId)
      .tasks.filter((project) => project.id !== task.id);
    this.taskController.deleteTask(task.id).subscribe({
      next: () => {
        this.getWeekSilent();
      },
      error: () =>
        this.snackBarService.open('A apărut o eroare la stergerea sarcinii.', 'Close', {
          duration: 3000,
        }),
    });
  }

  getLinkedLists(): string[] {
    return this?.employees?.map((day, i) => 'list' + i);
  }

  getWeekRange(date: Date): string {
    return DateHelperService.getWeekRange(date);
  }
}
