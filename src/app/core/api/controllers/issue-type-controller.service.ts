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

  createIssueType(issueType: Partial<IIssueType>): Observable<IIssueType> {
    return this.apiService.post<IIssueType>(this._baseURL, issueType);
  }
}
