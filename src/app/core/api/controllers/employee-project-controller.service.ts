import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { IEmployeeProject } from '../../models/IEmployeeProject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeProjectControllerService {
  private _baseURL = `/employee-project`;

  constructor(private apiService: ApiService) {}

  createEmployeeProject(newEmployee: Partial<IEmployeeProject>): Observable<IEmployeeProject> {
    return this.apiService.post<IEmployeeProject>(`${this._baseURL}`, newEmployee);
  }

  editEmployeeProject(employeeProjectId: number, editedEmployee: Partial<IEmployeeProject>): Observable<IEmployeeProject> {
    return this.apiService.put<IEmployeeProject>(`${this._baseURL}/${employeeProjectId}`, editedEmployee);
  }

  deleteEmployeeProject(employeeProjectId: number): Observable<IEmployeeProject> {
    return this.apiService.delete<IEmployeeProject>(`${this._baseURL}/${employeeProjectId}`);
  }
}
