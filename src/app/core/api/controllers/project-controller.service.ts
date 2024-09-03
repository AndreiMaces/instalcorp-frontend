import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { IProject } from '../../models/IProject';

@Injectable({
  providedIn: 'root',
})
export class ProjectControllerService {
  private _baseURL = `/project`;

  constructor(private apiService: ApiService) {}

  getProject(projectId: number): Observable<IProject> {
    return this.apiService.get<IProject>(`${this._baseURL}/${projectId}`);
  }

  removeProject(projectId: number): Observable<IProject> {
    return this.apiService.delete<IProject>(`${this._baseURL}/${projectId}`);
  }

  editIProject(projectId: number, newIssue: Partial<IProject>): Observable<IProject> {
    return this.apiService.put(`${this._baseURL}/${projectId}`, newIssue);
  }

  createProject(newIssue: Partial<IProject>): Observable<IProject> {
    return this.apiService.post<IProject>(`${this._baseURL}`, newIssue);
  }

  cloneProject(projectId: number): Observable<IProject> {
    return this.apiService.post<IProject>(`${this._baseURL}/${projectId}/duplicate`);
  }

  restoreProject(projectId: number): Observable<IProject> {
    return this.apiService.put<IProject>(`${this._baseURL}/${projectId}/restore`);
  }
}
