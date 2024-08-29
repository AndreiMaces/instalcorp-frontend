import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { IIssueType } from '../../models/IIssueType';

@Injectable({
  providedIn: 'root',
})
export class IssueTypeControllerService {
  private _baseURL = `/issue-type`;

  constructor(private apiService: ApiService) {}

  getIssueTypes(): Observable<IIssueType[]> {
    return this.apiService.get<IIssueType[]>(this._baseURL);
  }

  getIssueType(
    issueTypeId: number,
    payload: {
      sortingCriteria: string;
      sortingOrder: string;
    },
  ): Observable<IIssueType> {
    return this.apiService.get<IIssueType>(`${this._baseURL}/${issueTypeId}`, payload);
  }

  getIssueTypesArchive(): Observable<IIssueType[]> {
    return this.apiService.get<IIssueType[]>(`${this._baseURL}/archive`);
  }

  createIssueType(issueType: Partial<IIssueType>): Observable<IIssueType> {
    return this.apiService.post<IIssueType>(this._baseURL, issueType);
  }

  updateIssueType(issueType: IIssueType): Observable<IIssueType> {
    return this.apiService.put<IIssueType>(`${this._baseURL}/${issueType.id}`, issueType);
  }

  deleteIssueType(issueTypeId: number): Observable<void> {
    return this.apiService.delete<void>(`${this._baseURL}/${issueTypeId}`);
  }

  restoreIssueType(issueTypeId: number): Observable<void> {
    return this.apiService.put<void>(`${this._baseURL}/${issueTypeId}/restore`);
  }

  updateIssueTypeOrder(issueTypes: IIssueType[]): Observable<void> {
    return this.apiService.put<void>(`${this._baseURL}/reorder`, issueTypes);
  }

  updateIssuesOrder(issueType: IIssueType): Observable<void> {
    return this.apiService.put<void>(`${this._baseURL}/${issueType.id}/reorder`, issueType);
  }

  getArchive(issueTypeId: number): Observable<IIssueType> {
    return this.apiService.get<IIssueType>(`${this._baseURL}/${issueTypeId}/issue/archive`);
  }

  getIssueTypesDropdown(): Observable<Partial<IIssueType>[]> {
    return this.apiService.get<Partial<IIssueType>[]>(`${this._baseURL}/dropdown`);
  }
}
