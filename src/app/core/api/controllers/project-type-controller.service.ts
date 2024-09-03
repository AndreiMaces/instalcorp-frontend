import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { IProjectType } from '../../models/IProjectType';

@Injectable({
  providedIn: 'root',
})
export class ProjectTypeControllerService {
  private _baseURL = `/project-type`;

  constructor(private apiService: ApiService) {}

  getProjectTypes(): Observable<IProjectType[]> {
    return this.apiService.get<IProjectType[]>(this._baseURL);
  }

  getProjectType(
    projectTypeId: number,
    payload: {
      sortingCriteria: string;
      sortingOrder: string;
    },
  ): Observable<IProjectType> {
    return this.apiService.get<IProjectType>(`${this._baseURL}/${projectTypeId}`, payload);
  }

  getProjectTypesArchive(): Observable<IProjectType[]> {
    return this.apiService.get<IProjectType[]>(`${this._baseURL}/archive`);
  }

  createProjectType(projectType: Partial<IProjectType>): Observable<IProjectType> {
    return this.apiService.post<IProjectType>(this._baseURL, projectType);
  }

  updateProjectType(projectType: IProjectType): Observable<IProjectType> {
    return this.apiService.put<IProjectType>(`${this._baseURL}/${projectType.id}`, projectType);
  }

  deleteProjectType(projectTypeId: number): Observable<void> {
    return this.apiService.delete<void>(`${this._baseURL}/${projectTypeId}`);
  }

  restoreProjectType(projectTypeId: number): Observable<void> {
    return this.apiService.put<void>(`${this._baseURL}/${projectTypeId}/restore`);
  }

  updateProjectTypeOrder(projectTypes: IProjectType[]): Observable<void> {
    return this.apiService.put<void>(`${this._baseURL}/reorder`, projectTypes);
  }

  updateProjectsOrder(projectType: IProjectType): Observable<void> {
    return this.apiService.put<void>(`${this._baseURL}/${projectType.id}/reorder`, projectType);
  }

  getArchive(projectTypeId: number): Observable<IProjectType> {
    return this.apiService.get<IProjectType>(`${this._baseURL}/${projectTypeId}/project/archive`);
  }

  getProjectTypesDropdown(): Observable<Partial<IProjectType>[]> {
    return this.apiService.get<Partial<IProjectType>[]>(`${this._baseURL}/dropdown`);
  }
}
