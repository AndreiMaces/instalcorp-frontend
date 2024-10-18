import { Component, Input, output } from "@angular/core";
import { CdkContextMenuTrigger, CdkMenu, CdkMenuItem } from "@angular/cdk/menu";
import { MatIcon } from "@angular/material/icon";
import { MatTooltip } from "@angular/material/tooltip";
import { IFreeDay } from "../../../../../core/models/IFreeDay";
import { DateHelperService } from "../../../../../core/helpers/date-helper.service";
import { EditFreeDayComponent } from "../../../../free-days/edit-free-day/edit-free-day.component";
import { MatDialog } from "@angular/material/dialog";
import {
  ConfirmationDialogComponent
} from "../../../../../shared/components/confirmation-dialog/confirmation-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FreeDayControllerService } from "../../../../../core/api/controllers/free-day-controller.service";
import { NgIf } from "@angular/common";
import { CreateFreeDayComponent } from "../../../../free-days/create-free-day/create-free-day.component";

@Component({
  selector: "[app-week-panel]",
  standalone: true,
  imports: [
    CdkMenu,
    CdkMenuItem,
    MatIcon,
    MatTooltip,
    CdkContextMenuTrigger,
    NgIf
  ],
  templateUrl: "./week-panel.component.html",
  styleUrl: "./week-panel.component.scss"
})
export class WeekPanelComponent {
  @Input() index: number;
  @Input() referenceDate: Date;
  @Input() freeDays: IFreeDay[];
  reload = output();


  constructor(
    private snackBarService: MatSnackBar,
    private dialog: MatDialog,
    private freeDayController: FreeDayControllerService
  ) {
  }


  getFreeDay(day: number): IFreeDay {
    const date = DateHelperService.getWeekDayDate(this.referenceDate, day);
    date.setHours(0, 0, 0, 0);
    return this.freeDays.find((freeDay) => {
      return new Date(freeDay.startDate) <= date && date <= new Date(freeDay.endDate);
    });
  }

  getWeekDayDate(day: number): string {
    return DateHelperService.getWeekDayDateString(this.referenceDate, day);
  }

  isDayAvailable(day: number): boolean {
    const freeDay = this.getFreeDay(day);
    return !freeDay;
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
      .subscribe((res: any) => {
        if (res) {
          this.reload.emit();
        }
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
        this.reload.emit();
      },
      error: () => {
        this.snackBarService.open("A apărut o eroare la încărcarea zilelor libere.");
      }
    });
  }


  openCreateFreeDayDialog(index: number): void {
    const day = DateHelperService.getWeekDayDate(this.referenceDate, index);
    this.dialog
      .open(CreateFreeDayComponent, {
        width: "500px",
        maxHeight: "90vh",
        maxWidth: "100%",
        data: {
          day: day
        },
        disableClose: true
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this.reload.emit();
      });
  }

}
