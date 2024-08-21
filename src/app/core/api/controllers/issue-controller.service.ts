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

  removeIssue(issueId: number): Observable<IIssue> {
    return this.apiService.delete<IIssue>(`${this._baseURL}/${issueId}`);
  }
}
