import { Component, Input } from "@angular/core";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  copyArrayItem,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { DatePipe, JsonPipe, NgForOf, NgIf, SlicePipe } from "@angular/common";
import { ResizeableProjectComponent } from "./resizeable-project/resizeable-project.component";
import { EmployeesCalendarController } from "../../../../core/api/controllers/employees-calendar-controller.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { IEmployee } from "../../../../core/models/IEmployee";
import { ITask } from "../../../../core/models/ITask";
import { DateHelperService } from "../../../../core/helpers/date-helper.service";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { MatTooltip } from "@angular/material/tooltip";
import { ResizableModule } from "angular-resizable-element";
import { MatIcon } from "@angular/material/icon";
import { TaskControllerService } from "../../../../core/api/controllers/task-controller.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { CalendarLayoutHelperService } from "../../../../core/helpers/calendar-layout-helper.service";
import { IFreeDay } from "../../../../core/models/IFreeDay";
import { TaskAssemblerHelperService } from "../../../../core/helpers/task-assembler-helper.service";
import { CdkContextMenuTrigger, CdkMenu, CdkMenuItem } from "@angular/cdk/menu";
import {
  ConfirmationDialogComponent
} from "../../../../shared/components/confirmation-dialog/confirmation-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { FreeDayControllerService } from "../../../../core/api/controllers/free-day-controller.service";
import { EditFreeDayComponent } from "../../../free-days/edit-free-day/edit-free-day.component";
import { WeekPanelComponent } from "./week-panel/week-panel.component";

export interface IDay {
  name: string;
  id: number;
}

@Component({
  selector: "app-week",
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
    CdkContextMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    WeekPanelComponent
  ],
  templateUrl: "./week.component.html",
  styleUrl: "./week.component.scss"
})
export class WeekComponent {
  employees: IEmployee[];
  freeDays: IFreeDay[];
  isLoading = false;
  @Input() listIndex: number;
  @Input() listIndexes: number[];
  @Input() referenceDateObservable: Observable<Date>;
  @Input() referenceDate: Date;
  @Input() reloadObservable: Observable<void>;
  @Input() isGlobalDragDisabled = {
    value: false
  };
  openedTaskId: number;

  constructor(
    private employeesCalendarController: EmployeesCalendarController,
    private taskController: TaskControllerService,
    private snackBarService: MatSnackBar,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private freeDayController: FreeDayControllerService
  ) {
  }

  ngOnInit(): void {
    this.getWeek();
    this.openedTaskId = this.route.snapshot.queryParams["taskId"];
    this.subscribeToReferenceDayObservable();
    this.reloadObservable.subscribe(() => {
      this.getWeekSilent();
    });
    this.route.queryParams.subscribe((params) => {
      if (params["taskId"] !== this.openedTaskId) {
        this.openedTaskId = params["taskId"];
        this.getWeekSilent();
      }
    });
  }

  subscribeToReferenceDayObservable(): void {
    this.referenceDateObservable.subscribe((date) => {
      this.referenceDate = date;
      this.getWeek();
    });
  }

  getWeek(): void {
    this.isLoading = true;
    this.employeesCalendarController.getWeek(this.referenceDate).subscribe({
      next: (res) => {
        this.employees = res.employees;
        this.freeDays = res.freeDays;
        this.computeTasksStyles();
        this.isLoading = false;
      },
      error: () => {
        this.snackBarService.open("A apărut o eroare la obtinerea listei de angajati.", "Close", {
          duration: 3000
        });
        this.isLoading = false;
      }
    });
  }

  getWeekSilent(): void {
    this.isGlobalDragDisabled.value = true;
    this.employeesCalendarController.getWeek(this.referenceDate).subscribe({
      next: (res) => {
        this.employees = res.employees;
        this.freeDays = res.freeDays;
        this.computeTasksStyles();
        this.isGlobalDragDisabled.value = false;
      }
    });
  }

  computeTasksStyles(): void {
    this.employees.forEach((employee) => {
      employee.tasks.forEach((task, index) => {
        task.order = index;
        this.computeTaskStyle(task, employee.tasks);
      });
    });
  }

  computeTaskStyle(task: ITask, tasks: ITask[]): void {
    CalendarLayoutHelperService.computeTaskStyle(task, tasks, this.referenceDate);
  }

  getWeekDayDate(day: number): string {
    return DateHelperService.getWeekDayDateString(this.referenceDate, day);
  }


  drop(event: CdkDragDrop<ITask[]>): void {
    CalendarLayoutHelperService.dragEnd(event, this.referenceDate);
    this.computeTasksStyles();
    if (this.droppedOnSameEmployee(event)) {
      this.dropOnSameEmployee(event);
      return;
    }
    if (this.isComingFromProjectsStack(event)) {
      this.dropOnDifferentEmployee(event);
      return;
    }
    this.createTaskFromProjectsStack(event);
  }

  isComingFromProjectsStack(event: CdkDragDrop<ITask[]>): boolean {
    const movedProject = event.previousContainer.data[event.previousIndex];
    return !!movedProject?.projectId;
  }

  dropOnDifferentEmployee(event: CdkDragDrop<ITask[]>): void {
    const movedProject = event.previousContainer.data[event.previousIndex];
    const currentEmployee = this.employees.find((employee) => employee.tasks === event.container.data);
    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    this.computeTasksStyles();
    this.isGlobalDragDisabled.value = true;
    this.taskController
      .editTask(movedProject.id, {
        startDate: movedProject.startDate,
        endDate: movedProject.endDate,
        projectId: movedProject.projectId,
        employeeId: currentEmployee.id
      })
      .subscribe({
        next: () => {
          this.reorder(event);
        },
        error: () => {
          this.snackBarService.open("A apărut o eroare la reordonarea proiectelor.", "Close", {
            duration: 3000
          });
          this.isGlobalDragDisabled.value = false;
        }
      });
  }

  droppedOnSameEmployee(event: CdkDragDrop<ITask[]>): boolean {
    return event.previousContainer === event.container;
  }

  dropOnSameEmployee(event: CdkDragDrop<ITask[]>): void {
    const movedProject = event.previousContainer.data[event.previousIndex];
    const currentEmployee = this.employees.find((employee) => employee.tasks === event.container.data);
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.computeTasksStyles();
    this.isGlobalDragDisabled.value = true;
    if (movedProject.startDate > movedProject.endDate) {
      movedProject.endDate = movedProject.startDate;
    }
    this.taskController
      .editTask(movedProject.id, {
        startDate: movedProject.startDate,
        endDate: movedProject.endDate,
        projectId: movedProject.projectId,
        employeeId: currentEmployee.id
      })
      .subscribe({
        next: () => {
          this.reorder(event);
        },
        error: () => {
          this.isGlobalDragDisabled.value = false;
          this.snackBarService.open("A apărut o eroare la reordonarea proiectelor.", "Close", {
            duration: 3000
          });
        }
      });
  }

  createTaskFromProjectsStack(event: CdkDragDrop<ITask[]>): void {

    const movedProject = event.previousContainer.data[event.previousIndex];
    const currentEmployee = this.employees.find((employee) => employee.tasks === event.container.data);

    // Create the new task in memory
    const containerClone = JSON.parse(JSON.stringify(event.previousContainer.data));
    copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    this.computeTasksStyles();
    event.previousContainer.data = containerClone;

    // Compute the new task information
    let newEmployeeProject = TaskAssemblerHelperService.computeNewTask(movedProject, event, this.referenceDate, currentEmployee);

    this.isGlobalDragDisabled.value = true;
    this.taskController
      .createTask({
        startDate: newEmployeeProject.startDate,
        endDate: newEmployeeProject.endDate,
        projectId: newEmployeeProject.projectId,
        employeeId: newEmployeeProject.employeeId,
        color: newEmployeeProject.project.color
      })
      .subscribe({
        next: (task: ITask) => {
          movedProject.id = task.id;
          this.reorder(event);
        },
        error: () => {
          this.isGlobalDragDisabled.value = false;

          this.snackBarService.open("A apărut o eroare la reordonarea sarcinilor.", "Close", {
            duration: 3000
          });
        }
      });
  }


  reorder(event: CdkDragDrop<ITask[]>): void {
    this.isGlobalDragDisabled.value = true;
    this.employeesCalendarController.reorderTasks(event.container.data[event.currentIndex].id, event.container.data).subscribe(
      () => {
        this.getWeekSilent();
      },
      () => {
        this.isGlobalDragDisabled.value = false;
        this.snackBarService.open("A apărut o eroare la reordonarea proiectelor.", "Close", {
          duration: 3000
        });
      }
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
        this.snackBarService.open("A apărut o eroare la stergerea sarcinii.", "Close", {
          duration: 3000
        })
    });
  }

  getLinkedLists(): string[] {
    let lists: string[] = [];
    this.listIndexes.forEach((index) => {
      lists = [...lists, ...this?.employees?.map((day, i) => "list" + i + index)];
    });
    return lists;
  }

  getWeekRange(date: Date): string {
    return DateHelperService.getWeekRange(date);
  }

  isDayAvailable(day: number): boolean {
    const freeDay = this.getFreeDay(day);
    return !freeDay;
  }

  getFreeDay(day: number): IFreeDay {
    const date = DateHelperService.getWeekDayDate(this.referenceDate, day);
    date.setHours(0, 0, 0, 0);
    return this.freeDays.find((freeDay) => {
      return new Date(freeDay.startDate) <= date && date <= new Date(freeDay.endDate);
    });
  }


  openDeleteFreeDayDialog(freeDay: IFreeDay): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          message: "Sigur vrei sa stergi această zi liberă?"
        }
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.deleteFreeDay(freeDay.id);
        }
      });
  }

  deleteFreeDay(freeDayId: number): void {
    this.freeDayController.removeFreeDay(freeDayId).subscribe({
      next: () => {
        this.getWeekSilent();
      },
      error: () => {
        this.snackBarService.open("A apărut o eroare la încărcarea zilelor libere.");
        this.isLoading = false;
      }
    });
  }


  openEditFreeDayDialog(freeDay: IFreeDay): void {
    this.dialog
      .open(EditFreeDayComponent, {
        data: {
          freeDay: freeDay
        },
        width: "500px",
        maxWidth: "100%",
        maxHeight: "90vh",
        disableClose: true
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.getWeekSilent();
        }
      });
  }

  protected readonly CalendarLayoutHelperService = CalendarLayoutHelperService;
}
