import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { IEmployeeIssue } from '../../models/IEmployeeIssue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeIssueControllerService {
  private _baseURL = `/employee-issue`;

  constructor(private apiService: ApiService) {}

  createEmployeeIssue(newEmployee: Partial<IEmployeeIssue>): Observable<IEmployeeIssue> {
    return this.apiService.post<IEmployeeIssue>(`${this._baseURL}`, newEmployee);
  }
}
