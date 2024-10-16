import { Injectable } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { ITask } from "../models/ITask";
import { DateHelperService } from "./date-helper.service";

export interface ITaskStyle {
  left: string;
  width: string;
}

@Injectable({
  providedIn: "root"
})
export class CalendarLayoutHelperService {
  private static _layoutWidth = 1000;
  private static _layoutComponents = 6;

  public static dragEnd(event: CdkDragDrop<ITask[]>, referenceDate: Date): void {
    const task = event.previousContainer.data[event.previousIndex];
    let left = CalendarLayoutHelperService.calculateLeft(event);
    const daysFromMonday = Math.ceil(left / CalendarLayoutHelperService.layoutComponentWidth);
    let newStartDate = new Date(task.startDate);
    if (newStartDate < DateHelperService.getMonday(referenceDate)) {
      newStartDate = DateHelperService.getMonday(referenceDate);
    } else {
      newStartDate = DateHelperService.getMonday(newStartDate);
    }
    newStartDate.setDate(newStartDate.getDate() + daysFromMonday);
    const daysDifference = Math.floor((newStartDate.getTime() - new Date(task.startDate).getTime()) / (1000 * 60 * 60 * 24));
    task.startDate = newStartDate;
    let newEndDate = new Date(task.endDate);
    newEndDate.setDate(newEndDate.getDate() + daysDifference);
    task.endDate = newEndDate;
    task.style = {
      ...task.style,
      left: `${left}px`
    };
  }


  public static clipToSize(value: number): number {
    if (value < 0) {
      return (
        Math.trunc((value - 160) / CalendarLayoutHelperService.layoutComponentWidth) * CalendarLayoutHelperService.layoutComponentWidth
      );
    }
    return Math.trunc(value / CalendarLayoutHelperService.layoutComponentWidth) * CalendarLayoutHelperService.layoutComponentWidth;
  }

  public static computeLeft(dropX: number): number {
    let left =
      dropX -
      (window.innerWidth - CalendarLayoutHelperService.layoutWidth) / 2 -
      CalendarLayoutHelperService.layoutComponentWidth;
    left = Math.max(left, 0);
    left = Math.min(left, CalendarLayoutHelperService.layoutWidth - CalendarLayoutHelperService.layoutComponentWidth * 2);
    left = CalendarLayoutHelperService.clipToSize(left);
    return left;
  }

  public static calculateLeft(event: CdkDragDrop<ITask[]>): number {
    return this.computeLeft(event.dropPoint.x);
  }

  public static newTaskStyle(event: CdkDragDrop<ITask[]>): ITaskStyle {
    let left = CalendarLayoutHelperService.calculateLeft(event);
    return {
      left: `${left}px`,
      width: `${CalendarLayoutHelperService.layoutComponentWidth}px`
    };
  }

  public static get layoutComponentWidth(): number {
    return CalendarLayoutHelperService._layoutWidth / CalendarLayoutHelperService._layoutComponents;
  }

  public static get layoutWidth(): number {
    return CalendarLayoutHelperService._layoutWidth;
  }

  public static get layoutComponents(): number {
    return CalendarLayoutHelperService._layoutComponents;
  }
}
