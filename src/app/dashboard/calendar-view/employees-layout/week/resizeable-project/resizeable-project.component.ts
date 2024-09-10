import { Component, ElementRef, Input, OnInit, output, ViewChild } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { DatePipe, NgForOf, NgIf, NgStyle } from '@angular/common';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';
import { IEmployeeProject } from '../../../../../core/models/IEmployeeProject';
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
  ],
  templateUrl: './resizeable-project.component.html',
  styleUrl: './resizeable-project.component.scss',
  providers: [DatePipe],
})
export class ResizeableProjectComponent implements OnInit {
  @Input({
    transform: (value: IEmployeeProject): IEmployeeProject & { style: { left: string; width: string } } => {
      return {
        ...value,
        style: {
          left: '0px',
          width: '200px',
        },
      } as unknown as IEmployeeProject & { style: { left: string; width: string } };
    },
  })
  employeeProject: IEmployeeProject & { style: { left: string; width: string } };
  @ViewChild('container') div: ElementRef;
  @Input() referenceDate: Date = new Date();
  isDragDisabled = false;
  maxSpace = 998;
  cachedDateRange: { startDate: Date; endDate: Date } = { startDate: null, endDate: null };

  _delete = output<number>();
  _edit = output();

  constructor(
    private employeesCalendarController: EmployeesCalendarController,
    private matSnackBar: MatSnackBar,
    private dialog: MatDialog,
    private datePipe: DatePipe,
  ) {}

  ngOnInit(): void {
    this.initStyle();
  }

  initStyle(): any {
    this.employeeProject.style = {
      width: `${this.initWidth()}px`,
      left: `${this.initLeft()}px`,
    };
  }

  initLeft(): number {
    let startDate = new Date(this.employeeProject.startDate);
    const monday = DateHelperService.getMonday(this.referenceDate);
    if (startDate < monday) {
      startDate = monday;
    }
    const daysDifference = DateHelperService.dateDiffInDays(startDate, monday);
    let left = daysDifference * 200;
    if (left + this.initWidth() > this.maxSpace) {
      left = this.maxSpace - this.initWidth();
    }
    return left;
  }

  initWidth(): number {
    let startDate = new Date(this.employeeProject.startDate);
    let endDate = new Date(this.employeeProject.endDate);
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
    let width = (daysDifference + 1) * 200;
    if (width > this.maxSpace) width = this.maxSpace;
    return width;
  }

  computeEvent(event: ResizeEvent): ResizeEvent {
    event.rectangle.width = event.rectangle.width < 200 ? 200 : Math.trunc(event.rectangle.width / 200 + 1) * 200;
    if (event.rectangle.width > this.maxSpace) event.rectangle.width = this.maxSpace;
    event.rectangle.left = event.rectangle.left - (window.innerWidth - this.div.nativeElement.clientWidth) / 2 - 91;

    if ((event.edges.left as number) < 0) {
      if (!this.canStretchLeft) {
        event.rectangle.width = parseInt(this.employeeProject.style.width);
      } else if (this.canStretchLeft) {
        if (event.rectangle.width > parseInt(this.employeeProject.style.left) + parseInt(this.employeeProject.style.width)) {
          event.rectangle.width = parseInt(this.employeeProject.style.left) + parseInt(this.employeeProject.style.width);
        }
      }
    }

    event.rectangle.left = event.rectangle.left < 200 ? 0 : Math.trunc(event.rectangle.left / 200) * 200;

    if (event.rectangle.left + event.rectangle.width > this.maxSpace) {
      event.rectangle.width = this.maxSpace - event.rectangle.left;
    }
    return event;
  }

  computeStartDate(event: ResizeEvent): Date {
    const leftDays = Math.trunc(Math.round((event.rectangle.left / 200) * 200) / 200);
    const date = DateHelperService.getMonday(this.referenceDate);
    date.setDate(date.getDate() + leftDays);
    return date;
  }

  computeEndDate(event: ResizeEvent): Date {
    const widthDays = Math.trunc((Math.round(event.rectangle.width / 200) * 200) / 200);
    const date = this.computeStartDate(event);
    date.setDate(date.getDate() + widthDays - 1);
    console.log(date, widthDays);
    return date;
  }

  updateDateInterval(event: ResizeEvent): void {
    this.cachedDateRange = {
      startDate: this.employeeProject.startDate,
      endDate: this.employeeProject.endDate,
    };
    if (!!event.edges.left) this.employeeProject.startDate = this.computeStartDate(event);
    if (!!event.edges.right) this.employeeProject.endDate = this.computeEndDate(event);
  }

  onResizeEnd(event: ResizeEvent): void {
    event = this.computeEvent(event);
    this.updateDateInterval(event);

    this.employeeProject.style = {
      left: `${event.rectangle.left}px`,
      width: `${event.rectangle.width}px`,
    };
    this.isDragDisabled = false;
    this.sendResizeRequest();
  }

  sendResizeRequest(): void {
    this.employeesCalendarController.resizeProject(this.employeeProject.id, this.createPayload()).subscribe({
      next: () => {},
      error: () => {
        this.matSnackBar.open('A apărut o eroare la redimensionarea proiectului.', 'Close', {
          duration: 3000,
        });
        this.restoreDateInterval();
      },
    });
  }

  createPayload(): Partial<IEmployeeProject> {
    return {
      id: this.employeeProject.id,
      startDate: this.employeeProject.startDate,
      endDate: this.employeeProject.endDate,
      employeeId: this.employeeProject.employeeId,
      projectId: this.employeeProject.projectId,
    } as Partial<IEmployeeProject>;
  }

  restoreDateInterval(): void {
    this.employeeProject.startDate = new Date(this.cachedDateRange.startDate);
    this.employeeProject.endDate = new Date(this.cachedDateRange.endDate);
  }

  openEditEmployeeProjectDialog(): void {
    this.dialog
      .open(EditEmployeeProjectDialogComponent, {
        width: '500px',
        maxHeight: '90vh',
        disableClose: true,
        data: {
          employeeProject: this.employeeProject,
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
                    <b>${this.datePipe.transform(this.employeeProject.startDate)} - ${this.datePipe.transform(this.employeeProject.endDate)}</b>
                     al angajatului <b>${this.employeeProject.employee.firstName} ${this.employeeProject.employee.lastName}</b>
                     la proiectul <b>${this.employeeProject.project.title}</b>?`,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this._delete.emit(this.employeeProject.id);
      });
  }

  get canStretchLeft(): boolean {
    return parseInt(this.employeeProject.style.left) !== 0;
  }
}
