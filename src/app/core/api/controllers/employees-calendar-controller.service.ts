import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { IEmployee } from '../../models/IEmployee';
import { ITask } from '../../models/ITask';
import { IFreeDay } from '../../models/IFreeDay';

export interface IGetWeek {
  employees: IEmployee[];
  freeDays: IFreeDay[];
}

@Injectable({
  providedIn: 'root',
})
export class EmployeesCalendarController {
  private _baseURL = `/employees-calendar`;

  constructor(private apiService: ApiService) {}

  getWeek(date: Date): Observable<IGetWeek> {
    return this.apiService.get<IGetWeek>(`${this._baseURL}/week`, { date: date.toISOString() });
  }

  resizeTask(taskId: number, task: Partial<ITask>): Observable<ITask> {
    return this.apiService.put<ITask>(`${this._baseURL}/task/${taskId}/resize`, task);
  }

  reorderTasks(employeeId: number, tasks: Partial<ITask>[]): Observable<ITask[]> {
    const taskIds = tasks.map((task) => {
      return { id: task.id };
    });
    return this.apiService.put<ITask[]>(`${this._baseURL}/employee/${employeeId}/tasks/reorder`, taskIds);
  }
}
