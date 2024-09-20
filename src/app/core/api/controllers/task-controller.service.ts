import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { ITask } from '../../models/ITask';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskControllerService {
  private _baseURL = `/task`;

  constructor(private apiService: ApiService) {}

  getTask(taskId: number): Observable<ITask> {
    return this.apiService.get<ITask>(`${this._baseURL}/${taskId}`);
  }

  createTask(newTask: Partial<ITask>): Observable<ITask> {
    return this.apiService.post<ITask>(`${this._baseURL}`, newTask);
  }

  editTask(taskId: number, editedTask: Partial<ITask>): Observable<ITask> {
    return this.apiService.put<ITask>(`${this._baseURL}/${taskId}`, editedTask);
  }

  deleteTask(taskId: number): Observable<ITask> {
    return this.apiService.delete<ITask>(`${this._baseURL}/${taskId}`);
  }
}
