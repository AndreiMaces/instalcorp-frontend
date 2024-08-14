/* eslint-disable no-use-before-define */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly _apiUrl: string;

  constructor(private http: HttpClient) {
    this._apiUrl = environment.server;
  }

  get<T>(path: string, params = {}, headers = {}, options = {}): Observable<T> {
    return this.http.get<T>(`${this._apiUrl}${path}`, {
      params,
      headers,
      ...options,
    });
  }

  post<T>(path: string, body = {}, params = {}, headers = {}): Observable<T> {
    return this.http.post<T>(`${this._apiUrl}${path}`, body, {
      params,
      headers,
    });
  }

  put<T>(path: string, body = {}, params = {}): Observable<T> {
    return this.http.put<T>(`${this._apiUrl}${path}`, body, { params });
  }

  delete<T>(path: string, params = {}): Observable<T> {
    return this.http.delete<T>(`${this._apiUrl}${path}`, { params });
  }
}
