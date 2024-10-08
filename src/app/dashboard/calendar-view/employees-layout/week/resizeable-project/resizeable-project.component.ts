import { Component, ElementRef, Input, OnInit, output, ViewChild } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { DatePipe, NgForOf, NgIf, NgStyle } from '@angular/common';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';
import { ITask } from '../../../../../core/models/ITask';
import { DateHelperService } from '../../../../../core/helpers/date-helper.service';
import { MatTooltip } from '@angular/material/tooltip';
import { EmployeesCalendarController } from '../../../../../core/api/controllers/employees-calendar-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkContextMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeProjectDialogComponent } from '../../../../../shared/components/edit-employee-project-dialog/edit-employee-project-dialog.component';
import { ConfirmationDialogComponent } from '../../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { ColorHelperService } from '../../../../../core/helpers/color-helper.service';
import { Router } from '@angular/router';
import { CalendarLayoutHelperService } from '../../../../../core/helpers/calendar-layout-helper.service';
import { EStatus } from '../../../../project-types/shared/enums/EStatus';

@Component({
  selector: 'app-resizeable-project',
  standalone: true,
  imports: [
    CdkDrag,
    NgForOf,
    ResizableModule,
    NgStyle,
    NgIf,
    DatePipe,
    MatTooltip,
    CdkContextMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    MatIcon,
    MatMenuItem,
    MatMenu,
    CdkDragHandle,
  ],
  templateUrl: './resizeable-project.component.html',
  styleUrl: './resizeable-project.component.scss',
  providers: [DatePipe],
})
export class ResizeableProjectComponent implements OnInit {
  @Input() task: ITask;
  @ViewChild('container') div: ElementRef;
  @Input() referenceDate: Date = new Date();
  @Input() isGlobalDragDisabled = {
    value: false,
  };
  isDragDisabled = false;
  maxSpace = CalendarLayoutHelperService.layoutComponentWidth * (CalendarLayoutHelperService.layoutComponents - 1) - 2;
  cachedDateRange: { startDate: Date; endDate: Date } = { startDate: null, endDate: null };

  _delete = output<ITask>();
  _edit = output();

  constructor(
    private employeesCalendarController: EmployeesCalendarController,
    private matSnackBar: MatSnackBar,
    private dialog: MatDialog,
    private datePipe: DatePipe,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (!this.task.style) {
      this.initStyle();
    }
  }

  ngOnChanges(): void {
    if (!this.task.style) {
      this.initStyle();
    }
  }

  initStyle(): void {
    this.task.style = {
      width: `${this.initWidth()}px`,
      left: `${this.initLeft()}px`,
    };
  }

  initLeft(): number {
    let startDate = new Date(this.task.startDate);
    const monday = DateHelperService.getMonday(this.referenceDate);
    if (startDate < monday) {
      startDate = monday;
    }
    const daysDifference = DateHelperService.dateDiffInDays(startDate, monday);
    let left = daysDifference * CalendarLayoutHelperService.layoutComponentWidth;
    if (left + this.initWidth() > this.maxSpace) {
      left = this.maxSpace - this.initWidth();
    }
    return left;
  }

  initWidth(): number {
    let startDate = new Date(this.task.startDate);
    let endDate = new Date(this.task.endDate);
    let monday = DateHelperService.getMonday(this.referenceDate);
    let friday = DateHelperService.getFriday(this.referenceDate);
    if (startDate < monday) {
      startDate = monday;
    }
    if (endDate > friday) {
      endDate = friday;
    }
    let daysDifference = DateHelperService.dateDiffInDays(monday, startDate) + DateHelperService.dateDiffInDays(endDate, friday);
    daysDifference = 4 - daysDifference;
    let width = (daysDifference + 1) * CalendarLayoutHelperService.layoutComponentWidth;
    if (width > this.maxSpace) width = this.maxSpace;
    return width;
  }

  computeEvent(event: ResizeEvent): ResizeEvent {
    event.rectangle.width =
      event.rectangle.width < CalendarLayoutHelperService.layoutComponentWidth
        ? CalendarLayoutHelperService.layoutComponentWidth
        : Math.trunc(event.rectangle.width / CalendarLayoutHelperService.layoutComponentWidth + 1) *
          CalendarLayoutHelperService.layoutComponentWidth;
    if (event.rectangle.width > this.maxSpace) event.rectangle.width = this.maxSpace;
    event.rectangle.left =
      event.rectangle.left -
      (window.innerWidth - this.div.nativeElement.clientWidth) / 2 -
      (CalendarLayoutHelperService.layoutComponentWidth / 2 - 9);

    if ((event.edges.left as number) < 0) {
      if (!this.canStretchLeft) {
        event.rectangle.width = parseInt(this.task.style.width);
      } else if (this.canStretchLeft) {
        if (event.rectangle.width > parseInt(this.task.style.left) + parseInt(this.task.style.width)) {
          event.rectangle.width = parseInt(this.task.style.left) + parseInt(this.task.style.width);
        }
      }
    }

    event.rectangle.left =
      event.rectangle.left < CalendarLayoutHelperService.layoutComponentWidth
        ? 0
        : Math.trunc(event.rectangle.left / CalendarLayoutHelperService.layoutComponentWidth) *
          CalendarLayoutHelperService.layoutComponentWidth;

    if (event.rectangle.left + event.rectangle.width > this.maxSpace) {
      event.rectangle.width = this.maxSpace - event.rectangle.left;
    }
    return event;
  }

  computeStartDate(event: ResizeEvent): Date {
    const leftDays = Math.round(event.rectangle.left / CalendarLayoutHelperService.layoutComponentWidth);
    const date = DateHelperService.getMonday(this.referenceDate);
    date.setDate(date.getDate() + leftDays);
    return date;
  }

  computeEndDate(event: ResizeEvent): Date {
    const widthDays = Math.trunc(
      (Math.round(event.rectangle.width / CalendarLayoutHelperService.layoutComponentWidth) *
        CalendarLayoutHelperService.layoutComponentWidth) /
        CalendarLayoutHelperService.layoutComponentWidth,
    );
    const date = this.computeStartDate(event);
    date.setDate(date.getDate() + widthDays - 1);
    return date;
  }

  updateDateInterval(event: ResizeEvent): void {
    this.cachedDateRange = {
      startDate: this.task.startDate,
      endDate: this.task.endDate,
    };
    if (!!event.edges.left) this.task.startDate = this.computeStartDate(event);
    if (!!event.edges.right) this.task.endDate = this.computeEndDate(event);
  }

  onResizeEnd(event: ResizeEvent): void {
    event = this.computeEvent(event);
    this.updateDateInterval(event);

    this.task.style = {
      left: `${event.rectangle.left}px`,
      width: `${event.rectangle.width}px`,
    };
    this.sendResizeRequest();
  }

  sendResizeRequest(): void {
    this.isDragDisabled = true;
    this.employeesCalendarController.resizeTask(this.task.id, this.createPayload()).subscribe({
      next: () => {
        this.isDragDisabled = false;
      },
      error: () => {
        this.matSnackBar.open('A apărut o eroare la redimensionarea proiectului.', 'Close', {
          duration: 3000,
        });
        this.isDragDisabled = false;
        this.restoreDateInterval();
      },
    });
  }

  createPayload(): Partial<ITask> {
    return {
      id: this.task.id,
      startDate: this.task.startDate,
      endDate: this.task.endDate,
      employeeId: this.task.employeeId,
      projectId: this.task.projectId,
    } as Partial<ITask>;
  }

  restoreDateInterval(): void {
    this.task.startDate = new Date(this.cachedDateRange.startDate);
    this.task.endDate = new Date(this.cachedDateRange.endDate);
  }

  openTaskDialog(): void {
    this.router.navigate([], {
      queryParams: {
        taskId: this.task.id,
      },
    });
  }

  openEditEmployeeProjectDialog(): void {
    this.dialog
      .open(EditEmployeeProjectDialogComponent, {
        width: '500px',
        maxHeight: '90vh',
        disableClose: true,
        data: {
          task: this.task,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this._edit.emit();
      });
  }

  openDeleteEmployeeProjectDialog(): void {
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
        if (result) this._delete.emit(this.task);
      });
  }

  getIsFinished(): boolean {
    return this.isFinished;
  }

  get isFinished(): boolean {
    return this.task.status === EStatus.FINISHED;
  }

  get canStretchLeft(): boolean {
    return parseInt(this.task.style.left) !== 0;
  }

  protected readonly ColorHelperService = ColorHelperService;
}
