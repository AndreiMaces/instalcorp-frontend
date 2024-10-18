import { Component, ElementRef, HostListener, Input, OnInit, output, ViewChild } from "@angular/core";
import { CdkDrag, CdkDragHandle, CdkDragPlaceholder } from "@angular/cdk/drag-drop";
import { DatePipe, JsonPipe, NgForOf, NgIf, NgStyle } from "@angular/common";
import { ResizableModule, ResizeEvent } from "angular-resizable-element";
import { ITask } from "../../../../../core/models/ITask";
import { MatTooltip } from "@angular/material/tooltip";
import { EmployeesCalendarController } from "../../../../../core/api/controllers/employees-calendar-controller.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CdkContextMenuTrigger, CdkMenu, CdkMenuItem } from "@angular/cdk/menu";
import { MatIcon } from "@angular/material/icon";
import { MatMenu, MatMenuItem } from "@angular/material/menu";
import { MatDialog } from "@angular/material/dialog";
import {
  EditEmployeeProjectDialogComponent
} from "../../../../../shared/components/edit-employee-project-dialog/edit-employee-project-dialog.component";
import {
  ConfirmationDialogComponent
} from "../../../../../shared/components/confirmation-dialog/confirmation-dialog.component";
import { ColorHelperService } from "../../../../../core/helpers/color-helper.service";
import { Router } from "@angular/router";
import { CalendarLayoutHelperService } from "../../../../../core/helpers/calendar-layout-helper.service";
import { EStatus } from "../../../../project-types/shared/enums/EStatus";
import { CdkObserveContent } from "@angular/cdk/observers";

@Component({
  selector: "[app-resizeable-project]",
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
    CdkDragPlaceholder,
    CdkObserveContent,
    JsonPipe
  ],
  templateUrl: "./resizeable-project.component.html",
  styleUrl: "./resizeable-project.component.scss",
  providers: [DatePipe]
})
export class ResizeableProjectComponent implements OnInit {
  @Input() task: ITask;
  @ViewChild("container") div: ElementRef;
  @Input() referenceDate: Date = new Date();
  @Input() isGlobalDragDisabled = {
    value: false
  };
  @Input() tasks: ITask[];
  isDragDisabled = false;
  maxSpace = CalendarLayoutHelperService.layoutComponentWidth * (CalendarLayoutHelperService.layoutComponents) - 2;
  cachedDateRange: { startDate: Date; endDate: Date } = { startDate: null, endDate: null };

  _delete = output<ITask>();
  _edit = output();
  mouseX = 0;

  constructor(
    private employeesCalendarController: EmployeesCalendarController,
    private matSnackBar: MatSnackBar,
    private dialog: MatDialog,
    private datePipe: DatePipe,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (!this.task.style) {
      this.initStyle();
    }
  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseX = this.mouseX - (window.innerWidth - CalendarLayoutHelperService.layoutWidth) / 2 - CalendarLayoutHelperService.layoutComponentWidth * 2;
    this.mouseX = Math.ceil(this.mouseX / CalendarLayoutHelperService.layoutComponentWidth) * CalendarLayoutHelperService.layoutComponentWidth;
    this.mouseX = Math.max(0, this.mouseX);
    this.mouseX = Math.min(this.mouseX, CalendarLayoutHelperService.layoutWidth - CalendarLayoutHelperService.layoutComponentWidth * 2);
  }

  initStyle(): void {
    CalendarLayoutHelperService.computeTaskStyle(this.task, this.tasks, this.referenceDate);
  }

  updateDateInterval(event: ResizeEvent): void {
    this.cachedDateRange = {
      startDate: this.task.startDate,
      endDate: this.task.endDate
    };

    if (!!event.edges.left) {
      this.task.startDate = CalendarLayoutHelperService.computeStartDate(this.mouseX);
    }
    if (!!event.edges.right) {
      this.task.endDate = CalendarLayoutHelperService.computeStartDate(this.mouseX);
    }
  }

  onResizeEnd(event: ResizeEvent): void {
    this.updateDateInterval(event);
    CalendarLayoutHelperService.computeTaskStyle(this.task, this.tasks, this.referenceDate);
    this.sendResizeRequest();
  }

  sendResizeRequest(): void {
    this.isDragDisabled = true;
    this.employeesCalendarController.resizeTask(this.task.id, this.createPayload()).subscribe({
      next: () => {
        this.isDragDisabled = false;
        CalendarLayoutHelperService.computeTaskStyle(this.task, this.tasks, this.referenceDate);
      },
      error: () => {
        this.matSnackBar.open("A apărut o eroare la redimensionarea proiectului.", "Close", {
          duration: 3000
        });
        this.isDragDisabled = false;
        this.restoreDateInterval();
      }
    });
  }

  createPayload(): Partial<ITask> {
    return {
      id: this.task.id,
      startDate: this.task.startDate,
      endDate: this.task.endDate,
      employeeId: this.task.employeeId,
      projectId: this.task.projectId
    } as Partial<ITask>;
  }

  restoreDateInterval(): void {
    this.task.startDate = new Date(this.cachedDateRange.startDate);
    this.task.endDate = new Date(this.cachedDateRange.endDate);
  }

  openTaskDialog(): void {
    this.router.navigate([], {
      queryParams: {
        taskId: this.task.id
      }
    });
  }

  openEditEmployeeProjectDialog(): void {
    this.dialog
      .open(EditEmployeeProjectDialogComponent, {
        width: "500px",
        maxHeight: "90vh",
        disableClose: true,
        data: {
          task: this.task
        }
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this._edit.emit();
      });
  }

  openDeleteEmployeeProjectDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        maxWidth: "100%",
        width: "800px",
        maxHeight: "90vh",
        disableClose: true,
        data: {
          message: `Sunteți sigur că doriți să ștergeți intervalul de lucru
                    <b>${this.datePipe.transform(this.task.startDate)} - ${this.datePipe.transform(this.task.endDate)}</b>
                     al angajatului <b>${this.task.employee.firstName} ${this.task.employee.lastName}</b>
                     la proiectul <b>${this.task.project.title}</b>?`
        }
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
  protected readonly parseInt = parseInt;
}
