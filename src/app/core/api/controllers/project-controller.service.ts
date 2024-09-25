import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { IProject } from '../../models/IProject';
import { IProjectType } from '../../models/IProjectType';
import { EStatus } from '../../../dashboard/project-types/shared/enums/EStatus';

@Injectable({
  providedIn: 'root',
})
export class ProjectControllerService {
  private _baseURL = `/project`;

  constructor(private apiService: ApiService) {}

  getProject(projectId: number): Observable<IProject> {
    return this.apiService.get<IProject>(`${this._baseURL}/${projectId}`);
  }

  changeStatus(projectId: number, newStatus: EStatus): Observable<IProject> {
    return this.apiService.put<IProject>(`${this._baseURL}/${projectId}/status`, { status: newStatus });
  }

  removeProject(projectId: number): Observable<IProject> {
    return this.apiService.delete<IProject>(`${this._baseURL}/${projectId}`);
  }

  editIProject(projectId: number, newIssue: Partial<IProject>): Observable<IProject> {
    return this.apiService.put(`${this._baseURL}/${projectId}`, newIssue);
  }

  editProjectColor(projectId: number, color: string): Observable<IProject> {
    return this.apiService.put(`${this._baseURL}/${projectId}/color`, { color });
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

  getDropdown(): Observable<Partial<IProjectType>[]> {
    return this.apiService.get<Partial<IProjectType>[]>(`${this._baseURL}/dropdown`);
  }

  getStack(): Observable<Partial<IProjectType>[]> {
    return this.apiService.get<Partial<IProjectType>[]>(`${this._baseURL}/stack`);
  }
}
