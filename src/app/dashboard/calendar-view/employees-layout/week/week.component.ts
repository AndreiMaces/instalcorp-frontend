import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NgForOf } from '@angular/common';
import { ResizeableProjectComponent } from './resizeable-project/resizeable-project.component';
import { EmployeesCalendarComponent } from '../../../../core/api/controllers/employees-calendar-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployee } from '../../../../core/models/IEmployee';
import { IEmployeeProject } from '../../../../core/models/IEmployeeProject';
import { DateHelperService } from '../../../../core/helpers/date-helper.service';

export interface IDay {
  name: string;
  id: number;
}

@Component({
  selector: 'app-week',
  standalone: true,
  imports: [CdkDrag, CdkDropList, CdkDropListGroup, NgForOf, ResizeableProjectComponent, DragDropModule],
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss',
})
export class WeekComponent {
  employees: IEmployee[] = [];
  isLoading = false;

  constructor(
    private employeesCalendarController: EmployeesCalendarComponent,
    private snackBarService: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getWeek();
  }

  getWeek(): void {
    this.isLoading = true;
    this.employeesCalendarController.getWeek(new Date()).subscribe({
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
    return DateHelperService.getWeekDayDate(new Date(), day);
  }

  drop(event: CdkDragDrop<IEmployeeProject[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  getLinkedLists(): string[] {
    return this?.employees?.map((day, i) => 'list' + i);
  }

  protected readonly DateHelperService = DateHelperService;
}
