/* eslint-disable no-use-before-define */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly _apiUrl: string;
  private _isMakingRequest = false;

  constructor(private http: HttpClient) {
    this._apiUrl = environment.server;
  }

  get<T>(path: string, params = {}, headers = {}, options = {}): Observable<T> {
    this._isMakingRequest = true;
    return this.http
      .get<T>(`${this._apiUrl}${path}`, {
        params,
        headers,
        ...options,
      })
      .pipe(
        map((response) => {
          this._isMakingRequest = false;
          return response;
        }),
      );
  }

  post<T>(path: string, body = {}, params = {}, headers = {}): Observable<T> {
    this._isMakingRequest = true;
    return this.http
      .post<T>(`${this._apiUrl}${path}`, body, {
        params,
        headers,
      })
      .pipe(
        map((response) => {
          this._isMakingRequest = false;
          return response;
        }),
      );
  }

  put<T>(path: string, body = {}, params = {}): Observable<T> {
    this._isMakingRequest = true;
    return this.http.put<T>(`${this._apiUrl}${path}`, body, { params }).pipe(
      map((response) => {
        this._isMakingRequest = false;
        return response;
      }),
    );
  }

  delete<T>(path: string, params = {}): Observable<T> {
    this._isMakingRequest = true;
    return this.http.delete<T>(`${this._apiUrl}${path}`, { params }).pipe(
      map((response) => {
        this._isMakingRequest = false;
        return response;
      }),
    );
  }

  public get isMakingRequest(): boolean {
    return this._isMakingRequest;
  }
}
