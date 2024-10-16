import { Injectable } from "@angular/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { ITask } from "../models/ITask";
import { DateHelperService } from "./date-helper.service";
import { CalendarLayoutHelperService } from "./calendar-layout-helper.service";
import { IEmployee } from "../models/IEmployee";
import { IProject } from "../models/IProject";

export interface ITaskStyle {
  left: string;
  width: string;
}

@Injectable({
  providedIn: "root"
})
export class TaskAssemblerHelperService {

  public static computeNewTask(movedProject: ITask, event: CdkDragDrop<ITask[]>, referenceDate: Date, currentEmployee: IEmployee): ITask {
    let newEmployeeProject = movedProject;
    newEmployeeProject.projectId = movedProject.id;
    newEmployeeProject.startDate = DateHelperService.getMonday(referenceDate);
    newEmployeeProject.endDate = DateHelperService.getMonday(referenceDate);
    newEmployeeProject.employeeId = currentEmployee.id;
    newEmployeeProject.employee = { ...currentEmployee, tasks: [] } as IEmployee;
    newEmployeeProject.project = {
      color: movedProject.color,
      title: movedProject.title,
      id: movedProject.id,
      startDate: movedProject.startDate,
      endDate: movedProject.endDate
    } as IProject;
    newEmployeeProject.startDate = TaskAssemblerHelperService.newTaskStartDate(event);
    newEmployeeProject.endDate = TaskAssemblerHelperService.newTaskEndDate(event);
    newEmployeeProject.style = CalendarLayoutHelperService.newTaskStyle(event);
    return newEmployeeProject;
  }

  public static newTaskStartDate(event: CdkDragDrop<ITask[]>): Date {
    const movedProject = event.previousContainer.data[event.previousIndex];
    let left = CalendarLayoutHelperService.calculateLeft(event);
    const daysFromMonday = Math.ceil(left / CalendarLayoutHelperService.layoutComponentWidth);
    const newStartDate = DateHelperService.getMonday(new Date(movedProject.startDate));
    newStartDate.setDate(newStartDate.getDate() + daysFromMonday);
    return newStartDate;
  }

  public static newTaskEndDate(event: CdkDragDrop<ITask[]>): Date {
    return TaskAssemblerHelperService.newTaskStartDate(event);
  }
}
