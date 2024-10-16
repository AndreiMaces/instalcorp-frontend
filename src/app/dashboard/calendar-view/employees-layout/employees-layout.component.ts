import { Component, OnInit } from "@angular/core";
import { WeekComponent } from "./week/week.component";
import { Subject } from "rxjs";
import { MatButton } from "@angular/material/button";
import {
  CreateEmployeeProjectDialogComponent
} from "../../../shared/components/create-employee-project-dialog/create-employee-project-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatIcon } from "@angular/material/icon";
import { ProjectsStackComponent } from "./projects-stack/projects-stack.component";
import { MatFormField, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import { MatInput, MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { CalendarLayoutHelperService } from "../../../core/helpers/calendar-layout-helper.service";
import { NgIf } from "@angular/common";
import { CreateFreeDayComponent } from "../../free-days/create-free-day/create-free-day.component";

@Component({
  selector: "app-employees-layout",
  standalone: true,
  imports: [
    WeekComponent,
    MatButton,
    MatIcon,
    ProjectsStackComponent,
    MatFormField,
    MatDatepickerToggle,
    MatInput,
    MatDatepickerInput,
    MatDatepicker,
    MatLabel,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    NgIf
  ],
  templateUrl: "./employees-layout.component.html",
  styleUrl: "./employees-layout.component.scss",
  host: {
    class: "flex-grow"
  }
})
export class EmployeesLayoutComponent implements OnInit {
  private _reloadSubject = new Subject<void>();
  public $reloadObservable = this._reloadSubject.asObservable();
  isGlobalDragDisabled = {
    value: false
  };
  private $referenceDate = new Subject<Date>();
  public _referenceDateObservable = this.$referenceDate.asObservable();

  private $referenceDateNextWeek = new Subject<Date>();
  public _referenceDateNextWeekObservable = this.$referenceDate.asObservable();

  private referenceDateValue: Date;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.subscribeToReferenceDayObservable();
    this.referenceDate = this.today;
  }

  subscribeToReferenceDayObservable(): void {
    this.$referenceDate.subscribe((date) => {
      this.referenceDateValue = date;
    });
    this._referenceDateNextWeekObservable.subscribe((date) => {
      this.referenceDateValue = date;
    });
  }

  changeReferenceDateByEvt(evt: Event): void {
    const newDate = new Date((evt.target as HTMLInputElement).value);
    newDate.setDate(newDate.getDate() + 1);
    this.changeReferenceDate(newDate);
  }

  changeReferenceDate(date: Date): void {
    this.referenceDate = date;
    this._reloadSubject.next();
  }

  openCreateEmployeeProjectDialog(): void {
    this.dialog
      .open(CreateEmployeeProjectDialogComponent, {
        width: "500px",
        maxHeight: "90vh",
        disableClose: true,
        data: {
          task: {
            startDate: new Date(),
            endDate: new Date()
          }
        }
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this._reloadSubject.next();
        }
      });
  }


  openCreateFreeDayDialog(): void {
    this.dialog
      .open(CreateFreeDayComponent, {
        width: "500px",
        maxHeight: "90vh",
        maxWidth: "100%",
        disableClose: true
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this._reloadSubject.next();
      });
  }

  get referenceDate(): Date {
    return this.referenceDateValue;
  }

  get referenceDateNextWeek(): Date {
    return this.getNextWeek(this.referenceDate);
  }

  set referenceDate(date: Date) {
    this.$referenceDate.next(date);
    this.$referenceDateNextWeek.next(date);
  }

  get today(): Date {
    return new Date();
  }

  getNextWeek(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
  }

  protected readonly CalendarLayoutHelperService = CalendarLayoutHelperService;
}
