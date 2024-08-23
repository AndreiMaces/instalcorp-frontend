import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { IIssue } from '../../models/IIssue';

@Injectable({
  providedIn: 'root',
})
export class IssueControllerService {
  private _baseURL = `/issue`;

  constructor(private apiService: ApiService) {}

  getIssue(issueId: number): Observable<IIssue> {
    return this.apiService.get<IIssue>(`${this._baseURL}/${issueId}`)
  }

  removeIssue(issueId: number): Observable<IIssue> {
    return this.apiService.delete<IIssue>(`${this._baseURL}/${issueId}`);
  }

  editIssue(issueId: number, newIssue: Partial<IIssue>): Observable<IIssue> {
    return this.apiService.put(`${this._baseURL}/${issueId}`, newIssue);
  }

  createIssue(newIssue: Partial<IIssue>): Observable<IIssue> {
    return this.apiService.post<IIssue>(`${this._baseURL}`, newIssue);
  }

  cloneIssue(issueId: number): Observable<IIssue> {
    return this.apiService.post<IIssue>(`${this._baseURL}/${issueId}/duplicate`);
  }

  restoreIssue(issueId: number): Observable<IIssue> {
    return this.apiService.put<IIssue>(`${this._baseURL}/${issueId}/restore`);
  }
}
