import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { IEmployee } from '../../models/IEmployee';
import { IEmployeeProject } from '../../models/IEmployeeProject';

@Injectable({
  providedIn: 'root',
})
export class EmployeesCalendarComponent {
  private _baseURL = `/employees-calendar`;

  constructor(private apiService: ApiService) {}

  getWeek(date: Date): Observable<IEmployee[]> {
    return this.apiService.get<IEmployee[]>(`${this._baseURL}/week`, { date: date.toISOString() });
  }

  resizeProject(employeeProjectId: number, employeeProject: Partial<IEmployeeProject>): Observable<IEmployeeProject> {
    return this.apiService.put<IEmployeeProject>(`${this._baseURL}/project/${employeeProjectId}/resize`, employeeProject);
  }
}
