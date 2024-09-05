import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DatePipe, isPlatformBrowser, JsonPipe, NgForOf, NgIf, SlicePipe } from '@angular/common';
import { ResizeableProjectComponent } from './resizeable-project/resizeable-project.component';
import { EmployeesCalendarController } from '../../../../core/api/controllers/employees-calendar-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployee } from '../../../../core/models/IEmployee';
import { IEmployeeProject } from '../../../../core/models/IEmployeeProject';
import { DateHelperService } from '../../../../core/helpers/date-helper.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatTooltip } from '@angular/material/tooltip';
import { ResizableModule } from 'angular-resizable-element';
import { MatIcon } from '@angular/material/icon';
import { EmployeeProjectControllerService } from '../../../../core/api/controllers/employee-project-controller.service';

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

  constructor(
    private employeesCalendarController: EmployeesCalendarController,
    private employeeProjectController: EmployeeProjectControllerService,
    private snackBarService: MatSnackBar,
    @Inject(PLATFORM_ID) private platformID: Object,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      this.getWeek();
    }
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

  getWeekDayDate(day: number): string {
    return DateHelperService.getWeekDayDate(this.referenceDate, day);
  }

  drop(event: CdkDragDrop<IEmployeeProject[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.reorder(event);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      const currentEmployee = this.employees.find((employee) => employee.employeeProjects === event.container.data);
      const movedProject = event.container.data[event.currentIndex];
      this.employeeProjectController
        .editEmployeeProject(movedProject.id, {
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
    }
  }

  reorder(event: CdkDragDrop<IEmployeeProject[]>): void {
    this.employeesCalendarController.reorderProjects(event.container.data[event.currentIndex].id, event.container.data).subscribe(
      () => {},
      () => {
        this.snackBarService.open('A apărut o eroare la reordonarea proiectelor.', 'Close', {
          duration: 3000,
        });
      },
    );
  }

  getLinkedLists(): string[] {
    return this?.employees?.map((day, i) => 'list' + i);
  }
}
