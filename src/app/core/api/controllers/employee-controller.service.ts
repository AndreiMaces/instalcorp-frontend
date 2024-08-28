import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { IEmployee } from '../../models/IEmployee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeControllerService {
  private _baseURL = `/employee`;

  constructor(private apiService: ApiService) {}

  getEmployee(employeeId: number): Observable<IEmployee> {
    return this.apiService.get<IEmployee>(`${this._baseURL}/${employeeId}`);
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.apiService.get<IEmployee[]>(`${this._baseURL}`);
  }

  createEmployee(newEmployee: Partial<IEmployee>): Observable<IEmployee> {
    return this.apiService.post<IEmployee>(`${this._baseURL}`, newEmployee);
  }

  updateEmployee(employeeId: number, newEmployee: Partial<IEmployee>): Observable<IEmployee> {
    return this.apiService.put<IEmployee>(`${this._baseURL}/${employeeId}`, newEmployee);
  }

  removeEmployee(employeeId: number): Observable<void> {
    return this.apiService.delete<void>(`${this._baseURL}/${employeeId}`);
  }
}
