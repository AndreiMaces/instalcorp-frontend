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
  private static _layoutWidth = 1200;
  private static _layoutComponents = 6;
  public static layoutComponentHeight = 24;

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

  public static computeTasksTop(tasks: ITask[], initialTop: number): void {
    if (tasks.length === 0) return;

    let top = initialTop;
    let index = 0;

    while (index < tasks.length) {
      const task = tasks[index];
      const taskStartTime = CalendarLayoutHelperService.resetTimeToStartOfDay(new Date(task.startDate)).getTime();
      const taskEndTime = CalendarLayoutHelperService.resetTimeToEndOfDay(new Date(task.endDate)).getTime();

      if (index === 0) {
        CalendarLayoutHelperService.setTaskTopPosition(task, top);
        index++;
        continue;
      }

      const lowerIntersecting = tasks
        .filter(t => t.order < task.order)
        .some(t => CalendarLayoutHelperService.areDatesIntersecting(t, taskStartTime, taskEndTime));

      if (lowerIntersecting) {
        top += CalendarLayoutHelperService.layoutComponentHeight;
        CalendarLayoutHelperService.setTaskTopPosition(task, top);
        CalendarLayoutHelperService.computeTasksTop(tasks.slice(index), top);
        return;
      } else {
        CalendarLayoutHelperService.setTaskTopPosition(task, top);
        index++;
      }
    }
  }

  public static resetTimeToStartOfDay(date: Date): Date {
    date.setHours(0, 0, 0, 0);
    return date;
  }

  public static resetTimeToEndOfDay(date: Date): Date {
    date.setHours(23, 59, 59, 999);
    return date;
  }

  public static areDatesIntersecting(lowerTask: any, taskStartTime: number, taskEndTime: number): boolean {
    const lowerTaskStartTime = CalendarLayoutHelperService.resetTimeToStartOfDay(new Date(lowerTask.startDate)).getTime();
    const lowerTaskEndTime = CalendarLayoutHelperService.resetTimeToEndOfDay(new Date(lowerTask.endDate)).getTime();
    return taskStartTime <= lowerTaskEndTime && taskEndTime >= lowerTaskStartTime;
  }

  public static setTaskTopPosition(task: any, top: number): void {
    task.style = {
      ...task.style,
      top: `${top}px`
    };
  }

  public static computeStartDate(left: number): Date {
    left = Math.min(left, CalendarLayoutHelperService.layoutWidth - CalendarLayoutHelperService.layoutComponentWidth * 2);
    const daysDifference = Math.floor(left / CalendarLayoutHelperService.layoutComponentWidth);
    const date = DateHelperService.getMonday(new Date());
    date.setDate(date.getDate() + daysDifference);
    return date;
  }

  public static computeEndDate(left: number, width: number): Date {
    const daysDifference = Math.floor(width / CalendarLayoutHelperService.layoutComponentWidth);
    const date = CalendarLayoutHelperService.computeStartDate(left);
    date.setDate(date.getDate() + daysDifference - 1);
    return date;
  }

  public static computeTaskStyle(task: ITask, tasks: ITask[], referenceDate: Date): void {
    const daysDifference = DateHelperService.dateDiffInDays(DateHelperService.getMonday(referenceDate), new Date(task.startDate));
    const left = daysDifference * CalendarLayoutHelperService.layoutComponentWidth;

    const differenceBetweenEndDateAndStartDate = DateHelperService.dateDiffInDays(new Date(task.endDate), new Date(task.startDate)) + 1;
    let width = differenceBetweenEndDateAndStartDate * CalendarLayoutHelperService.layoutComponentWidth;

    const maxSpace = CalendarLayoutHelperService.layoutComponentWidth * (CalendarLayoutHelperService.layoutComponents - 1) - 2;
    if (width > maxSpace) {
      width = maxSpace;
    }

    task.style = {
      left: `${left}px`,
      width: `${width}px`
    };
    CalendarLayoutHelperService.computeTasksTop(tasks, 0);
  }

  public static getLayoutHeight(tasks: ITask[]): number {
    CalendarLayoutHelperService.computeTasksTop(tasks, 0);
    return Math.max(...tasks.map(task => parseInt(task.style.top) + CalendarLayoutHelperService.layoutComponentHeight * 2));
  }

  public static get layoutComponentWidth(): number {
    return CalendarLayoutHelperService._layoutWidth / CalendarLayoutHelperService._layoutComponents - 1;
  }

  public static get layoutWidth(): number {
    return CalendarLayoutHelperService._layoutWidth;
  }

  public static get layoutComponents(): number {
    return CalendarLayoutHelperService._layoutComponents;
  }
}
