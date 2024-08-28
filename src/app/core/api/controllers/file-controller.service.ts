import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileControllerService {
  private _baseURL = `/uploads`;

  constructor(private apiService: ApiService) {}

  uploadFile(file: File): Observable<{ url: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.apiService.post<{ url: string }>(`${this._baseURL}`, formData);
  }
}
